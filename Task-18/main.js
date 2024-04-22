var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visplaces = ["Murre", "Islamabad", "Karachi", "Lahore", "Sehwan"];
console.log("Orignal order: ".concat(visplaces));
console.log("Alphabetical order: ".concat(__spreadArray([], visplaces, true).sort()));
console.log("Orignal order: ".concat(visplaces));
console.log("Revrse alphabetcal order: ".concat(__spreadArray([], visplaces, true).sort().reverse()));
console.log("Orignal order: ".concat(visplaces));
console.log("Reverse order: ".concat(visplaces.reverse()));
