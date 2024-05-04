function makealbum(artist, names, tracks) {
    var album = { artist: artist, names: names };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(makealbum("Chahat fateh ali khan", "Oye hoye haye haye, pao pao"));
console.log(makealbum("Juice Wrld", "Lucid Dreams, Robbery, Stay High", 25));
