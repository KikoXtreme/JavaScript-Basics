function building(input) {
    let totalFloors = Number(input[0]);
    let aptPerFloor = Number(input[1]);

    for (let floors = totalFloors; floors > 0; floors--) {
        let all = '';
        for (let apt = 0; apt < aptPerFloor; apt++) {
            if (floors === totalFloors) {
                all += `L${floors}${apt} `;
            } else if (floors % 2 === 0) {
                all += `O${floors}${apt} `;
            } else {
                all += `A${floors}${apt} `;
            }
        }
        console.log(all);
    }
}

building(["6", "4"]);