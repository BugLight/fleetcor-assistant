from flask import Blueprint, abort, jsonify
from accounts.app import api_info
from marshmallow_jsonschema import JSONSchema

from accounts.app.models import Account
from accounts.app.schemas import AccountSchema

accounts = Blueprint('accounts', __name__)

json_schema = JSONSchema()
account_schema = AccountSchema()


@api_info.resource('/accounts/<id>', schema=json_schema.dump(account_schema),
                   desc='Account information')
@accounts.route('/<int:id>')
def get_account(id):
    account = Account.query.get(id)
    if not account:
        abort(404)
    return jsonify(account=schema.dump(account))
