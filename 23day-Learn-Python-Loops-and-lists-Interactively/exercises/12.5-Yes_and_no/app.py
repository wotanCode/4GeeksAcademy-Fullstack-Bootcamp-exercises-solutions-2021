theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1]

#Your code go here:
def wikiwoko(x):
    arr = []
    if x == 1:
        arr = "wiki"
    elif x == 0:
        arr ="woko"
    return arr

newArr = list(map(wikiwoko,theBools))
print(newArr)