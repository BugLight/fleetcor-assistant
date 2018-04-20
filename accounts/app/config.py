import os
from distutils.util import strtobool

DEBUG = strtobool(os.environ.get('DEBUG'))
SECRET_KEY = os.environ.get('SECRET')
