//variable para ingresar numero de partidas
let games = parseInt(prompt('cuantas partidas quiere jugar?'))

//si ingresa un numero mayor a 0 de juegos entonces puede empezar la partida escogiendo uno de los números 
while (games > 0) {

    let user = parseInt(prompt(` 
    Escribe el número de tu elección 

    1.Piedra
    2.Papel
    3.Tijera
    
    `));
    let machine = Math.floor(Math.random() * (4 - 1)) + 1; //variable para que aparezca de forma aleatoria una opcion del 1 al 3
    console.log(machine);

    console.log(result(machine, user));
    games = games - 1;
}

//funcion con resultados donde el usuario pierde
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

    // condicion igual para empate
    if (machineGame === userGame) {
        return "Es un Empate";
    }
    return "ganaste"; // sin ninguna de las condiciones anteriores se cumple, entonces mostrar "ganaste"
}