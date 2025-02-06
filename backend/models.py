from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)


class Transactions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(20), unique=False, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    date = db.Column(db.Date, nullable=False)
    description = db.Column(db.String(255))

class Income(db.Model):
    __tablename__ = 'income'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    #date = db.Column(db.Date, nullable=False)
    category = db.Column(db.String(15), nullable=False)
    description = db.Column(db.String(100), nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'amount': self.amount,
            #'date': self.date,
            'category': self.category,
            'description': self.description
        }