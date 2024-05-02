list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68]

#Your code here:
def merge_two_list(arreglo):
    odd = []
    even = []
    comb = []
    for x in range(len(arreglo)):
        if arreglo[x]%2!=0:
            odd.append(arreglo[x])
        elif arreglo[x]%2==0:
            even.append(arreglo[x])
    comb.append(odd)
    comb.append(even)
    return comb

print(merge_two_list(list_of_numbers))