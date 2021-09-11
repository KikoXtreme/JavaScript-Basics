function hospital(input) {
    let days = Number(input[0]);

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;

    for (let i = 1; i <= days; i++) {
        let currentPatients = Number(input[i]);
        
        if (i % 3 === 0 && untreatedPatients > treatedPatients){
            doctors++;
        }

        if (currentPatients > doctors){
            treatedPatients += doctors;
            untreatedPatients += currentPatients - doctors;
        } else {
            treatedPatients += currentPatients
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(['4', '7', '27', '9', '1']);