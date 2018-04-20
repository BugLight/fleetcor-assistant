from marshmallow import Schema, fields


class AccountSchema(Schema):
    id = fields.Integer(dump_only=True)
    name = fields.String()
