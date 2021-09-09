function footballLeague(input) {
    let capacity = Number(input[0]);
    let fans = Number(input[1]);

    let inputL = input.length;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let percentFull = fans / capacity * 100;

    for (let i = 2; i < inputL; i++) {
        let sectors = input[i];

        if (sectors === 'A') {
            p1++;
        } else if (sectors === 'B') {
            p2++;
        } else if (sectors === 'V') {
            p3++;
        } else if (sectors === 'G') {
            p4++;
        }
    }
    console.log((p1 / fans * 100).toFixed(2) + '%');
    console.log((p2 / fans * 100).toFixed(2) + '%');
    console.log((p3 / fans * 100).toFixed(2) + '%');
    console.log((p4 / fans * 100).toFixed(2) + '%');
    console.log(percentFull.toFixed(2) + '%');
}

footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);