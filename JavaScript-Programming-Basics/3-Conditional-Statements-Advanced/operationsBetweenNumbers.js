function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let sum = 0;

    if (operator === '+' || operator === '-' || operator === '*') {
        if (operator === '+') {
            sum = n1 + n2;
        } else if (operator === '-') {
            sum = n1 - n2;
        } else {
            sum = n1 * n2;
        }
        if (sum % 2 === 0) {
            console.log(`${n1} ${operator} ${n2} = ${sum} - even`)
        } else {
            console.log(`${n1} ${operator} ${n2} = ${sum} - odd`)
        }
    } else if (operator === '/') {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            sum = n1 / n2;
            console.log(`${n1} / ${n2} = ${sum.toFixed(2)}`)
        }

    } else if (operator === '%') {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            sum = n1 % n2;
            console.log(`${n1} % ${n2} = ${sum}`)
        }
    }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);