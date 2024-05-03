function tshirt(colour, size, logo) {
    if (colour === void 0) { colour = "Brown"; }
    if (size === void 0) { size = "Medium"; }
    if (logo === void 0) { logo = "Cool"; }
    console.log("T-shirt's details:\nT-shirt colour: ".concat(colour, ",\nT-shirt size: ").concat(size, ",\nT-shirts logo: ").concat(logo));
}
tshirt();
