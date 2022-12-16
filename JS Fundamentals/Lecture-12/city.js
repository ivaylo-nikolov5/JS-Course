function city(object) {
    console.log(`name -> ${object.name}`);
    console.log(`area -> ${object.area}`);
    console.log(`population -> ${object.population}`);
    console.log(`country -> ${object.country}`);
    console.log(`postCode -> ${object.postCode}`);
}

city({
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    }
)