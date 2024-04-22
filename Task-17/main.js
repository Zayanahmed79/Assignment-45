// qs.no.14
var guestlist = ["Shafique", "Sandeed", "Tanzeel", "Aoun"];
// guestlist.forEach((val) => console.log("Hello " + val + ", you are invited to the dinner")
//qs.no.15
var unguest = "Shafique";
console.log("Unfortunatly ".concat(unguest, " can't attend the dinner"));
var newguest = "Talha";
guestlist[guestlist.indexOf(unguest)] = newguest;
guestlist.forEach(function (val1) { return console.log("Hello " + val1 + ", you are invited to the dinner"); });
//qs.no 16
console.log("\nI have found a bigger table and invited some new friends:\n");
guestlist.push("aneeq"),
    guestlist.unshift("areeb"),
    guestlist.splice(guestlist.length / 2, 0, "ayan"),
    guestlist.forEach(function (val) { return console.log("Hello " + val + ", you are invited to the dinner"); });
//qs no 17
console.log("\nUnfortunatly, I can invite only two people\n");
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log(" Sorry ".concat(removeguest, ", You are not invited at the dinner"));
}
guestlist.forEach(function (val) { return console.log("".concat(val, ", you are still invited")); });
guestlist.splice(0, guestlist.length);
console.log(guestlist);
