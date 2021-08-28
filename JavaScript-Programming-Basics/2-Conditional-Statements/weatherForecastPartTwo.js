function weatherForecastPartTwo(input) {
    let degree = Number(input[0]);

    if (degree >= 26 && degree <= 35) {
        console.log('Hot');
    }
    if (degree >= 20.1 && degree <= 25.9) {
        console.log('Warm');
    }
    if (degree >= 15 && degree <= 20) {
        console.log('Mild');
    }
    if (degree >= 12 && degree <= 14.9) {
        console.log('Cool');
    }
    if (degree >= 5 && degree <= 11.9) {
        console.log('Cold');
    }
    if (degree < 5) {
        console.log('unknown');
    }
    if  (degree > 35) {
        console.log('unknown');
    }
}

weatherForecastPartTwo(['0']);