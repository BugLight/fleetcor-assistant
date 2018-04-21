from flask import jsonify

'''
Simple extension that provides your API calls map
via HTTP OPTIONS request.
'''


class ApiInfo(object):
    __api = {
        'resources': [],
        'actions': []
    }

    def __init__(self, app=None, use_doc=False):
        self.__use_doc = use_doc
        if app:
            self.init_app(app)

    def __get_api_info(self):
        return jsonify(self.__api)

    def init_app(self, app):
        app.add_url_rule('/', view_func=self.__get_api_info, methods=['OPTIONS'])

    def resource(self, name, url, desc='', schema=None, method='GET'):
        def decorator(f):
            resource = {
                'name': name,
                'url': url,
                'method': method,
                'schema': schema,
                'description': f.__doc__ if not desc and self.__use_doc else desc
            }
            self.__api['resources'].append(resource)
            return f
        return decorator

    def action(self, name, url, desc='', args=(), method='POST'):
        def decorator(f):
            action = {
                'name': name,
                'url': url,
                'method': method,
                'args': args,
                'description': f.__doc__ if not desc and self.__use_doc else desc
            }
            self.__api['actions'].append(action)
            return f
        return decorator
