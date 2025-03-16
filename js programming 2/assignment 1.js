const koalasfirstgame = 23, koalassecondgame = 34, koalasthirdgame = 27;
const dolphinsfirstgame = 85, dolphinssecondgame = 54, dolphinsthirdgame = 41;
let calcaverage = (a, b, c) => (a + b + c) / 3;
avkoalas = calcaverage(koalasfirstgame, koalassecondgame, koalasthirdgame);
avdolphins = calcaverage(dolphinsfirstgame, dolphinssecondgame, dolphinsthirdgame);
let result;
function checkwinner(a, b) {
    if (a >= b * 2) {
        return `The Koalas win (${a} V ${b})🏆`;
    } else if (b >= a * 2) {
        return `The Dolphins win (${b} V ${a})🏆`;
    }
    else {
        return `Unfortunately, no one wins (${a} V ${b}.)`;
    }
}
console.log(checkwinner(avkoalas, avdolphins));