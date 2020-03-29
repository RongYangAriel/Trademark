from flask import Flask, escape, request, jsonify
from flask import after_this_request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():
    @after_this_request
    def add_header(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response
        
    # POST request
    if request.method == 'POST':
        print('Incoming..')
        print(request.get_json())  # parse as JSON
        return 'OK', 200

    # GET request
    else:
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)

    