from flask import Flask
from accounts.app.ext.api_info import ApiInfo

api_info = ApiInfo()

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')

    api_info.init_app(app)

    return app