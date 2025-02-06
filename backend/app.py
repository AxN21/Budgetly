from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from config import Config
from flask_cors import CORS
from flask_migrate import Migrate
import os
from pathlib import Path

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    instance_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'instance')
    os.makedirs(instance_path, exist_ok=True)
    os.chmod(instance_path, 0o777)

    print(f"Database path: {app.config['SQLALCHEMY_DATABASE_URI']}")

    CORS(app)
    db.init_app(app)
    jwt = JWTManager(app)
    migrate = Migrate(app, db)

    with app.app_context():
        try:
            from sqlalchemy import inspect
            inspector = inspect(db.engine)
            existing_tables = inspector.get_table_names()
            print(f"Existing tables: {existing_tables}")
        except Exception as e:
            print(f"Error creating database: {e}")
            print(f"Current working directory: {os.getcwd()}")
            print(f"Instance path: {instance_path}")

    from routes.auth import auth
    from routes.transactions import transactions
    from routes.views import views

    app.register_blueprint(auth)
    app.register_blueprint(transactions)
    app.register_blueprint(views)

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)

