function dishwasher(input) {
    let index = 0;
    let bottles = Number(input[index++]);
    let plates = 0;
    let pots = 0;
    let neededDetergent = 0;
    let counter = 1;

    let detergent = bottles * 750;

    while (input[index] !== 'End') {
        if (index === input.length) {
            break;
        }

        let allDishes = Number(input[index++]);

        if (counter % 3 === 0) {
            pots += allDishes;
        } else if (counter % 3 !== 0) {
            plates += allDishes;
        }
        neededDetergent = (plates * 5) + (pots * 15);
        counter++;
    }

    if (detergent >= neededDetergent) {
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent - neededDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${neededDetergent - detergent} ml. more necessary!`)
    }
}

dishwasher(['1', '10', '15', '10', '12', '13', '30']);
//dishwasher(['2', '53', '65', '55', 'End']);