function radioCrystals(array) {
    let finalThickness = array[0];
    let usedXRay = false;
    let idx = 1;

    let cut = (crystal) => crystal / 4
    let lap = (crystal) => crystal * 0.2;
    let grind = (crystal) => 20;
    let etch = (crystal) => 2;
    let xRay = (crystal) => 1;
    let transportingAndWashing = (crystal) => Math.floor(crystal);

    while (idx < array.length){
        let currentCrystal = array[idx];

        let cuts = 0;
        let laps = 0;
        let grinds = 0;
        let etches = 0;


        console.log(`Processing chunk ${currentCrystal} microns`);

        while (true) {
            let currentCut = cut(currentCrystal);

            if (currentCut < finalThickness) {
                break;
            }

            currentCrystal = currentCut;
            cuts++;
        }

        console.log(`Cut x${cuts}`);


        currentCrystal = transportingAndWashing(currentCrystal);
        transportNWashing();

        if (currentCrystal === finalThickness) {
            console.log(`Finished crystal ${finalThickness} microns`);
            idx++;
            continue;
        }

        while (true) {
            let currentLap = currentCrystal - lap(currentCrystal);

            if (currentLap < finalThickness) {

                idx++;
                break;
            }

            currentCrystal = currentLap;
            laps++;
        }

        console.log(`Lap x${laps}`);
        currentCrystal = transportingAndWashing(currentCrystal);
        transportNWashing();

        if (currentCrystal === finalThickness) {
            console.log(`Finished crystal ${finalThickness} microns`);
            idx++;
            continue;
        }

        while (true) {
            let currentGrind = currentCrystal - grind(currentCrystal);

            if (currentGrind < finalThickness) {
                break;
            }

            currentCrystal = currentGrind;
            grinds++;
        }

        console.log(`Grind x${grinds}`);
        currentCrystal = transportingAndWashing(currentCrystal);
        transportNWashing();

        if (currentCrystal === finalThickness) {
            console.log(`Finished crystal ${finalThickness} microns`);
            idx++;
            continue;
        }

        while (true) {
            let currentEtch = currentCrystal - etch(currentCrystal);

            if (currentEtch + 1 === finalThickness) {
                currentCrystal = currentEtch;
                etches++;
            }

            if (currentEtch < finalThickness) {
                break;
            }

            currentCrystal = currentEtch;
            etches++;
        }

        console.log(`Etch x${etches}`);
        currentCrystal = transportingAndWashing(currentCrystal);
        transportNWashing();

        if (currentCrystal === finalThickness) {
            console.log(`Finished crystal ${finalThickness} microns`);
            idx++;
            continue;
        }

        function transportNWashing() {
            console.log("Transporting and washing");
        }

        if (currentCrystal < finalThickness && !usedXRay) {
            usedXRay = true
            currentCrystal += 1;
            console.log("X-ray x1")
        }

        console.log(`Finished crystal ${finalThickness} microns`);
        idx++;
    }



}

radioCrystals([1000, 4000, 8100])