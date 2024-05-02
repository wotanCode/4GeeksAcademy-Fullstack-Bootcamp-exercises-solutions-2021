#Complete the function to return the tens digit and the ones digit of any interger.
def two_digits(digit):
  return digit // 10 , digit %10

#Invoke the function with any interger as its argument.
print(two_digits(79))
