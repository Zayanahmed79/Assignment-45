function make_sandwhiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwhich with ".concat(items));
}
make_sandwhiches("ham", "cheese");
make_sandwhiches("turkey", "tomato", "lettuce");
make_sandwhiches("avacardo", "mustard", "mayo", "sprouts");
