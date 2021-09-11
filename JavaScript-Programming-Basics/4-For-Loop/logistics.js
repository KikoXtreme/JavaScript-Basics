function logistics(input) {
    let loads = Number(input[0]);

    let tons = 0;
    let price = 0;
    let mediumPerTon = 0;
    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;

    for (let i = 1; i <= loads; i++) {
        let currentLoad = Number(input[i]);
        tons += currentLoad;

        if (currentLoad <= 3) {
            price = price + (currentLoad * 200);
            percent1 += currentLoad;
        } else if (currentLoad <= 11) {
            price = price + (currentLoad * 175);
            percent2 += currentLoad;
        } else {
            price = price + (currentLoad * 120);
            percent3 += currentLoad;
        }
    }
    mediumPerTon = price / tons;

    console.log(mediumPerTon.toFixed(2));
    console.log((percent1 / tons * 100).toFixed(2) + '%');
    console.log((percent2 / tons * 100).toFixed(2) + '%');
    console.log((percent3 / tons * 100).toFixed(2) + '%');

}

logistics(['4', '1', '5', '16', '3']);