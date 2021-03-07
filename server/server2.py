from flask import Flask
from flask import request
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
import json
from sqlalchemy.dialects import postgresql, mysql, sqlite # import uuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///buttons.db'

db = SQLAlchemy(app)
db.drop_all()
class Buttons(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    color = db.Column(db.String(20), nullable=False)

new_button = Buttons(color="Black")
db.create_all()

# try:
db.session.add(new_button)
db.session.commit()
# except Exception as e:
    # print("There was error adding the first element of db")
    # print("error?idk\n", e)
@app.route('/',methods = ['POST', 'GET'])
def result():
    print("Entered result()")

    if request.method == 'POST':
        content = request.get_json(force=True)
        thiscolor = content["Button"]

        x = db.session.query(Buttons).get("button")
        x.color = thiscolor
        db.session.commit()

        return jsonify(content)

    if request.method == 'GET':
        x = db.session.query(Buttons).first()
        thiscolor = x.color
        return str(thiscolor)



if __name__ == "_main_":
    app.run(debug=True)