const calctip = bill => bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
const total = bill => calctip(bill) + bill;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calctip(bills[i]));
}
for (let i = 0; i < bills.length; i++) {
    totals.push(total(bills[i]));
}
const object = {
    bills: bills,
    tips: tips,
    totals: totals
}
console.log(object);
console.log(`For the bills ${bills}, The tips are ${tips}, and the total bills are ${totals} respectively.`)

calcaverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return (sum / arr.length);
}
console.log(`The average of ${totals} is ${calcaverage(totals)}.`);