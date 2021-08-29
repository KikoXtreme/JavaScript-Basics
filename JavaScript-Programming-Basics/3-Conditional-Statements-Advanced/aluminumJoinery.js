function aluminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let sum = 0;

    if (count < 10) {
        console.log('Invalid order')
    } else {
        if (type === '90X130') {
            if (count > 30 && count <= 60) {
                sum = count * (110 * 0.95);
            } else if (count > 60) {
                sum = count * (110 * 0.92);
            } else if (count <= 30) {
                sum = count * 110;
            }
        } else if (type === '100X150') {
            if (count > 40 && count <= 80) {
                sum = count * (140 * 0.94);
            } else if (count > 80) {
                sum = count * (140 * 0.90);
            } else if (count <= 40) {
                sum = count * 140;
            }
        } else if (type === '130X180') {
            if (count > 20 && count <= 50) {
                sum = count * (190 * 0.93);
            } else if (count > 50) {
                sum = count * (190 * 0.88);
            } else if (count <= 20) {
                sum = count * 190;
            }
        } else if (type === '200X300') {
            if (count > 25 && count <= 50) {
                sum = count * (250 * 0.91);
            } else if (count > 50) {
                sum = count * (250 * 0.86);
            } else if (count <= 25) {
                sum = count * 250;
            }
        }

        if (delivery === 'With delivery') {
            sum = sum + 60;
        }
        if (count > 99) {
            sum = sum * 0.96;
        }
        console.log(`${sum.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["105", "100X150", "With delivery"]);