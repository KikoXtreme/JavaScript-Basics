function averageNumber(input) {
    let n = Number(input[0]);
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i])
        total += currentNum;
    }
    total = total / n;
    console.log(total.toFixed(2))
}

averageNumber([4, 3, 2, 4, 2]);