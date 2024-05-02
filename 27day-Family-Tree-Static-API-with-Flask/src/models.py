from flask_sqlalchemy import SQLAlchemy
#from random import randint

#db = SQLAlchemy()

class ArbolFamiliar:
    def __init__(self, apellido):
        self.apellido = apellido
        self.member = [
                        {
                        "id": 1,
                        "edad":90,
                        "apellido": self.apellido,
                        "nombre": "Juan",
                        "id_padres" : None,
                        "id_hijos" : [2,3,4]
                        },
                        {
                        "id": 2,
                        "edad":50,
                        "apellido": self.apellido,
                        "nombre": "Leonides",
                        "id_padres": [1],
                        "id_hijos" : None
                        },
                        {
                        "id": 3,
                        "edad":30,
                        "apellido": self.apellido,
                        "nombre": "Maria",
                        "id_padres": None,
                        "id_hijos" : None
                        },
                        {
                        "id": 4,
                        "edad":30,
                        "apellido": self.apellido,
                        "nombre": "Pedro",
                        "id_padres": None,
                        "id_hijos" : [5]
                        },
                        {
                        "id": 5,
                        "edad":15,
                        "apellido": self.apellido,
                        "nombre": "Pedro",
                        "id_padres": [4],
                        "id_hijos" : None
                        },
                        {
                        "id": 6,
                        "edad":2,
                        "apellido": self.apellido,
                        "nombre": "Nicola",
                        "id_padres": None,
                        "id_hijos" : None
                        },
                        {
                        "id": 7,
                        "edad":2,
                        "apellido": self.apellido,
                        "nombre": "Valeria",
                        "id_padres": None,
                        "id_hijos" : None
                        }
                        ]

    def idMember(self, id):
        for i in self.member:
            if i["id"] == int(id):
                return i
        return None
