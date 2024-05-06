function great(magician : string[]){
    for (let a = 0; a < magician.length; a++){
        magician[a] = magician[a] + " the great"
        console.log(magician);
    }
}great(["zayan","talha","shafique"])