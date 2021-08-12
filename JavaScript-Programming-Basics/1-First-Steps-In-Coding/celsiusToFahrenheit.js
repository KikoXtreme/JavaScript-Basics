function celsiusToFahrenheit (input){
    let Celsius = Number(input[0]);
    let Fahrenheit = ((Celsius * 1.8) + 32).toFixed(2);
    console.log(Fahrenheit);
}

celsiusToFahrenheit([25]);
