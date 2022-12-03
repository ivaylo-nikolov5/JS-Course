function cone(radius, height) {
    let volume = 1/3 * Math.PI * height * radius * radius;
    let s = Math.sqrt(radius * radius + height * height);
    let L = Math.PI * radius * s;
    let B = Math.PI * radius * radius;

    let area = L + B;

    console.log(`volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`);
}

cone(3.3, 7.8);