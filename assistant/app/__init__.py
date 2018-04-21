from flask import Flask
from assistant.app.ext.routes_prefixer import RoutesPrefixer
from assistant.app.ext.query_parser import QueryParser


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')

    prefixer = RoutesPrefixer(app, app.config['APPLICATION_ROOT'])
    parser = QueryParser(app)

    from accounts.app.app_error import process_error
    app.register_error_handler(404, process_error)
    app.register_error_handler(400, lambda: jsonify(
    	errors= [
    		{code: 400}
    	]
    ))

    from assistant.app.query import query
    app.register_blueprint(query)

    return app
