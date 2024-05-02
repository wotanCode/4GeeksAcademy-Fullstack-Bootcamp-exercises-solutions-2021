palabra = input("escribe palabras: ")
words = [word for word in palabra.split(" ")]
print (" ".join(sorted(list(set(words)))))