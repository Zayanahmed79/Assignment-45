var magicians = ["Zayan", "Talha", "Hamdan"];
function make_great(magicians) {
    var great_magician = [];
    magicians.forEach(function (element) {
        great_magician.push(element + " the Great");
    });
    return great_magician;
}
console.log('Orignal Names:');
console.log(magicians);
console.log('Modified Names:');
console.log(make_great(magicians));
