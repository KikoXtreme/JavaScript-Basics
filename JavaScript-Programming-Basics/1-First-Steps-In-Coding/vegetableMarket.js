function vegetableMarket(input){
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let vegetable = priceVegetables * kgVegetables;
    let fruits = priceFruits * kgFruits;

    let total = ((vegetable + fruits) / 1.94).toFixed(2);

    console.log(total);
}

vegetableMarket([0.194, 19.4, 10, 10]);