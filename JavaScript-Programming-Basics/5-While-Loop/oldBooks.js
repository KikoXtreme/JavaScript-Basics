function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index++];
    let bookIsFound = false;
    let nextBook = input[index++];

    while (nextBook !== 'No More Books') {

        if (nextBook === favouriteBook) {
            bookIsFound = true;
            break;
        }
        nextBook = input[index++];
    }

    if (bookIsFound === false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${index - 2} books.`);
    } else {
        console.log(`You checked ${index - 2} books and found it.`)
    }
}

oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])
