'''
This extension provides global routes prefixes for flask
application.
'''


class RoutesPrefixer(object):
    def __prefix_routes(self, f):
        def wrapper(path, *args, **kwargs):
            return f(self.__prefix + path, *args, **kwargs)
        return wrapper

    def __init__(self, app=None, prefix=''):
        self.__prefix = prefix
        if app:
            self.init_app(app)

    def init_app(self, app):
        app.add_url_rule = self.__prefix_routes(app.add_url_rule)
