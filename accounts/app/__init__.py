from flask import Flask
from accounts.app.ext.api_info import ApiInfo
from accounts.app.models import db
from flask_migrate import Migrate

api_info = ApiInfo()

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')

    api_info.init_app(app)
    db.init_app(app)

    migrate = Migrate(app, db)

    from accounts.app.accounts import accounts
    app.register_blueprint(accounts, url_prefix='/accounts')

    from accounts.app.bills import bills
    app.register_blueprint(bills, url_prefix='/bills')

    return app
