function sequence2kplus1(input) {
    let n = Number(input[0]);
    let numbers = 1;

    while (numbers <= n) {
        console.log(numbers);
        numbers = numbers * 2 + 1;
    }
}

sequence2kplus1(["8"]);