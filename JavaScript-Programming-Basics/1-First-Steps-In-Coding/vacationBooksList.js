function vacationBooksList(input){
    let pageCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);

    let timeFor1Book = pageCount / pagesPerHour;
    let total = timeFor1Book / daysPerBook;

    console.log(total);
}

vacationBooksList(["212","20","2"]);