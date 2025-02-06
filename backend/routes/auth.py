from flask import Blueprint, request, jsonify
from models import User
from app import db
from flask_jwt_extended import create_access_token

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(username=data['username'], password=data['password'])

    db.session.add(new_user)
    db.session.commit()

    return jsonify(message='User registered'), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()

    if user and user.password == data['password']:
        access_token = create_access_token(identity=user.username)
        return jsonify(access_token=access_token), 200
    
    return jsonify(message='Invalid credentials'), 401