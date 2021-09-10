function gameOfIntervals(input) {
    let moves = Number(input[0]);

    let sum = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p6 = 0;

    for (let i = 1; i <= moves; i++) {
        let currentMove = Number(input[i]);

        if (currentMove <= 9 && currentMove >= 0) {
            p1++;
            sum += currentMove * 0.2;
        } else if (currentMove <= 19 && currentMove >= 10) {
            p2++;
            sum += currentMove * 0.3;
        } else if (currentMove <= 29 && currentMove >= 20) {
            p3++;
            sum += currentMove * 0.4;
        } else if (currentMove <= 39 && currentMove >= 30) {
            p4++;
            sum += 50;
        } else if (currentMove <= 50 && currentMove >= 40) {
            p5++;
            sum += 100;
        } else {
            p6++;
            sum /= 2;
        }
    }
    console.log(sum.toFixed(2));
    console.log(`From 0 to 9: ${(p1 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(p2 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(p3 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(p4 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(p5 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(p6 / moves * 100).toFixed(2)}%`);
}

gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);