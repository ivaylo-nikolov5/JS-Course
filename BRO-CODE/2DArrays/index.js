// 2D Array - An array of arrays

let fruits = ["apples", "bananas", "oranges", "kiwis"];
let vegetables = ["tomatoes", "cucumbers", "peppers", "potatoes"];
let drinks = ["coffee", "juice", "water", "energy drink"];

// initialization
let shoppingList = [fruits, vegetables, drinks, ];

// adding item to one of the subarrays
shoppingList[0].push("mango");

// accessing a certain item of the multidimensional array
console.log(shoppingList[0][2]);

//iterating over

for (let group of shoppingList) {
    for (let product of group) {
        console.log(product);
    }
}