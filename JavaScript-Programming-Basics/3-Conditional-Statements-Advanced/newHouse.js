function newHouse(input) {
    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (flower) {
        case 'Roses': sum = 5 * count;
            if (count > 80) {
                sum = 5 * 0.9 * count;
            } break;
        case 'Dahlias': sum = 3.8 * count;
            if (count > 90) {
                sum = 3.8 * 0.85 * count;
            } break;
        case 'Tulips': sum = 2.8 * count;
            if (count > 80) {
                sum = 2.8 * 0.85 * count;
            } break;
        case 'Narcissus': sum = 3 * count;
            if (count < 120) {
                sum = 3 * 1.15 * count;
            } break;
        case 'Gladiolus': sum = 2.5 * count;
            if (count < 80) {
                sum = 2.5 * 1.20 * count;
            } break;
    }

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - sum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Gladiolus", "64", "160"]);
