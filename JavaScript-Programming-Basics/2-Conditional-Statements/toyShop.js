function toyShop(input) {
    let price = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCOunt = Number(input[2]);
    let bearCount = Number(input[3]);
    let minnionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toys = puzzleCount + dollCOunt + bearCount + minnionCount + truckCount;
    let sum = puzzleCount * 2.6 + dollCOunt * 3 + bearCount * 4.1 + minnionCount * 8.2 + truckCount * 2;

    if (toys >= 50) {
        sum = sum - (sum * 0.25);
    }

    let rent = sum * 0.1;
    let profit = sum - rent;
    let moneyLeft = Math.abs(profit - price);

    if (price <= profit) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);