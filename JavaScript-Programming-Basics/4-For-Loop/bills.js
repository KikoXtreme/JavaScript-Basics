function bills(input) {
    let months = Number(input[0]);

    let power = 0;

    for (let i = 1; i <= months; i++) {
        let currentPower = Number(input[i]);
        power += currentPower;
    }

    let water = months * 20;
    let internet = months * 15;
    let other = (power + water + internet) * 1.2;
    let average = (power + water + internet + other) / months;

    console.log(`Electricity: ${power.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22',]);