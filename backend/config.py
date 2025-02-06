import os

class Config:
    basedir = os.path.abspath(os.path.dirname(__file__))
    instance_path = os.path.join(basedir, 'instance')
    
    # Ensure instance folder exists
    os.makedirs(instance_path, exist_ok=True)
    
    # Create database path
    db_path = os.path.join(instance_path, 'database.db')
    
    SQLALCHEMY_DATABASE_URI = f'sqlite:///{db_path}'
    JWT_SECRET_KEY = 'secret_key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False