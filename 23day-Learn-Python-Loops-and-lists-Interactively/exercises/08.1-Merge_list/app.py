chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ]
chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas']


def merge_list(list1, list2):
    #Your code go here:
    arr = []
    for x in range(len(list1)):
        arr.append(list1[x])
    for x in range(len(list2)):
        arr.append(list2[x])
    return arr
    
print(merge_list(chunk_one, chunk_two))
