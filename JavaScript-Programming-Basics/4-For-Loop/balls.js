function balls(input) {
    let numberBalls = Number(input[0]);

    let sum = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0

    for (let i = 1; i <= numberBalls; i++) {
        let currentSum = input[i];
        let ballsType = input[i];

        switch (currentSum) {
            case 'red': sum += 5; break;
            case 'orange': sum += 10; break;
            case 'yellow': sum += 15; break;
            case 'white': sum += 20; break;
            case 'black': sum = Math.floor(sum / 2); break;
        }

        switch (ballsType) {
            case 'red': redBalls++; break;
            case 'orange': orangeBalls++; break;
            case 'yellow': yellowBalls++; break;
            case 'white': whiteBalls++; break;
            case 'black': blackBalls++; break;
            default: otherBalls++; break;
        }
    }
    console.log(`Total points: ${sum}`);
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orangeBalls}`);
    console.log(`Points from yellow balls: ${yellowBalls}`);
    console.log(`Points from white balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

balls(["3", "white", "black", "pink"]);