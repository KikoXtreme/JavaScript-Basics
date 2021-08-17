function projectsCreation(input){
    let architectName = (input[0]);
    let projectCount = (input[1]);
    let time = projectCount * 3;

    console.log(`The architect ${architectName} will need ${time} hours to complete ${projectCount} project/s.`)
}

projectsCreation(["Kiko","4"]);