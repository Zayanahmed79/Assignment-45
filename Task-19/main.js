//qs.no 16
var guestlist = ["Shafique", "Sandeed", "Tanzeel", "Aoun"];
console.log("\nI have found a bigger table and invited some new friends:\n");
guestlist.push("aneeq"),
    guestlist.unshift("areeb"),
    guestlist.splice(guestlist.length / 2, 0, "ayan"),
    guestlist.forEach(function (val) { return console.log("Hello " + val + ", you are invited to the dinner"); });
//qs.no 19
console.log("I'm inviting ".concat(guestlist.length, " people to the dinner"));
