from flask import Blueprint, request, abort, jsonify
from assistant.app.ext.query_parser import execute_query

query = Blueprint('query', __name__)


@query.route('/query')
def parse_query():
    q = request.args.get('q', None)
    if not q:
        abort(400)
    return jsonify(execute_query(q))
