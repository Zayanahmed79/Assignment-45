let favpizza = ["Dominos", "Broadway", "Italian"];
favpizza.forEach((pizza) => {
  if (pizza === "Dominos") {
    console.log(
      `I like ${pizza} because of its cheese present at its corners.`
    );
  } else if (pizza === "Broadway") {
    console.log(
      `I like ${pizza} because of its new flavours that fill up my mouth with joy.`
    );
  } else {
    console.log(`I like ${pizza} because of its classic taste.`);
  }
});

