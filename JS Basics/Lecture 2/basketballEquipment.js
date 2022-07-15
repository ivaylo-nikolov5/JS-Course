function basketballEquipment(input) {
    let yearTax = Number(input[0]);
    let sneakersPrice = yearTax - (yearTax * 0.4);
    let basketballOutfit = sneakersPrice - (sneakersPrice * 0.2);
    let ballPrice = basketballOutfit * 0.25;
    let accessoriesPrice = ballPrice * 0.2;

    let total = yearTax + sneakersPrice + basketballOutfit + ballPrice + accessoriesPrice

    console.log(total)

}

basketballEquipment(["550 "])