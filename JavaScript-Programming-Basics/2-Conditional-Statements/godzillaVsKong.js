function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extraCount = Number(input[1]);
    let clothPricePerExtra = Number(input[2]);

    let decor = budget * 0.1;
    let clothPrice = clothPricePerExtra * extraCount;

    if (extraCount > 150) {
        clothPrice = clothPrice - (clothPrice * 0.1);
    }

    let sum = decor + clothPrice;
    let moneyLeft = budget - sum;
    let moneyNeeded = sum - budget;

    if (budget >= sum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["9587.88", "222", "55.68"]);