function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let sum = 0;

    if (season === 'Spring') {
        if (fishermen <= 6) {
            sum = 3000 * 0.90;
        } else if (fishermen <= 11) {
            sum = 3000 * 0.85;
        } else if (fishermen >= 12) {
            sum = 3000 * 0.75;
        }
    } else if (season === 'Summer' || season === 'Autumn') {
        if (fishermen <= 6) {
            sum = 4200 * 0.90;
        } else if (fishermen <= 11) {
            sum = 4200 * 0.85;
        } else if (fishermen >= 12) {
            sum = 4200 * 0.75;
        }
    } else if (season === 'Winter') {
        if (fishermen <= 6) {
            sum = 2600 * 0.90;
        } else if (fishermen <= 11) {
            sum = 2600 * 0.85;
        } else if (fishermen >= 12) {
            sum = 2600 * 0.75;
        }
    }

    if (fishermen % 2 === 0 && season !== 'Autumn') {
        sum = sum * 0.95;
    }

    if (budget >= sum) {
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000", "Summer", "11"]);