const calctip = bill => bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
const total = bill => calctip(bill) + bill;
const totalbills = [total(bills[0]), total(bills[1]), total(bills[2])];
console.log(`For the bills ${bills}, the tips are ${tips} and the total bills are ${totalbills} respectively.`);
