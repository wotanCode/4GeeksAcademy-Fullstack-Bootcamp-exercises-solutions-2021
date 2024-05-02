import json
from flask import Flask,jsonify,request
app = Flask(__name__)
todos = [
    { "label": "My first task", "done": False },
    { "label": "My second task", "done": False },
    { "label": "prueba task", "done": False }
]

@app.route('/todos', methods=['GET'])
def hello_world():
    global todos
    # puedes convertir esa variable en un string json así
    json_text = jsonify(todos)
    return json_text
    ####
    #Para la seccion 03.3 debe tener el siguiente return en vez del actual
    #return '<h1>Hello!</h1>'
    ####

##PARA EL PASO 7 y 7.1 DEBE TENER ESTE CODIGO
#@app.route('/todos', methods=['POST'])
#def add_new_todo():
    #request_body = request.data
    #print("Incoming request with the following body", request_body)
    #return 'Response for the POST todo'

@app.route('/todos', methods=['POST'])
def add_new_todo():
    global todos
    request_body = request.data
    ###print("------------>",request_body)
    decoded_object = json.loads(request_body)
    ###print("------------>",decoded_object)
    todos.append(decoded_object)
    json_text = jsonify(todos)
    return json_text

@app.route('/todos/<int:position>', methods=['DELETE'])
def delete_todo(position):
    global todos
    if position <= len(todos):
        todos.pop(position)
    else:
        raise Exception("No ID here")
    return jsonify(todos)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)