function traveling(input) {
    let index = 0;
    let command = input[index++];

    while (command !== 'End') {
        let destination = command;
        let minBudget = Number(input[index++]);
        let currentMoneySaved = 0;
        while (currentMoneySaved < minBudget) {
            currentMoneySaved += Number(input[index++]);
        }
        command = input[index++];
        console.log(`Going to ${destination}!`);
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240",
    "Spain", "1200", "300", "500", "193", "423", "End"]);
