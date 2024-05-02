#Complete the funtion to compute how many seconds passed between the two timestamp.
def two_timestamp(hr1,min1,sec1,hr2,min2,sec2):
    hr1segundos = hr1*3600
    min1segundos = min1 * 60
    total1 = hr1segundos + min1segundos + sec1
    hr2segundos = hr2*3600
    min2segundos = min2 * 60
    total2 = hr2segundos + min2segundos + sec2
    diferencia = total2 - total1
    return diferencia


#Invoke the fuction and pass two timestamps(6 intergers) as its argument.
print(two_timestamp(1,1,1,2,2,2))