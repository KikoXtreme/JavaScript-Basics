function moving(input) {
    index = 0;
    let w = Number(input[index++]);
    let l = Number(input[index++]);
    let h = Number(input[index++]);

    let aptVolume = w * l * h;

    let command = input[index++];

    while (command !== 'Done') {
        let box = Number(command);
        aptVolume -= box;

        if (aptVolume < 0) {
            console.log(`No more free space! You need ${Math.abs(aptVolume)} Cubic meters more.`);
            break;
        }
        command = input[index++];
    }
    if (aptVolume >= 0) {
        console.log(`${aptVolume} Cubic meters left.`)
    }
}

moving(["10", "1", "2", "4", "6", "Done"]);
