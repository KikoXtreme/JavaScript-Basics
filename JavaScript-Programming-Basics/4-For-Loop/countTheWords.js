function countTheWords(input) {
    let text = input[0];

    let stringL = text.length;
    let spaceCount = 0;

    for (let i = 0; i < stringL; i++) {
        if (text[i] === ' ') {
            spaceCount++;
        }
    }

    let words = spaceCount + 1;

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log("The message was sent successfully!");
    }
}

countTheWords(["This message has exactly eleven words. One more as it's allowed!"]);