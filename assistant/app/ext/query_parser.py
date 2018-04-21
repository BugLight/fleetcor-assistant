import requests


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
        return requests.request(self.__method, self.__url,
                                json=self.__data).json()

    def __init__(self, q):
        commands = {}
        api = QueryParser().get_api()
        api_url = QueryParser().get_api_url()
        api_actions = api.get('actions')
        api_resources = api.get('resources')

        cmd = q.split()[0].lower()  # First word in query
        action = Query.find_by_name(api_actions, cmd)
        resource = Query.find_by_name(api_resources, cmd)

        if cmd in commands:
            self.__command = (commands.get(cmd))(q)
        elif action:
            self.__method = action.get('method', 'POST')
            raise NotImplemented
        elif resource:
            self.__method = resource.get('method', 'GET')
            raise NotImplemented
        else:
            raise UnknownCommandError()

    def __call__(self):
        return self.__command()


def execute_query(q):
    try:
        query = Query(q)
        return query()
    except UnknownCommandError:
        return {'message': 'Неизвестная команда'}
