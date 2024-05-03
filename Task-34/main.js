var favpizza = ["Dominos", "Broadway", "Italian"];
favpizza.forEach(function (pizza) {
    if (pizza === "Dominos") {
        console.log("I like ".concat(pizza, " because of its cheese present at its corners."));
    }
    else if (pizza === "Broadway") {
        console.log("I like ".concat(pizza, " because of its new flavours that fill up my mouth with joy."));
    }
    else {
        console.log("I like ".concat(pizza, " because of its classic taste."));
    }
});
