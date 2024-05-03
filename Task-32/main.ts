let existingusername = ["Zayan", "Shafique", "Tanzeel", "Talha", "Sandeed"];
let newusername = ["Zayan", "Tanzeel", "Ali", "Fahad", "Nasir"];

newusername.forEach((newuser) => {
  if (
existingusername.some
    ((existingusername) => existingusername.toLowerCase() === newuser.toLowerCase()
    )
  ) {
    console.log(`${newuser} is not available! \nPlease try another name`);
  } else {
    console.log(`${newuser} is available.`);
  }
});
