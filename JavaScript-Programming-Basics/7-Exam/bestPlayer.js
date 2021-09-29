function bestPlayer(input) {
    let index = 0;
    let goals = 0;
    let bestPlayer = '';

    while (input[index] != "END") {
        let currentName = input[index++];
        let currentGoals = Number(input[index++]);
        if (currentGoals > goals) {
            goals = currentGoals;
            bestPlayer = currentName;
        }
        if (goals >= 10) break;
    }
    console.log(`${bestPlayer} is the best player!`)

    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${goals} goals.`)
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);