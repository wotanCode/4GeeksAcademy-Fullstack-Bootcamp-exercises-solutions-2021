## `03.3` Tu primer Endpoint (ruta)

Como Flask es un servidor, no tiene sentido no añadirle URLs para exponerlas/publicarlas en internet, por ejemplo:

Como desarrollador, si quisieramos que las personas visitaran http://mydomain.com/hello y les apareciera un mensaje "Hello World", tendríamos que añadir el siguiente endpoint al archivo app.py:

```python
@app.route('/blabla', methods=['GET'])
def hello_world():
    return 'Hello, World!'
```

1. La primera línea `@app.route('/blabla')` especifica el endpoint que estará disponible desde ahora en adelante, en eeste caso `mydomain.com/blabla`.

2. La primera línea también especifica el método que se usará con esa URL, en este caso es el método `GET` (para obtener info).

3. La segunda línea define una función que será llamada por Flask cuando ese endpoint sea llamado por el usuario (cuando el usuario use `/hello`).

4. LA tercera línea retorna el texto: "Hello World" al cliente o navegador que lo solicite.
 

## 📝Instrucciones

1. Usando ese conocimiento, haz que tu servidor retorno el string `"<h1>Hello!</h1>"` cuando la URL `/todos` se ingrese en el navegador.

2. Asegúrate que estas líneas siempre sean las dos últimas de tu archivo app.py

```python
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)
```
