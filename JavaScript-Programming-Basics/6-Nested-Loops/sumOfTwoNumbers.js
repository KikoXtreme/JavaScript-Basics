function sumOfTwoNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let mag = Number(input[2]);
    let combCounter = 0;
    let isFound = false;

    for (let a = n1; a <= n2; a++) {
        for (let b = n1; b <= n2; b++) {
            combCounter++;
            if (a + b === mag) {
                console.log(`Combination N:${combCounter} (${a} + ${b} = ${mag})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combCounter} combinations - neither equals ${mag}`);
    }
}

//sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);