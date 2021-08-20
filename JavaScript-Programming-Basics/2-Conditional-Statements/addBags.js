function addBags(input) {
    let priceOver20Kg = Number(input[0]);
    let bagsKg = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let bagsCount = Number(input[3]);

    if (bagsKg < 10) {
        priceOver20Kg = priceOver20Kg * 0.2;
    } else if (bagsKg <= 20) {
        priceOver20Kg = priceOver20Kg * 0.5;
    } else {
        priceOver20Kg = priceOver20Kg
    }

    if (daysToTrip < 7) {
        priceOver20Kg = priceOver20Kg + (priceOver20Kg * 0.4);
    } else if (daysToTrip <= 30) {
        priceOver20Kg = priceOver20Kg + (priceOver20Kg * 0.15);
    } else if (daysToTrip > 30) {
        priceOver20Kg = priceOver20Kg + (priceOver20Kg * 0.10);
    }

    let sum = bagsCount * priceOver20Kg;

    console.log(` The total price of bags is: ${sum.toFixed(2)} lv. `);
}

addBags([30, 18, 15, 2]);