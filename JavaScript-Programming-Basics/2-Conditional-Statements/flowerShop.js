function flowerShop(input) {
    let magnoliasCount = Number(input[0]);
    let zombuliosCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let presentPrice = Number(input[4]);

    let sum = (magnoliasCount * 3.25) + (zombuliosCount * 4) + (rosesCount * 3.5) + (cactusCount * 8);
    let profit = sum * 0.95;

    if (profit >= presentPrice) {
        console.log(`She is left with ${Math.floor(profit - presentPrice)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(presentPrice - profit)} leva.`)
    }
}

flowerShop([2, 3, 5, 1, 50]);