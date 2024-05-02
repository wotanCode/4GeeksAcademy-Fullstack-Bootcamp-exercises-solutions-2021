def lyrics_generator(random_list):
    word = ""
    count = 0
    for number in random_list:
        if number == 0:
            word += "Boom "
            count = 0
        else:
            count +=1
            word += "Drop the base "
            if count == 3:
                word += "!!!Break the base!!! "
                count = 0
    return word

# Your code go above, nothing to change after this line:
print(lyrics_generator([0,0,1,1,0,0,0]))
print(lyrics_generator([0,0,1,1,1,0,0,0]))
print(lyrics_generator([0,0,0]))
print(lyrics_generator([1,0,1]))
print(lyrics_generator([1,1,1]))