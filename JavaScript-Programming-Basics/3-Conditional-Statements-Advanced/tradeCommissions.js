function tradeCommissions(input) {
    let city = input[0];
    let sells = Number(input[1]);

    let commission = 0;

    if (sells < 0 || (city !== 'Sofia' && city !== 'Varna' && city !== 'Plovdiv')) {
        console.log('error');
    } else if (sells >= 0 && sells <= 500) {
        if (city === 'Sofia') {
            commission = sells * 0.05;
        } else if (city === 'Varna') {
            commission = sells * 0.045;
        } else if (city === 'Plovdiv') {
            commission = sells * 0.055;
        }
        console.log(commission.toFixed(2));
    } else if (sells > 500 && sells <= 1000) {
        if (city === 'Sofia') {
            commission = sells * 0.07;
        } else if (city === 'Varna') {
            commission = sells * 0.075;
        } else if (city === 'Plovdiv') {
            commission = sells * 0.08;
        }
        console.log(commission.toFixed(2));
    } else if (sells > 1000 && sells <= 10000) {
        if (city === 'Sofia') {
            commission = sells * 0.08;
        } else if (city === 'Varna') {
            commission = sells * 0.1;
        } else if (city === 'Plovdiv') {
            commission = sells * 0.12;
        }
        console.log(commission.toFixed(2));
    } else if (sells > 10000) {
        if (city === 'Sofia') {
            commission = sells * 0.12;
        } else if (city === 'Varna') {
            commission = sells * 0.13;
        } else if (city === 'Plovdiv') {
            commission = sells * 0.145;
        }
        console.log(commission.toFixed(2));
    }
}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Kaspichan", "-50"]);
tradeCommissions(['Bourgas', '1500']);