parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

#Your code go here:
def get_parking_lot(parking):
    total_slots = 0
    occupied_slots = 0
    available_slots = 0
    for parking in parking_state:
        for i in parking:
            if i == 0:
                total_slots += 1
            elif i == 1:
                occupied_slots += 1
            else:
                available_slots += 1
    state = {
        "total_slots": occupied_slots + available_slots,
        "available_slots": available_slots,
        "occupied_slots": occupied_slots
    }
    return state

print(get_parking_lot(parking_state))

