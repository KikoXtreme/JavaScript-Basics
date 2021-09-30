function workout(input) {
    let days = Number(input[0]);
    let kmFirstDay = Number(input[1]);

    let firstDay = kmFirstDay;

    let totalKm = 0;

    for (let i = 2; i <= days + 1; i++) {
        let currentPercent = Number(input[i]);

        kmFirstDay = kmFirstDay + (kmFirstDay * (currentPercent / 100));
        totalKm += kmFirstDay;
    }

    let total = totalKm + firstDay;

    if (total >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(total - 1000)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - total)} more kilometers`);
    }
}

workout(["5", "30", "10", "15", "20", "5", "12"]);