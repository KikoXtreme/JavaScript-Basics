function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePer1Meter = Number(input[2]);

    let timeForSwim = distance * timePer1Meter;
    let slowdown = Math.floor(distance / 15) * 12.5;
    let time = timeForSwim + slowdown;

    if (time >= record){
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);