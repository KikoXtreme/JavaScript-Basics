function currencyConverter(input) {
    let sum = Number(input[0]);
    let inputCurrency = input[1];
    let outputCurrency = input[2];

    if (inputCurrency === 'USD') {
        sum = sum * 1.79549;
    } else if (inputCurrency === 'EUR') {
        sum = sum * 1.95583;
    } else if (inputCurrency === 'GBP') {
        sum = sum * 2.53405;
    } else if (inputCurrency === 'BGN') {
        sum = sum
    }

    if (outputCurrency === 'USD') {
        console.log((sum / 1.79549).toFixed(2));
    } else if (outputCurrency === 'EUR') {
        console.log((sum / 1.95583).toFixed(2));
    } else if (outputCurrency === 'GBP') {
        console.log((sum / 2.53405).toFixed(2));
    } else if (outputCurrency === 'BGN') {
        console.log(sum.toFixed(2));
    }
}

currencyConverter(['12.35', 'EUR', 'GBP']);