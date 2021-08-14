function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height;
    let liters = volume * 0.001;
    let total = liters - (liters * (percent/100));


    console.log(total);
}

fishTank(["85","75","47","17"]);
