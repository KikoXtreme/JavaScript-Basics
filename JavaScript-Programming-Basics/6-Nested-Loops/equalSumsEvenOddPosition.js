function equalSumsEvenOddPosition(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let str = '';

    for (let i = n1; i <= n2; i++) {
        let currentNum = i.toString();
        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum === oddSum) {
            str += currentNum + ' ';
        }
    }
    console.log(str);
}

equalSumsEvenOddPosition(["100000", "100050"]);