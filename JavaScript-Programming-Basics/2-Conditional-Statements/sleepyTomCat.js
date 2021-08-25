function sleepyTomCat(input){
    let days = Number(input[0]);

    let restDaysGame = days * 127;
    let workDaysGame = (365 - days) * 63;
    let totalMinutes = restDaysGame + workDaysGame;
    let timeDifMin = Math.abs(30000 - totalMinutes);
    let h = Math.floor(timeDifMin / 60);
    let m = timeDifMin % 60;

    if (totalMinutes < 30000){
        console.log('Tom sleeps well');
        console.log(`${h} hours and ${m} minutes less for play`)
    } else {
        console.log('Tom will run away');
        console.log(`${h} hours and ${m} minutes more for play`)
    }
}

sleepyTomCat(['20']);