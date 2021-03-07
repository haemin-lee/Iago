from flask import Flask
from flask import request
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///buttons.db'

db = SQLAlchemy(app)

class Buttons(db.Model):
    id = db.Column(db.String, primary_key=True)
    color = db.Column(db.String(20), nullable=False)

new_button = Buttons(id="button", color="Black")

try:
    db.session.add(new_button)
    db.session.commit()
except:
    return "There was error adding the first element of db"

@app.route('/',methods = ['POST', 'GET'])
def result():
    print("Entered result()")

    if request.method == 'POST':
        content = request.get_json(force=True)
        thiscolor = content['button']

        x = db.session.query(Buttons).get("button")
        x.color = thiscolor
        db.session.commit()

        return str(content)

    if request.method == 'GET':
        x = db.session.query(Buttons).first()
        thiscolor = x.color
        return str(thiscolor)



if __name__ == "_main_":
    app.run(debug=True)