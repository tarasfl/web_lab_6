# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

row2dict = lambda r: {c.name: str(getattr(r, c.name)) for c in r.__table__.columns}

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite3'
app.config['SECRET_KEY'] = "ss"
app.config['DATA_DIR'] = 'static'

db.init_app(app)


class Book(db.Model):
    id = db.Column(db.String(20), primary_key = True)
    pages = db.Column(db.Integer)
    author = db.Column(db.String(100))
    price = db.Column(db.Float)
    description = db.Column(db.String(100))

    def __init__(self, id, pages, author, price, description):
        self.pages = pages
        self.id = id
        self.author = author
        self.price = price
        self.description = description
x = datetime.datetime.now()

@app.route('/data')
def get_all_books():
    books =  Book.query.all()
    all_books = [row2dict(book) for book in books]
    return {"result": all_books}


@app.route('/data/<string:id>')
def get_book_by_id(id):
    book = Book.query.filter_by(id = id).first()
    res = row2dict(book)
    return {"result": res}


@app.route('/search/<string:text>')
def search(text):
    books = Book.query.filter(Book.author.contains(text)).all()
    res = [row2dict(book) for book in books]
    return {"result": res}


@app.route('/filters/author=<string:author>&price=<string:price>&pages=<string:pages>')
def get_book_by_filters(author, price, pages):
    if author != "None":
        books = Book.query.filter_by(author = author).all()
        res = [row2dict(book) for book in books]
        return {"result": res}
    if price != "None":
        price = price.split(' ')
        prices = price[0].split('-')
        if prices[1] == 'more':
            books = Book.query.filter( Book.price >int(prices[0])).all()
            res = [row2dict(book) for book in books]
            return {"result": res}
        prices = [int(price) for price in prices]
        books = Book.query.filter( Book.price.between(prices[0], prices[1])).all()
        res = [row2dict(book) for book in books]
        return {"result": res}

    if pages != "None":
        page = pages.split(' ')
        pages_list = page[0].split('-')
        if pages_list[1] == 'more':
            books = Book.query.filter( Book.pages > int(pages_list[0])).all()
            res = [row2dict(book) for book in books]
            return {"result": res}
        pages_list = [int(page) for page in pages_list]
        books = Book.query.filter( Book.pages.between(pages_list[0], pages_list[1])).all()
        res = [row2dict(book) for book in books]
        return {"result": res}
    

@app.route('/upload')
def upload_data():
    data  = [{
        "author": "Mark",
        "price": 14.3,
        "pages": 100,
        "description": "book description"
    },
    {   
        "author": "igor",
        "price": 2.1,
        "pages": 120,
        "description": "book description"
    },

    {
        "author": "Anton",
        "price": 6.3, 
        "pages": 400,
        "description": "book description"
    },
    {
        "author": "Anton",
        "price": 6.3, 
        "pages": 700,
        "description": "book description"
    },
    {
        "author": "Andryi",
        "price":993, 
        "pages": 40,
        "description": "book description"
    },
    {
        "author": "Dem",
        "price": 89,
        "pages": 50, 
        "description": "book description"
    }]
    for i in data:
        pages = int(i['pages'])
        author = str(i['author'])
        price = float(i['price'])
        description = str(i['description'])
        id = str(uuid.uuid4())
        book = Book(id=id, pages=pages, author= author, price= price, description=description)
        db.session.add(book) 

        db.session.commit()
    return {'status': "success"}

	
# Running app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.secret_key = 'super secret key'
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)
