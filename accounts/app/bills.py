from flask import Blueprint, abort, jsonify
from accounts.app import api_info
from marshmallow_jsonschema import JSONSchema

from accounts.app.models import Bill
from accounts.app.schemas import BillSchema


bills = Blueprint('bills', __name__)

json_schema = JSONSchema()
bill_schema = BillSchema()


@api_info.resource('/bills/<id>', schema=json_schema.dump(bill_schema),
                   desc='Bill information')
@bills.route('/<int:id>')
def get_bill(id):
    bill = Bill.query.get(id)
    if not bill:
        abort(404)
    return jsonify(bill=bill_schema.dump(bill))
