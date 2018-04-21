from flask import Blueprint, jsonify


def process_error(data):
	return jsonify(errors=[
		{'code': 404}
	])
