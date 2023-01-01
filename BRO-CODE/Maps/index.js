let store = new Map([
    ["t-shirt", 30],
    ["jeans", 40],
    ["socks", 5],
    ["underwear", 35]
]);

store.get("t-shirt");
store.set("hat", 10);
store.delete("socks");
console.log(store.has("jeans"));
console.log(store.has("socks"));
console.log(store.size);


store.forEach((value, key) => console.log(`${key} = $${value}`));