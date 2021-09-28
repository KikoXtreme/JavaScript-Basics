function uniquePINCodes(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);

    for (let firstPin = 1; firstPin <= n1; firstPin++) {
        for (let secondPin = 1; secondPin <= n2; secondPin++) {
            for (let thirdPin = 1; thirdPin <= n3; thirdPin++) {
                if (firstPin % 2 === 0 && thirdPin % 2 === 0) {
                    if (secondPin === 2 || secondPin === 3 || secondPin === 5 || secondPin === 7) {
                        console.log(`${firstPin} ${secondPin} ${thirdPin}`);
                    }
                }
            }
        }
    }
}

uniquePINCodes(['3', '5', '5']);