//To print eg : "Jonas has 3 friends. His best firend is Michael" using object
const obj = {};
// console.log(typeof obj);
obj.name = prompt("Enter your name.");
obj.nofriends = prompt("How many friends do you have?");
obj.bestfriend = prompt("Who is your best friend?");
console.log(obj);
console.log(`${obj.name} has ${obj.nofriends} friends. His best friend is ${obj.bestfriend}.`)