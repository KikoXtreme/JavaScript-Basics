function firm(input) {
    let neededHours = Number(input[0]);
    let days = Number(input[1]);
    let employees = Number(input[2]);

    let hoursOnTime = (days - (days * 0.1)) * 8;
    let hoursOffTime = employees * 2 * days;
    let totalTime = Math.floor(hoursOffTime + hoursOnTime);

    if (totalTime >=neededHours){
        console.log(`Yes!${totalTime - neededHours} hours left.`);
    } else {
        console.log(`Not enough time!${neededHours - totalTime} hours needed.`);
    }
}

firm(['99', '3', '1']);