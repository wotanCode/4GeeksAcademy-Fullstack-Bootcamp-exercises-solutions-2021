import math

C = 50
H = 30
valores = []

numvalores = [x for x in input().split(',')]
for d in numvalores:
    valores.append(str(int(round(math.sqrt(2*C*float(d)/H)))))
print (','.join(valores))
