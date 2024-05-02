#Import random
from random import randint
matrix = []
#Create the function below:
def matrixBuilder(binaryitem):
    for i in range(binaryitem):
        arr = []
        for c in range(binaryitem):
            arr.append(randint(1,1))  #cambio aqui un el valor de 0,1 para que de asi los valores
        matrix.append(arr)
    return matrix
result = matrixBuilder(4)
print(result)