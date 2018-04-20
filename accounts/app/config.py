import os
from distutils.util import strtobool

DEBUG = strtobool(os.environ.get('DEBUG', 'yes'))
SECRET_KEY = os.environ.get('SECRET', 'defaultsecret')

SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/database.db'
