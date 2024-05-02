#Complete the function to return the tens digit of a given interger
def tens_digit(num):
  calculo1 = num %100
  calculo2 = calculo1 %10
  calculo3 = calculo1 - calculo2
  final = calculo3 // 10
  return final

#Invoke the function with any interger.
print(tens_digit(1234))