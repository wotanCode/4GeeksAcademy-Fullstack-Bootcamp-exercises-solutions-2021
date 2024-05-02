import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from eralchemy import render_er

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    email = Column(String(120))
    password = Column(String(80))
    #is_active = Column(Boolean())

class Planet(Base):
    __tablename__ = 'planet'
    id = Column(Integer, primary_key=True)
    name = Column(String(120), nullable=False)
    density = Column(String(80), nullable=False)
    climate = Column(String(80), nullable=False)
    gravity = Column(String(80), nullable=False)

class People(Base):
    __tablename__ = 'people'
    id = Column(Integer, primary_key=True)
    name = Column(String(120), nullable=False)
    gender = Column(String(120), nullable=False)
    height = Column(String(120),  nullable=False)
    #Relacion de la persona con el planeta
    planet_id = Column(Integer, ForeignKey('planet.id'))
    planet = relationship(Planet)

class Vehicle(Base):
    __tablename__ = 'vehicle'
    id = Column(Integer, primary_key=True)
    name = Column(String(120), nullable=False)
    model = Column(String(80), nullable=False)
    passengers = Column(String(80), nullable=False)
    vehicle_class = Column(String(80), nullable=False)

class FavoritePlanet(Base):
    __tablename__ = 'favoritePlanet'
    id = Column(Integer, primary_key=True)
    #GUARDANDO RELACIONES
    user_id = Column(Integer, ForeignKey('user.id'))
    planet_id = Column(Integer, ForeignKey('planet.id'))
    user = relationship(User)
    planet = relationship(Planet)

class FavoriteVehicle(Base):
    __tablename__ = 'favoriteVehicle'
    id = Column(Integer, primary_key=True)
    #GUARDANDO RELACIONES
    user_id = Column(Integer, ForeignKey('user.id'))
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'))
    user = relationship(User)
    vehicle = relationship(Vehicle)

class FavoritePeople(Base):
    __tablename__ = 'favoritePeople'
    id = Column(Integer, primary_key=True)
    #GUARDANDO RELACIONES
    user_id = Column(Integer, ForeignKey('user.id'))
    people_id = Column(Integer, ForeignKey('people.id'))
    user = relationship(User)
    people = relationship(People)

    def to_dict(self):
        return {}

## Draw from SQLAlchemy base
render_er(Base, 'diagram.png')