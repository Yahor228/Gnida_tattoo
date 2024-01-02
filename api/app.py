from flask import Flask, jsonify
from categories_data import categories_data
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})



@app.route('/categories', methods=['GET'])
def get_categories():
    return jsonify(categories_data), 200, {'Content-Type': 'application/json; charset=utf-8'}

if __name__ == '__main__':
    app.run(debug=True)