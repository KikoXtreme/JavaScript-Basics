function braceletStand(input) {
    let incomeTheresaADay = Number(input[0]);
    let profitADay = Number(input[1]);
    let allCosts = Number(input[2]);
    let giftPrice = Number(input[3]);

    let totalIncome = incomeTheresaADay * 5;
    let totalProfit = profitADay * 5;
    let savedMoney = totalIncome + totalProfit;
    let totalSum = savedMoney - allCosts;

    if (totalSum > giftPrice){
        console.log(`Profit: ${totalSum.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${(giftPrice - totalSum).toFixed(2)} BGN.`)
    }
}

braceletStand(["5.12", "32.05", "15", "150"]);