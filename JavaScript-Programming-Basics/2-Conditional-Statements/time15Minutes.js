function time15Minutes(input) {
    let hours = Number(input[0]);
    let inputMinutes = Number(input[1]);

    let minutes = inputMinutes + 15;

    if (minutes >= 60) {
        hours = hours + 1
        minutes = minutes % 60;
    }
    if (hours >= 24) {
        hours = hours - 24;
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

time15Minutes(["1", "46"]);