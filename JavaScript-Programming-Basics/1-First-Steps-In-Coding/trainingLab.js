function trainingLab(input){
    let w = Number(input[0]);
    let h = Number(input[1]);

    let space = (h * 100) - 100;
    let deskPerRaw = Math.floor(space / 70);
    let raws = Math.floor((w * 100) / 120);
    let total = (deskPerRaw * raws) - 3;

    console.log(total);
}

trainingLab([15, 8.9]);