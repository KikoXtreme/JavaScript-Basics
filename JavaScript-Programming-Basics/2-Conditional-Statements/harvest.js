function harvest(input){
    let area = Number(input[0]);
    let grapePerMeter = Number(input[1]);
    let neededWine = Number(input[2]);
    let workers = Number(input[3]);

    let grape = area * grapePerMeter;
    let wine = 0.4 * (grape / 2.5);
    let leftWine = Math.abs(wine - neededWine);
    let litersPerWorker = leftWine / workers

    if (wine >= neededWine){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(leftWine)} liters left -> ${Math.ceil(litersPerWorker)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(leftWine)} liters wine needed.`);
    }
}

harvest([650, 2, 175, 3]);