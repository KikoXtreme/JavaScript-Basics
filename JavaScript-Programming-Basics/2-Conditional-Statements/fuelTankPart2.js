function fuelTankPart2(input) {
    let fuel = input[0];
    let litters = Number(input[1]);
    let card = input[2];

    price = 0;

    if (fuel === 'Gas') {
        price = 0.93;
        if (card === 'Yes') {
            price = price - 0.08;
        }
    } else if (fuel === 'Gasoline') {
        price = 2.22;
        if (card === 'Yes') {
            price = price - 0.18;
        }
    } else if (fuel === 'Diesel') {
        price = 2.33;
        if (card === 'Yes') {
            price = price - 0.12;
        }
    }

    if (litters >= 20 && litters <= 25) {
        price = price * 0.92;
    } else if (litters > 25) {
        price = price * 0.9;
    }
    console.log(`${(price * litters).toFixed(2)} lv.`);
}

fuelTankPart2(['Gas', '30', 'Yes']);