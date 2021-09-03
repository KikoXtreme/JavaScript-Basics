function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = input[2];

    let result = 0;

    switch (city) {
        case 'Sofia':
            switch (product) {
                case 'coffee': result = quantity * 0.5; break;
                case 'water': result = quantity * 0.8; break;
                case 'beer': result = quantity * 1.2; break;
                case 'sweets': result = quantity * 1.45; break;
                case 'peanuts': result = quantity * 1.6; break;
            } break;
        case 'Plovdiv':
            switch (product) {
                case 'coffee': result = quantity * 0.4; break;
                case 'water': result = quantity * 0.7; break;
                case 'beer': result = quantity * 1.15; break;
                case 'sweets': result = quantity * 1.3; break;
                case 'peanuts': result = quantity * 1.5; break;
            } break;
        case 'Varna':
            switch (product) {
                case 'coffee': result = quantity * 0.45; break;
                case 'water': result = quantity * 0.7; break;
                case 'beer': result = quantity * 1.1; break;
                case 'sweets': result = quantity * 1.35; break;
                case 'peanuts': result = quantity * 1.55; break;
            } break;
    }
    console.log(result);
}

smallShop(["water", "Plovdiv", "3"]);