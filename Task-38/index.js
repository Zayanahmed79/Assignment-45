function describe_cities(cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("City ".concat(cities, " is located in ").concat(country));
}
describe_cities("Karachi");
describe_cities("Islamabad");
describe_cities("Tokyo", "Japan");
