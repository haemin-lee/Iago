from flask import Flask
from flask import request
from flask import jsonify
import json

app = Flask(__name__)

# @app.route("/")
# def index():
#     headers = request.headers
#     return "Request headers:\n" + str(headers)

# content = jsonify({"hello" : "world"})
@app.route('/',methods = ['POST', 'GET'])
def result():
    print("Entered result()")
    content = "default"

    # result = "oopsie"
    if request.method == 'POST':
        # result = request.form
        # headers = request.headers
        content = request.get_json(force=True)
        # print()
        # return "Request\n\nresult:\n" + str(result) + "\nheaders:\n" + str(headers) + "\ncontent:\n" + content
        print("this is the content being posted:\n", jsonify(content))
        return jsonify(content)

    if request.method == 'GET':
        # result = content
        # content = request.args.get('Button')
        # content = request.json['Button']
        content = request.json
        # content = request.get_json(force=True)
        # return "Request<br>result:<br>" + "<br>content:<br><br>" + str(content)
        print("okay now this is the content that was gotten:\n", jsonify(content))
        return jsonify(content)


if __name__ == "_main_":
    app.run(debug=True)
