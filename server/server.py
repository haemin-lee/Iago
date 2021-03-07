from flask import Flask
from flask import request
from flask import jsonify
from flask import g
import json

app = Flask(__name__)

# def get_color():
#     if 'color' not in g:
#         g.color = "black"
#     return g.color
color = "black"

@app.route('/',methods = ['POST', 'GET'])
def result():
    global color
    print("Entered result()")

    if request.method == 'POST':
        content = request.get_json(force=True)
        # with app.app_context(): 
        color = content["Button"]
        # g['color'] = content["Button"]
        print("content[Button] = " + content["Button"], "\n\tg.color = ", color)

        return jsonify(content)

    if request.method == 'GET':
        # with app.app_context(): 
        c = color
        # c = g.color
        print("got color: " + c)
        return c



if __name__ == "_main_":
    app.run(debug=True)