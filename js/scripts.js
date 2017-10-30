var a = 5,
    b = 9;
var value = ((a * a) - (2 * a * b) + (b * b));
console.log ("wynik:",value);
if (value > 0) {
    console.log ("wynik dodatni");
}
else if (value < 0) {
    console.log ("wynik ujemny");
}
else if (value == 0) {
    console.log ("wynik = 0");
}
    