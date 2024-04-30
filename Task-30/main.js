//qs.no 30
var array = ["Admin", "Manager", "Users"];
array.forEach(function (array) {
    if (array === "Admin") {
        console.log("Hello ".concat(array, " would you like to see the status report"));
    }
    else {
        console.log("Hello ".concat(array, " thank you for login please try again"));
    }
});
