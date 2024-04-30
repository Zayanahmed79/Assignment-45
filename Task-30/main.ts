//qs.no 30

let array = ["Admin","Manager","Users"]

array.forEach(array => {
    if (array === "Admin") {
        console.log(`Hello ${array} would you like to see the status report`);    
    } else {
        console.log(`Hello ${array} thank you for login please try again`);
        
    }
})
