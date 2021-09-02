function skiTrip(input) {
    let days = Number(input[0]);
    let accommodation = input[1];
    let score = input[2];

    let night = days - 1;
    let price = 0;

    if (days < 10) {
        if (accommodation === 'apartment') {
            price = night * 25 * 0.7;
        } else if (accommodation === 'president apartment') {
            price = night * 35 * 0.9;
        } else {
            price = night * 18;
        }
    }

    if (days <= 15) {
        if (accommodation === 'apartment') {
            price = night * 25 * 0.65;
        } else if (accommodation === 'president apartment') {
            price = night * 35 * 0.85;
        } else {
            price = night * 18;
        }
    }

    if (days > 15) {
        if (accommodation === 'apartment') {
            price = night * 25 * 0.5;
        } else if (accommodation === 'president apartment') {
            price = night * 35 * 0.8;
        } else {
            price = night * 18;
        }
    }

    if (score === 'positive') {
        price = price * 1.25;
    } else {
        price = price * 0.9;
    }
    console.log(price.toFixed(2));
}

skiTrip(["2", "apartment", "positive"]);