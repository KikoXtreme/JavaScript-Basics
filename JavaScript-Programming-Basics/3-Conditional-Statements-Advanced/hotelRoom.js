function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    
    let apartmentSum = 0;
    let studioSum = 0;

    if (month === 'May' || month === 'October') {
        apartmentSum = nights * 65;
        studioSum = nights * 50;
        if (nights > 7 && nights <= 14) {
            studioSum = nights * 50 * 0.95;
        } else if (nights > 14) {
            studioSum = nights * 50 * 0.70;
        }
        if (nights > 14) {
            apartmentSum = nights * 65 * 0.90;
        }
    } else if (month === 'June' || month === 'September') {
        apartmentSum = nights * 68.70;
        studioSum = nights * 75.20;
        if (nights > 14) {
            studioSum = nights * 75.20 * 0.80;
        }
        if (nights > 14) {
            apartmentSum = nights * 68.70 * 0.90;
        }
    } else if (month === 'July' || month === 'August') {
        apartmentSum = nights * 77;
        studioSum = nights * 76;
        if (nights > 14) {
            apartmentSum = nights * 77 * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`)
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);