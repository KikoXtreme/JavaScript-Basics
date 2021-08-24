function pipesInPool(input) {
    let volume = Number(input[0]);
    let pipeOneDebitPerHour = Number(input[1]);
    let pipeTwoDebitPerHour = Number(input[2]);
    let h = Number(input[3]);

    let totalLitres = h * (pipeOneDebitPerHour + pipeTwoDebitPerHour);
    let pipe1Fill = ((pipeOneDebitPerHour * h) / totalLitres) * 100;
    let pipe2Fill = ((pipeTwoDebitPerHour * h) / totalLitres) * 100;
    let totalPercent = totalLitres / volume * 100;

    if (volume >= totalLitres) {
        console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${pipe1Fill.toFixed(2)}%. Pipe 2: ${pipe2Fill.toFixed(2)}%.`)
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(Math.abs(volume - totalLitres)).toFixed(2)} liters.`)
    }
}

pipesInPool([1000, 100, 120, 3]);