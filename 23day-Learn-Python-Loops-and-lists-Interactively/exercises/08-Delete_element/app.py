people = ['juan','ana','michelle','daniella','stefany','lucy','barak']

#Your code go here:
def deletePerson(person_name):
    #Your code go here:
    arr = []
    for x in range(len(people)):
        if people[x] != person_name:
            arr.append(people[x])
    return arr
    
print(deletePerson("daniella"))
print(deletePerson("juan"))
print(deletePerson("emilio"))