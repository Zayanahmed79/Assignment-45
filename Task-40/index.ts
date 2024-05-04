function makealbum(artist: string, names: string, tracks?: number){
    let album = {artist , names}
    if(tracks){
        album["tracks"] = tracks;
    } 
    return album
}
console.log(makealbum("Chahat fateh ali khan","Oye hoye haye haye, Pao pao"));
console.log(makealbum("Juice Wrld","Lucid Dreams, Robbery, Stay High", 25));

