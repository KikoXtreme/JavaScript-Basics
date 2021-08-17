function radianstoDegrees (input){
    let Radians = Number(input[0]);
    let Degrees = (Radians * (180/Math.PI)).toFixed(0);
    console.log(Degrees);
}

radianstoDegrees([3.1416]);