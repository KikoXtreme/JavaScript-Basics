function grades(input) {
    let students = Number(input[0]);

    let average = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;


    for (let i = 1; i <= students; i++) {
        let currentGrade = Number(input[i]);
        average += currentGrade;

        if (currentGrade <= 2.99) {
            p1++;
        } else if (currentGrade <= 3.99) {
            p2++;
        } else if (currentGrade <= 4.99) {
            p3++;
        } else {
            p4++;
        }
    }

    console.log(`Top students: ${(p4 / students * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(p3 / students * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(p2 / students * 100).toFixed(2)}%`)
    console.log(`Fail: ${(p1 / students * 100).toFixed(2)}%`)
    console.log(`Average: ${(average / students).toFixed(2)}`)
}

grades(['6', '2', '3', '4', '5', '6', '2.2']);