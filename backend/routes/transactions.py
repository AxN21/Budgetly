from flask import Blueprint, request, jsonify
from models import Transactions
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

transactions = Blueprint('transactions', __name__)

@transactions.route('/transactions', methods=['POST'])
@jwt_required()
def add_transaction():
    current_user = get_jwt_identity()
    data = request.get_json()
    new_transaction = Transaction(user_id=current_user, name=data['name'], date=date['date'], amount=data['amount'], description=data.get('description', ''))
    db.session.add(new_transaction)
    db.session.commit()
    return jsonify(message="Transaction added"), 201

@transactions.route('/transactions', methods=['GET'])
@jwt_required()
def get_transactions():
    current_user = get_jwt_identity()
    transactions = Transaction.query.filter_by(user_id=current_user).all()
    return jsonify([{'id': t.id, 'name': t.name, 'date': t.date, 'amount': t.amount, 'description': t.description} for t in transactions]), 200
