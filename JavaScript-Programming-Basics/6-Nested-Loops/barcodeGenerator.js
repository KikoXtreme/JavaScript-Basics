function barcodeGenerator(input) {
    let n1 = input[0];
    let n2 = input[1];
    let str = '';

    let f1 = Number(n1[0]);
    let f2 = Number(n1[1]);
    let f3 = Number(n1[2]);
    let f4 = Number(n1[3]);

    let l1 = Number(n2[0]);
    let l2 = Number(n2[1]);
    let l3 = Number(n2[2]);
    let l4 = Number(n2[3]);

    for (let i = f1; i <= l1; i++) {
        for (let j = f2; j <= l2; j++) {
            for (let k = f3; k <= l3; k++) {
                for (let l = f4; l <= l4; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        str += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(str);
}

barcodeGenerator(['2345', '6789']);