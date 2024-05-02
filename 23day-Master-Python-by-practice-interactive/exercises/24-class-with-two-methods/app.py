class stringUpper(object):
    def __init__(self):
        self.s = ""

    def getString(self):
        self.s = input("Escribe un string: ")

    def printString(self):
        print(self.s.upper())


stringObj = stringUpper()
stringObj.getString()
stringObj.printString()
