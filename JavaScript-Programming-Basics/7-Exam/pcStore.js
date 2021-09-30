function pcStore(input) {
    let priceProcesor = Number(input[0]);
    let priceVideocard = Number(input[1]);
    let priceRam = Number(input[2]);
    let countRam = Number(input[3]);
    let discountPercent = Number(input[4]);

    let priceProcesorBgn = priceProcesor * 1.57;
    let priceVideocardBgn = priceVideocard * 1.57;
    let priceRamBgn = priceRam * 1.57 * countRam;

    let priceProcesorFinal = priceProcesorBgn * (1 - discountPercent);
    let priceVideocardFinal = priceVideocardBgn * (1 - discountPercent);

    let total = priceProcesorFinal + priceVideocardFinal + priceRamBgn;

    console.log(`Money needed - ${total.toFixed(2)} leva.`);
}

pcStore(["500", "200", "80", "2", "0.05"]);