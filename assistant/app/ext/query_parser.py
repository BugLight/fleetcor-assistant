from flask import request

import requests
import re

class QueryParser(object):
    class __QueryParser:
        def __init__(self, app=None, api_url=''):
            if app:
                self.api_url = app.config.get('API_URL', '')
            else:
                self.api_url = api_url


    __instance = None

    def __init__(self, *args, **kwargs):
        if not QueryParser.__instance:
            QueryParser.__instance = QueryParser.__QueryParser(*args, **kwargs)

    def get_api_url(self):
        return QueryParser.__instance.api_url

    def get_api(self):
        return requests.options(self.get_api_url()).json()

    def request(self, method, url, data={}):
        headers = {'Authorization': request.headers.get('Authorization')}
        url = self.get_api_url() + url
        requests.request(method, url, json=data, headers=headers).json()


class UnknownCommandError(Exception):
    pass


class CommandArgsError(Exception):
    pass


class Query(object):
    __method = ''
    __url = ''
    __data = {}

    @staticmethod
    def find_by_name(l, n):
        for value in l:
            if value.get('name', None) == n:
                return value
        return None

    def __command(self):
        return QueryParser.request(self.__method, self.__url, data=self.__data)

    def __init__(self, q):
        commands = {}
        api = QueryParser().get_api()
        api_url = QueryParser().get_api_url()
        api_actions = api.get('actions')
        api_resources = api.get('resources')
        cmd = q.split()[0].lower()  # First word in query
        args = [w.lower() for w in q.split()[1:]]  # Arguments
        action = Query.find_by_name(api_actions, cmd)
        resource = Query.find_by_name(api_resources, cmd)

        if cmd in commands:
            self.__command = (commands.get(cmd))(q)
        elif action:
            self.__method = action.get('method', 'POST')
            url = action.get('url')
            self.__url = Query.patch_url(url, args)
            for i, a in enumerate(action.get('args', [])):
                if i >= len(args):
                    raise CommandArgsError()
                self.__data[a] = args[i]
        elif resource:
            self.__method = resource.get('method', 'GET')
            url = resource.get('url')
            self.__url = Query.patch_url(url, args)
        else:
            raise UnknownCommandError()

    def __call__(self):
        return self.__command()

    @staticmethod
    def patch_url(url, l):
        count = re.findall(r'<\w*>',url)
        if len(l) < len(count):
            raise CommandArgsError()
        else:
            n = 0
            iterator = re.finditer(r'<\w*>',url)
            for i in iterator:
                m = re.search(r'(?P<name><\w*>)', url)
                pat = m.group('name')
                url = url.replace(pat, str(l.pop(n)), 1)
                n += 1
        return url

def execute_query(q):
    try:
        query = Query(q)
        return query()
    except UnknownCommandError:
        return {'message': 'Неизвестная команда'}
