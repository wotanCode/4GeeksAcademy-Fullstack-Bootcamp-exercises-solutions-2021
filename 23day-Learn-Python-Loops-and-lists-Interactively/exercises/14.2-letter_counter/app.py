par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
par_lower = par.lower()
counts = {}
#your code go here:
def contador_letras(string):
    for i in string:
        #if string[i] != " ": Queda pendiente modificar esto para el que funcine
            counts[i] = counts.get(i,0)+1
    return counts

print(contador_letras(par_lower.replace(" ", "")))
