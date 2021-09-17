function cake(input) {
    let index = 0;
    let w = Number(input[index++]);
    let l = Number(input[index++]);

    let cake = w * l;
    let piecesTaken = 0;
    let command = input[index++];

    while (command !== 'STOP') {
        piecesTaken += Number(command);

        if (piecesTaken > cake) {
            break;
        }
        command = input[index++]
    }

    if (piecesTaken > cake) {
        console.log(`No more cake left! You need ${piecesTaken - cake} pieces more.`)
    } else {
        console.log(`${cake - piecesTaken} pieces are left.`)
    }
}

cake(["10", "2", "2", "4", "6", "STOP"]);