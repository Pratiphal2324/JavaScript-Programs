const bill = 69;
let between50to300 = (15/100)*bill.toFixed(2);
let notbetween50to300 = (20/100)*bill.toFixed(2);
// console.log(between50to300);
// console.log(notbetween50to300);
console.log(`The bill was $${bill} and the tip was $${bill>50 && bill<300 ? between50to300 : notbetween50to300}. So the total is $${bill>50 && bill<300 ? bill + between50to300 : notbetween50to300}.`)
