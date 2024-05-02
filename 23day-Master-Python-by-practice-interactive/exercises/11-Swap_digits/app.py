#Complete the fuction to return the swapped digits of a given two-digit-interger.
def swap_digits(num):
  izq = num % 10
  der = num // 10
  return str(izq)+str(der)
   
   
   
#Invoke the function with any two digit interger as its argument
print(swap_digits(79))

