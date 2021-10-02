function calculateRectangleArea(array) {
    let x1 = Number(array[0]);
    let y1 = Number(array[1]);
    let x2 = Number(array[2]);
    let y2 = Number(array[3]);

    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);

    console.log(width * height);
    console.log(2 * (width + height));
}

calculateRectangleArea([20, 30, 40, 50]);