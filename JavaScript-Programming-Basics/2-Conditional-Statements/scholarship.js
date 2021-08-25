function scholarship(input) {
    let income = Number(input[0]);
    let averageScore = Number(input[1]);
    let minimalWage = Number(input[2]);

    let socialScholarship = Math.floor(minimalWage * 0.35);
    let excellentScholarship = Math.floor(averageScore * 25);

    if (averageScore >= 5.5 && excellentScholarship >= socialScholarship) {
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
    } else if (averageScore >= 5.5 && income > minimalWage) {
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
    } else if (averageScore >= 5.5 && excellentScholarship < socialScholarship) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (averageScore > 4.5 && income < minimalWage) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else {
        console.log('You cannot get a scholarship!');
    }
}

scholarship(["3000.00", "5.60", "2000.00"]);