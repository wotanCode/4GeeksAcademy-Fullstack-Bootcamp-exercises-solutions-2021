let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState(){
    let obj = {totalSlots: 0,availableSlots: 0,occupiedSlots: 0}
    for (let i = 0; i<parking_state.length; i++){
        for (let u = 0; u<parking_state.length; u++){
            if (parking_state[u][i] == 2){
                obj.availableSlots += 1;
                obj.totalSlots +=1;
            } else if (parking_state[u][i] == 1){
                obj.occupiedSlots += 1;
                obj.totalSlots +=1;
            }
            
        }
    }
    return obj;
}
console.log(getParkingLotState(parking_state))