function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    let result = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    result = Math.sqrt(result);

    console.log(result);
}

distanceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985);