#Complete the function to calculate how many hours and minutes are passed since midnight.
def hours_minutes(secs):
  hora = secs / 3600
  #hora = secs * 0.00027778 Esto es otra formula
  minuto = secs / 60
  return (int(hora),int(minuto))

#Invoke the funtion and pass any interger as its argument.
print(hours_minutes(3900))