myNumbers = [23,234,345,4356234,243,43,56,2]

#Your code go here:
def increment_by_one(x):
    x=x*3
    return x

new_list = list(map(increment_by_one, myNumbers))
print(new_list)