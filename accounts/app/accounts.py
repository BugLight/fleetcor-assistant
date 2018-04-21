from flask import Blueprint, abort, jsonify
from accounts.app import api_info
from marshmallow_jsonschema import JSONSchema

from accounts.app.models import Account, Bill
from accounts.app.schemas import AccountSchema, BillSchema

accounts = Blueprint('accounts', __name__)

json_schema = JSONSchema()
account_schema = AccountSchema()
bill_schema = BillSchema()


@api_info.resource('аккаунт', '/accounts/<id>', schema=json_schema.dump(account_schema),
                   desc='Account information')
@accounts.route('/<int:id>')
def get_account(id):
    account = Account.query.get(id)
    if not account:
        abort(404)
    return jsonify(account=account_schema.dump(account))


@accounts.route('/<int:id>/bills')
def get_account_bills(id):
    account = Account.query.get(id)
    if not account:
        abort(404)
    bills = [{'bill': bill_schema.dump(b)} for b in account.bills]
    return jsonify(bills=bills)
