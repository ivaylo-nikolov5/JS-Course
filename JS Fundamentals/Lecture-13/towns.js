function towns(array) {
    for (let i = 0; i < array.length; i++) {
        let [name, latitude, longitude] = array[i].split(" | ");

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let town = {
            town: name,
            latitude: latitude,
            longitude: longitude,
        }

        console.log(`{ town: '${town.town}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`);


    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)