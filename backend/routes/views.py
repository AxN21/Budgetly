from flask import Blueprint, request, jsonify
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Income
from datetime import datetime

views = Blueprint('views', __name__)

@views.route('/dashboard', methods=['GET', 'POST'])
#@jwt_required()
def dashboard():
    return (
        print('it works')
    )


@views.route('/incomes', methods=['GET', 'POST'])
#@jwt_required()
def incomes():
    if request.method == 'GET':
        incomes = Income.query.all()
        return jsonify([income.to_dict() for income in incomes])

    if request.method == 'POST':
        data = request.json
        print("Received data: ", data)
        if all(key in data for key in ('title', 'amount', 'category', 'description')):
            try:
                # Log each step to identify where the error occurs
                print("Parsing amount...")
                amount = float(data['amount'])

                print("Parsing date...")
                #date = datetime.strptime(data['date'], '%Y-%m-%d')  # Ensure date format

                print("Creating Income object...")
                new_income = Income(
                    title=data['title'],
                    amount=amount,
                    #date=date,
                    category=data['category'],
                    description=data['description']
                )

                print("Adding to database...")
                db.session.add(new_income)
                db.session.commit()
                return jsonify(new_income.to_dict()), 201

            except ValueError as ve:
                print('ValueError:', ve)
                return jsonify({'error': 'Invalid data format'}), 400
            except Exception as e:
                print('General Exception:', e)
                return jsonify({'error': 'Invalid data format'}), 400

    print("Missing required fields")
    return jsonify({'error': 'Invalid data'}), 400

@views.route('/expenses', methods=['GET', 'POST'])
#@jwt_required()
def expenses():
    pass
