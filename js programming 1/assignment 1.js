// let massMark = 78, heightMark = 1.69;
// let massJohn = 85, heightJohn = 1.95;
let massMark = 95, heightMark = 1.88;
let massJohn = 85, heightJohn = 1.76;
BMI_Mark = massMark / heightMark ** 2;
BMI_John = massJohn / (heightJohn * heightJohn);
let markhigherBMI = BMI_Mark > BMI_John;
if (markhigherBMI == true) {
    console.log("Mark has a higher BMI than John.");
}
else {
    console.log("John has a higher BMI than Mark.");
}