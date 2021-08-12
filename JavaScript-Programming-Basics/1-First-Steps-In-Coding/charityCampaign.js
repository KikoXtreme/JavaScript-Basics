function charityCampaign(input){
    let days = Number(input[0]);
    let cakeMakers = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let cakesPerDay = cakes * 45;
    let wafflesPerDay = waffles * 5.8;
    let pancakesPerDay = pancakes * 3.2;
    let sumPerDay = (cakesPerDay + wafflesPerDay + pancakesPerDay) * cakeMakers;
    let total = sumPerDay * days;
    let sum = total - ((1/8) * total);

    console.log(sum);
}

charityCampaign(["23","8","14","30","16"]);
