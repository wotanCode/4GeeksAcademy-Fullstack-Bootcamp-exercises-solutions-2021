Celsius_values = [-2,34,56,-10]


#ºF = (ºC · 1,8) + 32
def fahrenheit_values(x):
# the magic go here:
    fah = (x*1.8)+32
    return fah
   
result = list(map(fahrenheit_values, Celsius_values))
print(result)