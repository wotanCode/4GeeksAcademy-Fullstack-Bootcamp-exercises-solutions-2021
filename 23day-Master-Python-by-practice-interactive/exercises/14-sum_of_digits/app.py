#Complete the function "digits_sum" so that it prints the sum of a three digit number.
def digits_sum(num):
  d1 = num // 100
  d2 = (num % 100) // 10
  d3 = (num % 100) % 10
  return d1+d2+d3


#Invoke the function with any three-digit-number
#You can try other three-digit numbers if you want
print(digits_sum(123))