var guestlist = ["Shafique", "Sandeed", "Tanzeel", "Aoun"];
var unguest = "Shafique";
console.log("Unfortunatly ".concat(unguest, " can't attend the dinner"));
var newguest = "Talha";
guestlist[guestlist.indexOf(unguest)] = newguest;
guestlist.forEach(function (val1) { return console.log("Hello " + val1 + ", you are invited to the dinner"); });
