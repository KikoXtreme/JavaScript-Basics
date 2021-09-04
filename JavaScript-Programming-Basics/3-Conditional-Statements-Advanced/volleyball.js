function volleyball(input) {
    let yearType = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);

    let saturdayGamesSofia = (48 - h) * (3 / 4);
    let sundayGamesHome = h;
    let pHolidaysgameSofia = p * (2 / 3);

    let games = saturdayGamesSofia + sundayGamesHome + pHolidaysgameSofia;

    if (yearType === 'leap'){
        games = games + (games * 0.15);
    } 

    console.log(Math.floor(games))
}

volleyball(["leap", "5", "2"]);