
all_names = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"]

#Your code go here:
def filterString(name):
   if 'R' in name:
      return True
   else:
      return False

resulting_names=list(filter(filterString,all_names))
# ##dont touch
print(resulting_names)
