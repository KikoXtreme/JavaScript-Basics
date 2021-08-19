function yardGreening(input){
    let m2greening = (input[0]);
    let sum = (m2greening * 7.61) - ((m2greening * 7.61) * 0.18);
    let discount = (m2greening * 7.61) * 0.18;

    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
