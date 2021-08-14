function fruitMarket(input){
    let strawberryPrice = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberry = Number(input[3]);
    let strawberry = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice - (raspberryPrice * 0.4);
    let bananasPrice = raspberryPrice - (raspberryPrice * 0.8);

    let sumRaspberry = raspberry * raspberryPrice;
    let sumOrange = oranges * orangesPrice;
    let sumBananas = bananas * bananasPrice;
    let sumStrawberry = strawberry * strawberryPrice;

    let total = sumRaspberry + sumOrange + sumBananas + sumStrawberry;

    console.log(total);
}

fruitMarket(["48","10","3.3","6.5","1.7"]);
