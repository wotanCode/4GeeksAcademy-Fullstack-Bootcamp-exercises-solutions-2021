def number_of_bottles():
    for numero in range(99, 2, -1):
        print(f'''{numero} bottles of milk on the wall, {numero} bottles of milk.
Take one down and pass it around, {numero-1} bottles of milk on the wall.''')

    print(f'''2 bottles of milk on the wall, 2 bottles of milk.
Take one down and pass it around, 1 bottle of milk on the wall.''')

    print('''1 bottle of milk on the wall, 1 bottle of milk.
Take one down and pass it around, no more bottles of milk on the wall.
No more bottles of milk on the wall, no more bottles of milk.
Go to the store and buy some more, 99 bottles of milk on the wall.''')

#Probar ultimo print dentro del for validando si es uno

number_of_bottles()