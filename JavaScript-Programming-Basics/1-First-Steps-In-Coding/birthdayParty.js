function birthdayParty(input){
    let rent = Number(input[0]);

    let cakePrice = rent * 0.20;
    let drinkPrice = cakePrice - (cakePrice * 0.45);
    let animator = rent * (1 / 3);

    let total = rent + cakePrice + drinkPrice + animator;

    console.log(total);
}

birthdayParty(["2250"]);