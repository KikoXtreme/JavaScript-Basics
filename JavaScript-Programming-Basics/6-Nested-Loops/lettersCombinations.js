function lettersCombinations(input) {
    let startInterval = input[0].charCodeAt();
    let endInterval = input[1].charCodeAt();
    let missingLetter = input[2].charCodeAt();
    let count = 0;
    let str = '';

    for (let i = startInterval; i <= endInterval; i++){
        for (let j = startInterval; j <= endInterval; j++){
            for (let k = startInterval; k <= endInterval; k++){
                if (i !== missingLetter && j !== missingLetter && k !== missingLetter){
                    count++;
                    str += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                }
            }
        }
    }
    console.log(str + count);
}

lettersCombinations(['a', 'c', 'b']);