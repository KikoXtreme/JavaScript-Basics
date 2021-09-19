function reportSystem(input) {
    let index = 0;
    let expectedSum = Number(input[index++]); //0
    let command = input[index++]; //1

    let cashPay = 0
    let cardPay = 0;
    let totalSum = 0;
    let cashTransactions = 0;
    let cardTransactions = 0;

    while (command !== 'End') {
        let currentCashPay = Number(command); //1
        let currentCardPay = Number(input[index++]); //2

        if (totalSum >= expectedSum) {
            break;
        }

        if (currentCashPay > 100) {
            console.log('Error in transaction!');
        } else {
            console.log('Product sold!');
            cashPay += currentCashPay;
            cashTransactions++;
        }

        if (currentCardPay < 10) {
            console.log('Error in transaction!');
        } else {
            console.log('Product sold!');
            cardPay += currentCardPay;
            cardTransactions++;
        }

        totalSum = cashPay + cardPay;
        command = input[index++];
    }
    if (expectedSum > totalSum) {
        console.log('Failed to collect required money for charity.');
    } else {
        console.log(`Average CS: ${(cashPay / cashTransactions).toFixed(2)}`);
        console.log(`Average CC: ${(cardPay / cardTransactions).toFixed(2)}`);
    }
}

reportSystem(['500', '120', '8', '63', '256', '78', '317']);
//reportSystem(['600', '86', '150', '98', '227', 'End']);