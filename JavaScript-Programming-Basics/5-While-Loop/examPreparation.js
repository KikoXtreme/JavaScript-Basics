function examPreparation(input) {
    index = 0;
    let badGradesAllowed = Number(input[index++]);

    let badGrades = 0;
    let goodGrades = 0;
    let gradesSum = 0;
    let lastJob = '';

    while (badGrades < badGradesAllowed) {
        let currentJob = input[index++];
        let grade = Number(input[index++]);

        if (currentJob === "Enough") {
            let allJobsCount = badGrades + goodGrades;
            let averageScore = gradesSum / allJobsCount;
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${allJobsCount}`);
            console.log(`Last problem: ${lastJob} `);
            break;
        }
        if (grade <= 4) {
            badGrades++;
        } else {
            goodGrades++;
        }
        lastJob = currentJob;
        gradesSum += grade;
    } if (badGrades === badGradesAllowed) {
        console.log(`You need a break, ${badGrades} poor grades.`)
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);