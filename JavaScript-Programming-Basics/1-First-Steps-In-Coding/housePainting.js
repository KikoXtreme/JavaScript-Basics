function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wall = x * y;
    let window = 1.5 * 1.5;
    let sideWalls = (wall * 2) - (window * 2);
    let front = x * x;
    let door = 1.2 * 2;
    let frontWalls = (front * 2) - door;

    let area = sideWalls + frontWalls;
    let greenPaint = (area / 3.4).toFixed(2);

    let roofSide = 2 * x * y;
    let roofFront = 2 * (x * h / 2);

    let roof = roofFront + roofSide;
    let redPaint = (roof / 4.3).toFixed(2);

    console.log(greenPaint);
    console.log(redPaint);
}

housePainting([6, 10, 5.2]);