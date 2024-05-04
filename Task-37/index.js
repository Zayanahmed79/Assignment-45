function tshirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript!"; }
    console.log("Make ".concat(size, " shirts and print this \"").concat(message, "\" on it."));
}
tshirts();
tshirts("Medium", "I love javascript!");
