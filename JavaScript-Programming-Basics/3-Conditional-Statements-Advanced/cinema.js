function cinema(input) {
    let type = input[0];
    let raw = Number(input[1]);
    let colomn = Number(input[2]);

    let income = 0;

    if (type === 'Premiere') {
        income = raw * colomn * 12;
    } else if (type === 'Normal') {
        income = raw * colomn * 7.50;
    } else {
        income = raw * colomn * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Normal", "21", "13"]);