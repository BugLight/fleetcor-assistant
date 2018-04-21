from flask import Blueprint, request, abort, jsonify
from marshmallow import ValidationError
from flask_jwt_extended import (
    JWTManager, create_access_token, create_refresh_token,
    get_jti, decode_token
)

from accounts.app.schemas import AccountSchema
from accounts.app.models import Account, RefreshToken, db

auth = Blueprint('auth', __name__)
jwt = JWTManager()


@auth.route('/auth', methods=['POST'])
def authorize():
    data = request.get_json()
    if not data:
        abort(400)
    try:
        data = AccountSchema(only=('email', 'password')).load(data)
    except ValidationError as error:
        abort(401)
    if not Account.auth(data['email'], data['password']):
        abort(401)
    account = Account.query.filter_by(email=data['email']).first()
    ret = {
        'access_token': create_access_token(identity=account),
        'refresh_token': create_refresh_token(identity=account)
    }
    refresh_jti = get_jti(ret['refresh_token'])
    if not account.refresh_token:
        account.refresh_token = RefreshToken(account=account, jti=refresh_jti)
    else:
        account.refresh_token.jti = refresh_jti
    db.session.add(account)
    db.session.commit()
    return jsonify(**ret)

@auth.route('/refresh', methods=['POST'])
def refresh():
    if not request.is_json:
        abort(400)
    token = request.json.get('refresh_token', None)
    if not token:
        abort(400)
    token = decode_token(token)
    jti = token.get('jti')
    account_id = int(token.get('identity'))
    account = User.query.get(account_id)
    if not account or account.refresh_token.jti != jti:
        abort(401)
    access_token = create_access_token(identity=account)
    new_refresh = create_refresh_token(identity=account)
    account.refresh_token.jti = get_jti(new_refresh)
    db.session.add(account)
    db.session.commit()
    return jsonify(access_token=access_token, refresh_token=new_refresh)


@jwt.user_identity_loader
def user_identity(account):
    return account.id


@jwt.expired_token_loader
def expired_token():
    return jsonify(code=401, errors=[
        {'message': 'token expired!'}
    ])


@jwt.invalid_token_loader
def invalid_token(error):
    return jsonify(code=401, errors=[
        {'message': error}
    ])
