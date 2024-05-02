"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from utils import APIException, generate_sitemap
#from admin import setup_admin
#from models import db, User
from models import ArbolFamiliar
#from models import Person
family = ArbolFamiliar("Yanez")

app = Flask(__name__)
app.url_map.strict_slashes = False
#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_CONNECTION_STRING')
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#MIGRATE = Migrate(app, db)
#db.init_app(app) #ultima comentada
CORS(app)
#setup_admin(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

@app.route('/')
def sitemap():
    return generate_sitemap(app)

# generate sitemap with all your endpoints

##RUTAS
#esta de mas esto
#@app.route
#def sitemap():
    #return generate_sitemap(app)

@app.route('/user', methods=['GET'])
def handle_hello():

    response_body = {
        "msg": "Hello, this is your GET /user response "
    }

    return jsonify(response_body), 200

@app.route('/all', methods=['GET'])
def handle_all():
    return jsonify(family.member), 200

@app.route('/member/<int:id>', methods=['GET'])
def handle_member(id=None):
    callfunction = family.idMember(id)
    return jsonify(callfunction), 200


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)