function fishland(input){
    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let horsemackerelKg = Number(input[3]);
    let musselKg = Number(input[4]);

    let bonitoPrice = mackerelPrice + (mackerelPrice * 0.6);
    let bonito = bonitoKg * bonitoPrice;

    let horsemackerelPrice = spratPrice + (spratPrice * 0.8);
    let horsemackerel = horsemackerelKg * horsemackerelPrice;

    let mussel = musselKg * 7.5;

    let sum = (bonito + horsemackerel + mussel).toFixed(2);


    console.log(sum);
}

fishland([5.55, 3.57, 4.3, 3.6, 7]);