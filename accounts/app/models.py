from flask_sqlalchemy import SQLAlchemy

from hashlib import sha256

db = SQLAlchemy()

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    email = db.Column(db.String(60), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)

    refresh_token = db.relationship('RefreshToken', backref='account',
                                    uselist=False, lazy=True)

    def __init__(self, *args, **kwargs):
            self.password = Account.hash(kwargs.pop('password'))
            super().__init__(*args, **kwargs)

    @staticmethod
    def hash(str):
        return sha256(str.encode('utf-8')).hexdigest()

    @staticmethod
    def auth(email, password):
        password = Account.hash(password)
        identity = Account.query.filter_by(email=email).first()
        return identity and identity.password == password

    def __repr__(self):
        return '<Account %r>' % self.name


class Bill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    balance = db.Column(db.Float, default=0.0)
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'))
    account = db.relationship('Account',
        backref=db.backref('bills', lazy=True))

    def __repr__(self):
        return '<Bill %r>' % self.balance


class RefreshToken(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'), unique=True, nullable=False)
    jti = db.Column(db.String(36), unique=True, nullable=False)
