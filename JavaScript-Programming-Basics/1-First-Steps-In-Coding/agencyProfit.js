function agencyProfit(input){
    let airCompany = input[0];
    let ticketAdult = Number(input[1]);
    let ticketKid = Number(input[2]);
    let netAdultPrice = Number(input[3]);
    let tax = Number(input[4]);

    let netKidPrice = netAdultPrice - (netAdultPrice * 0.7);

    let adultPrice = netAdultPrice + tax;
    let kidPrice = netKidPrice + tax;
    let total = (ticketKid * kidPrice) + (ticketAdult * adultPrice);
    let profit = (total * 0.2).toFixed(2);

    console.log(`The profit of your agency from ${airCompany} tickets is ${profit} lv.`);
}

agencyProfit(["WizzAir","15","5","120","40"]);