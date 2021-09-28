function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index++]);

    let raisedMoney = 0;
    let totalWins = 0;
    let totalLoses = 0;

    for (let i = 1; i <= days; i++) {
        let command = input[index++];
        let currentMoney = 0;
        let currentWins = 0
        let currentLoses = 0;

        while (command !== 'Finish') {
            let sport = command;
            let result = input[index++];
            if (result === 'win') {
                currentMoney += 20;
                currentWins++;
            } else {
                currentLoses++;
            }
            command = input[index++];
        }

        if (currentWins > currentLoses) {
            currentMoney *= 1.10;
            totalWins++;
        } else {
            totalLoses++;
        }
        raisedMoney += currentMoney;
    }

    if (totalWins > totalLoses) {
        raisedMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${raisedMoney.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${raisedMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish",
    "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);