function pets(input) {
    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let foodDayDog = Number(input[2]);
    let foodDayCat = Number(input[3]);
    let foodDayTurtleGrams = Number(input[4]);

    let foodDog = days * foodDayDog;
    let foodCat = days * foodDayCat;
    let foodTurtle = days * (foodDayTurtleGrams / 1000);
    let totalFood = foodDog + foodCat + foodTurtle;

    if (totalFood <= foodLeft) {
        console.log(`${Math.floor(foodLeft - totalFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFood - foodLeft)} more kilos of food are needed.`);
    }
}

pets([2, 10, 1, 1, 1200]);