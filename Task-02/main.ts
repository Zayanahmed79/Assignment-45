let personName: string = "sir zia ullah khan";

 
console.log("Lowercase: " + personName.toLowerCase()); //LowerCase
console.log("Uppercase: " + personName.toUpperCase()); //UpperCase
 
// function toTitleCase(str: string): string {
//     return str.replace(/\w\S*/g, function (txt: string): string {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

console.log("Titlecase: " + personName.charAt(0).toUpperCase() + personName.substr(1).toLowerCase());
 //TitleCase
