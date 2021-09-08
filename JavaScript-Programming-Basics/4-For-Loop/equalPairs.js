function equalPairs(input) {
    let index = 0;
    let pairs = Number(input[index++]);

    let sumPairs = 0;
    let maxdiff = 0;

    for (let i = 0; i < pairs; i++) {
        let n1 = Number(input[index++]);
        let n2 = Number(input[index++]);
        let currentSum = n1 + n2;

        if (i > 0) {
            let diff = Math.abs(currentSum - sumPairs);
            if (diff > maxdiff) {
                maxdiff = diff;
            }
        }
        sumPairs = currentSum;
    }

    if (maxdiff === 0) {
        console.log(`Yes, value=${sumPairs}`);
    } else {
        console.log(`No, maxdiff=${maxdiff}`);
    }
}

equalPairs(['3', '1', '2', '0', '3', '4', '-1']);
//equalPairs(['2', '1', '2', '2', '2']);