function cleverLily(input) {
    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let oneToyPrice = Number(input[2]);

    let sumMoney = 0;
    let sumToys = 0;
    let money = 10;


    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sumMoney += money;
            money += 10;
            sumMoney--;
        } else {
            sumToys++;
        }
    }
    sumMoney += sumToys * oneToyPrice;

    if (sumMoney >= washingMashinePrice) {
        console.log(`Yes! ${(sumMoney - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice - sumMoney).toFixed(2)}`);
    }
}

cleverLily(["10", "170", "6"]);