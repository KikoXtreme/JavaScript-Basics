function luckyNumbers(input) {
    let n = Number(input[0]);
    let str = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (i + j === k + l) {
                        if (n % (i + j) === 0) {
                            str += `${i}${j}${k}${l} `;
                        }
                    }
                }
            }
        }
    }
    console.log(str);
}

luckyNumbers(['3']);