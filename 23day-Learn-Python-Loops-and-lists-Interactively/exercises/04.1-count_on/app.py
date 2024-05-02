
my_list = [42, True, "towel", [2,1], 'hello', 34.4, {"name": "juan"}]
hello = []
#your code go here:

for x in range(len(my_list)):
    isdict = isinstance(my_list[x],dict)
    islist = isinstance(my_list[x],list)
    #print(isdict)
    if (isdict == True or islist == True):
        hello.append(my_list[x])
        print(hello)