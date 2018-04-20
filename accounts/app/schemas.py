from marshmallow import Schema, fields


class AccountSchema(Schema):
    id = fields.Integer(dump_only=True)
    name = fields.String()


class BillSchema(Schema):
    id = fields.Integer(dump_only=True)
    account_id = fields.Integer(load_only=True)
    balance = fields.Float(dump_only=True)
