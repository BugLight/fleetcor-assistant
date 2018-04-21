from marshmallow import Schema, fields


class AccountSchema(Schema):
    id = fields.Integer(dump_only=True)
    name = fields.String()
    email = fields.Email(required=True)
    password = fields.String(required=True, load_only=True)


class BillSchema(Schema):
    id = fields.Integer(dump_only=True)
    account_id = fields.Integer(load_only=True)
    balance = fields.Float(dump_only=True)
