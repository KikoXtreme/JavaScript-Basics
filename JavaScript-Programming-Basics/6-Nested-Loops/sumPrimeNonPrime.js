function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index++];
    let primeNums = 0;
    let nonPrimeNums = 0;

    while (command !== 'stop') {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log('Number is negative.');
        } else {
            let isPrime = true;
            for (let i = 2; i < currentNum; i++) {
                if(currentNum % i === 0){
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primeNums += currentNum;
            } else {
                nonPrimeNums += currentNum;
            }
        }
        command = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${primeNums}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNums}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);