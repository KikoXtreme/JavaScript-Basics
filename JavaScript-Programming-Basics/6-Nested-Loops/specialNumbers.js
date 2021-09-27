function specialNumbers(input) {
    let num = Number(input[0]);
    let str = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (num % i === 0 && num % j === 0 && num % k === 0 && num % l === 0) {
                        str += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(str);
}

specialNumbers(["3"]);

// function test(input) {
//     let n = Number(input[0]);
//     let result = "";

//     for (let i = 1111; i <= 9999; i++) {
//         let numToString = i.toString();
//         let currentresult = "";
//         for (let j = 0; j < numToString.length; j++) {
//             if (n % Number(numToString[j]) === 0) {
//                 currentresult += numToString[j];
//             } else {
//                 break;
//             }
//         }
//         if (currentresult.length === 4) {
//             result += currentresult + " ";
//         }
//     }
//     console.log(result);
// }