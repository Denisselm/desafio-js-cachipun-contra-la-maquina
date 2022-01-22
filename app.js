let games = parseInt(prompt('cuantas partidas quiere jugar?'))

while (games > 0) {

    let user = parseInt(prompt(`
    Escribe el número de tu elección

    1.Piedra
    2.Papel
    3.Tijera
    
    
    `));
    let machine = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(machine);

    console.log(result(machine, user));
    games = games - 1;
}

function result(machineGame, userGame) {
    if (machineGame === 1 && userGame === 3) {
        return "Perdiste";
    }
    if (machineGame === 2 && userGame === 1) {
        return "Perdiste";
    }
    if (machineGame === 3 && userGame === 1) {
        return "Perdiste";
    }

    if (machineGame === userGame) {
        return "Es un Empate";
    }
    return "ganaste";
}