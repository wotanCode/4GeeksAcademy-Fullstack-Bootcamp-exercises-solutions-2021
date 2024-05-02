var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinChamberPosition) => {
    if (spinChamberPosition==bulletPosition){
        return "You're dead!";
    } else {
        return "Keep playing!";
    }
};
fireGun(spinChamber());
//Este ejercicio no pasa el test unitario investigar por que.