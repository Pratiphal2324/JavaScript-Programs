const dolphinsFirstGame = 300, dolphinsSecondGame = 0, dolphinsThirdGame = 0;
const koalasFirstGame = 100, koalasSecondGame = 0, koalasThirdGame = 0;
koalasAvScore = (koalasFirstGame + koalasSecondGame + koalasThirdGame) / 3;
dolphinsAvScore = (dolphinsFirstGame + dolphinsSecondGame + dolphinsThirdGame) / 3;
console.log(dolphinsAvScore, koalasAvScore);
if (koalasAvScore > dolphinsAvScore && koalasAvScore >= 100) {
    console.log("The Koalas Win!!!");
} else if (dolphinsAvScore > koalasAvScore && dolphinsAvScore >= 100) {
    console.log("The Dolphins Win!!!");
} else if (dolphinsAvScore === koalasAvScore && koalasAvScore >= 100) {
    console.log("It's a draw! Both of them win!!!");
} else {
    console.log("No one got more than 100 average points, so no one wins...");
}