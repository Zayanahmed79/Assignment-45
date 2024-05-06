function great(magician) {
    for (var a = 0; a < magician.length; a++) {
        magician[a] = magician[a] + " the great";
        console.log(magician);
    }
}
great(["zayan", "talha", "shafique"]);
