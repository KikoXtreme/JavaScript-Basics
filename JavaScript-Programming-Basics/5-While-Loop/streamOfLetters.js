function streamOfLetters(input) {
    let index = 0;
    let command = input[index++];
    let str = '';

    while (command !== 'End') {

        // not ready!!! //

        str += command;
        command = input[index++];
    }
    console.log(str)
}

streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);