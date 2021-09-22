function vacation(input) {
    index = 0;
    let neededMoney = Number(input[index++]);
    let startMoney = Number(input[index++]);

    let days = 0;
    let spendDays = 0;

    while (true) {
        let command = input[index++];
        let amount = Number(input[index++]);

        if (command === 'spend') {
            spendDays++;
            days++;

            if (amount >= startMoney) {
                startMoney = 0;
            } else {
                startMoney -= amount;
            }

        } else if (command === 'save') {
            spendDays = 0;
            startMoney += amount;
            days++;
        }

        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }

        if (startMoney >= neededMoney) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);