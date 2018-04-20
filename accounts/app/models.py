from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class Account(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String, unique=True)

	def __repr__(self):
		return '<Account %r>' % self.name


class Bill(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	balance = db.Column(db.Float)
	account_id = db.Column(db.Integer, db.ForeignKey('account.id'))
	account = db.relationship('Account',
		backref=db.backref('accounts', lazy=True))

	def __repr__(self):
		return '<Bill %r>' % self.balance