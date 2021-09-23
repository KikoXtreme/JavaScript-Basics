function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];
    let totalTicket = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;

    while (command !== 'Finish') {
        let movieName = command;
        let freeSpace = Number(input[index++]);
        let type = input[index++];
        let ticketCounter = 0;

        while (type !== 'End') {
            ticketCounter++;
            switch (type) {
                case 'student': studentTickets++; break;
                case 'standard': standartTickets++; break;
                case 'kid': kidsTickets++; break;
            }

            if (ticketCounter >= freeSpace) {
                break;
            }
            type = input[index++];
        }
        totalTicket += ticketCounter;
        console.log(`${movieName} - ${(ticketCounter / freeSpace * 100).toFixed(2)}% full.`)
        command = input[index++];
    }
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${(studentTickets / totalTicket * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / totalTicket * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / totalTicket * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End",
    "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);