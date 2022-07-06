function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let result = Number((dogFood * 2.5) + (catFood * 4));

    console.log(result + " lv.");
}

petShop(["13", "9"])