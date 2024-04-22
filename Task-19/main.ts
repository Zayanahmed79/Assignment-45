//qs.no 16
let guestlist =["Shafique","Sandeed","Tanzeel","Aoun"]
console.log("\nI have found a bigger table and invited some new friends:\n");

guestlist.push("aneeq"),
guestlist.unshift("areeb"),
guestlist.splice(guestlist.length / 2, 0, "ayan"),

guestlist.forEach((val) => console.log("Hello " + val + ", you are invited to the dinner"))

//qs.no 19

console.log(`I'm inviting ${guestlist.length} people to the dinner`);