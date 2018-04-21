import os
from distutils.util import strtobool
import datetime

DEBUG = strtobool(os.environ.get('DEBUG', 'yes'))
SECRET_KEY = os.environ.get('SECRET', 'defaultsecret')

SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/database.db'

APPLICATION_ROOT = '/api/accounts'

JWT_SECRET_KEY = SECRET_KEY
JWT_ACCESS_TOKEN_EXPIRES = datetime.timedelta(
        minutes=100)
JWT_REFRESH_TOKEN_EXPIRES = datetime.timedelta(
        minutes=100)
