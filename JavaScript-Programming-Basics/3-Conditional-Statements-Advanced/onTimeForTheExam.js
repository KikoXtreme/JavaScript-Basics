function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);

    let timeExam = (hourExam * 60) + minuteExam;
    let timeArrival = (hourArrival * 60) + minuteArrival;

    if (timeExam < timeArrival) {
        if ((timeArrival - timeExam) < 60) {
            console.log('Late');
            console.log(`${(timeArrival % timeExam)} minutes after the start`);
        } else {
            if (((timeArrival % timeExam) - (60 * (Math.floor((timeArrival % timeExam) / 60)))) >= 10) {
                console.log('Late');
                console.log(`${Math.floor((timeArrival % timeExam) / 60)}:${(timeArrival % timeExam) - (60 * (Math.floor((timeArrival % timeExam) / 60)))} hours after the start`);
            } else {
                console.log('Late');
                console.log(`${Math.floor((timeArrival % timeExam) / 60)}:0${(timeArrival % timeExam) - (60 * (Math.floor((timeArrival % timeExam) / 60)))} hours after the start`);
            }
        }
    } else if (timeExam === timeArrival) {
        console.log('On time');
    } else if ((timeExam - timeArrival) <= 30) {
        console.log('On time');
        console.log(`${(timeExam % timeArrival)} minutes before the start`);
    } else if (timeExam > timeArrival) {
        if ((timeExam - timeArrival) < 60) {
            console.log('Early');
            console.log(`${(timeExam % timeArrival)} minutes before the start`);
        } else {
            if (((timeExam % timeArrival) - (60 * (Math.floor((timeExam % timeArrival) / 60)))) >= 10) {
                console.log('Early');
                console.log(`${Math.floor((timeExam % timeArrival) / 60)}:${(timeExam % timeArrival) - (60 * (Math.floor((timeExam % timeArrival) / 60)))} hours before the start`);
            } else {
                console.log('Early');
                console.log(`${Math.floor((timeExam % timeArrival) / 60)}:0${(timeExam % timeArrival) - (60 * (Math.floor((timeExam % timeArrival) / 60)))} hours before the start`);
            }
        }
    }
}

onTimeForTheExam(["9", "00", "10", "30"]);