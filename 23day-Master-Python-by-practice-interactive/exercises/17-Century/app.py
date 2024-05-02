#Complete the function to return the respective number of the century
#HINT: You may need to import the math module.
import math

def century(year):
  calculo1 = year // 100
  calculo2 = math.ceil((year%100)/100)
  resul = calculo1+calculo2
  return resul



#Invoke the function with any given year. 
print(century(2000))