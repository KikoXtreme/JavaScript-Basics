function transportPrice(input) {
    let km = Number(input[0]);
    let dayOrNight = input[1];

    let taxiPrice = 0;

    let busPrice = 0.09 * km;
    let trainPrice = 0.06 * km;

    if (dayOrNight === 'day') {
        taxiPrice = 0.7 + (0.79 * km);
    } else {
        taxiPrice = 0.7 + (0.9 * km);
    }

    if (km < 20) {
        console.log(taxiPrice.toFixed(2));
    } else if (km < 100) {
        console.log(busPrice.toFixed(2));
    } else {
        console.log(trainPrice.toFixed(2));
    }
}

transportPrice(['50', 'night']);