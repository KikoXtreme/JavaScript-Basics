function graduationPt2(input) {
    let index = 0;
    let name = input[index++];

    let grade = 1;
    let excludedCounter = 0;
    let averageGrade = 0;

    while (grade <= 12) {
        let yearGrade = Number(input[index++])

        if (yearGrade >= 4.00) {
            grade++;
            averageGrade += yearGrade
            continue;
        } else {
            excludedCounter++;
        }

        if (excludedCounter === 2) {
            console.log(`${name} has been excluded at ${grade} grade`)
            break;
        }
    }
    averageGrade = averageGrade / 12;
    if (excludedCounter !== 2) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}

graduationPt2(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);