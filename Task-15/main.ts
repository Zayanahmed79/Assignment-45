let guestlist =["Shafique","Sandeed","Tanzeel","Aoun"]
let unguest = "Shafique";
console.log(`Unfortunatly ${unguest} can't attend the dinner`);

let newguest = "Talha"

guestlist[guestlist.indexOf(unguest)] = newguest

guestlist.forEach((val1) => console.log("Hello " + val1 + ", you are invited to the dinner"))