function backToThePast(input) {
    let inheritance = Number(input[0]);
    let yearToLiveTo = Number(input[1]);

    let age = 17;

    for (let i = 1800; i <= yearToLiveTo; i++) {
        if (i % 2 === 0) {
            age++;
            inheritance -= 12000;
        } else if (i % 2 !== 0) {
            age++;
            inheritance -= 12000 + (50 * age);
        }
    }

    if (inheritance >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritance).toFixed(2)} dollars to survive.`)
    }
}

backToThePast(['50000', '1802']);