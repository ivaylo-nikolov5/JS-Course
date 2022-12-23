function demo(data) {
    let myMap = new Map();
    myMap.set("name", "Ivaylo");
    myMap.set("age", 17)

    console.log(myMap);
    console.log(myMap.size);
    console.log(myMap.get("name"))
    console.log(myMap.has("name "))
    myMap.delete("name");
    console.log(myMap)

    console.log(Array.from(myMap.keys()));

}

demo()