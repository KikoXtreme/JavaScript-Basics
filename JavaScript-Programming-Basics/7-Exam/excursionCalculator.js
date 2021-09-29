function excursionCalculator(input) {
    let people = Number(input[0]);
    let season = input[1];

    let price = 0;

    switch (season) {
        case 'spring':
            if (people <= 5) {
                price = people * 50;
            } else {
                price = people * 48;
            }
            break;
        case 'summer':
            if (people <= 5) {
                price = people * 48.50;
            } else {
                price = people * 45;
            }
            price = price * 0.85;
            break;
        case 'autumn':
            if (people <= 5) {
                price = people * 60;
            } else {
                price = people * 49.50;
            }
            break;
        case 'winter':
            if (people <= 5) {
                price = people * 86;
            } else {
                price = people * 85;
            }
            price = price * 1.08;
            break;
    }
    console.log(`${price.toFixed(2)} leva.`)
}

excursionCalculator(["5", "spring"]);