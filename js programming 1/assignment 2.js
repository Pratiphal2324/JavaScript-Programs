// let massMark = 78, heightMark = 1.69;
// let massJohn = 85, heightJohn = 1.95;
let massMark = 95, heightMark = 1.88;
let massJohn = 85, heightJohn = 1.76;
const BMI_Mark = (massMark / heightMark ** 2).toFixed(1);
const BMI_John = (massJohn / heightJohn ** 2).toFixed(1);
let markhigherBMI = BMI_Mark > BMI_John;
if (markhigherBMI == true) {
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's BMI(${BMI_John}).`);
}
else {
    console.log(`John's BMI(${BMI_John}) is higher than Mark's BMI(${BMI_Mark}).`);
}