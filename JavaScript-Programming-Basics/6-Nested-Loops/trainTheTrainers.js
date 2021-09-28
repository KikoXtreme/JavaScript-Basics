function trainTheTrainers(input) {
    let index = 0;
    let juryNum = Number(input[index++]); //0
    let allGrades = 0;
    let allGradesSum = 0;
    
    while (input[index] !== 'Finish') {   //1
        let presentationName = input[index]; //1
        let presentationSum = 0;

        for (let i = 1; i <= juryNum; i++) {
            let currentGrades = Number(input[index + i]);
            presentationSum += currentGrades;
            allGradesSum += currentGrades;
            allGrades++;
        }
        console.log(`${presentationName} - ${(presentationSum / juryNum).toFixed(2)}.`);
        index += juryNum + 1;
    }
    console.log(`Student's final assessment is ${(allGradesSum / allGrades).toFixed(2)}.`)
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);