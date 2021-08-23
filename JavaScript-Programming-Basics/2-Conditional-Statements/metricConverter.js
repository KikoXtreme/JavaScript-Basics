function metricConverter(input) {
    let num = Number(input[0]);
    let inputUnit = input[1];
    let outputUnit = input[2];

    if (inputUnit === 'mm'){
        num = num / 1000;
    } else if (inputUnit === 'cm'){
        num = num / 100;
    } else if (inputUnit === 'm'){
        num = num;
    }

    if (outputUnit === 'mm'){
        console.log((num * 1000).toFixed(3));
    } else if (outputUnit === 'cm'){
        console.log((num * 100).toFixed(3));
    } else if (outputUnit === 'm'){
        console.log(num.toFixed(3));
    }
}

metricConverter(["12","mm","m"]);