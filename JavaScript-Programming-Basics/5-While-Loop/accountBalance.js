function accountBalance(input) {
    let index = 0;
    let command = input[index++];
    let total = 0;

    while (command !== 'NoMoreMoney') {
        let currentSum = Number(command);

        if (currentSum < 0) {
            console.log('Invalid operation!')
            break;
        }
        total += currentSum;
        console.log(`Increase: ${currentSum.toFixed(2)}`);
        command = input[index++];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);