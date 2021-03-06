import os
from distutils.util import strtobool

DEBUG = strtobool(os.environ.get('DEBUG', 'yes'))
SECRET_KEY = os.environ.get('SECRET', 'defaultsecret')

APPLICATION_ROOT = '/api/assistant'
API_URL = 'http://localhost/api/accounts'
