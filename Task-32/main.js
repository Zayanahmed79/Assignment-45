var existingusername = ["Zayan", "Shafique", "Tanzeel", "Talha", "Sandeed"];
var newusername = ["Zayan", "Tanzeel", "Ali", "Fahad", "Nasir"];
newusername.forEach(function (newuser) {
    if (newusername.some(function (existingusername) { return existingusername.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " is not available! \nPlease try another name"));
    }
    else {
        console.log("".concat(newuser, " is available."));
    }
});
