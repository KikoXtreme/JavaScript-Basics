function walking(input) {
    let index = 0;
    let steps = 0;
    let goingHome = input[input.length - 2];
    let goal = 10000;

    if (goingHome === 'Going home') {
        while (index < input.length - 2) {
            let currentSteps = Number(input[index++]);
            steps += currentSteps;
        }
        steps += Number(input[input.length - 1]);
    } else {
        while (index < input.length) {
            let currentSteps = Number(input[index++]);
            steps += currentSteps;
        }
    }

    if (steps >= goal) {
        console.log('Goal reached! Good job!');
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more steps to reach goal.`)
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);