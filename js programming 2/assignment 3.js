const Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = (this.mass / (this.height * this.height)).toFixed(1);
        return this.BMI;
    }
};
const John = {
    mass: 92,
    fullName: "John Smith",
    height: 1.95,
    calcBMI: function () {
        this.BMI = (this.mass / (this.height * this.height)).toFixed(1);
        return this.BMI;
    }
};
John.calcBMI();
Mark.calcBMI();
if (John.BMI < Mark.BMI) {
    console.log(`${Mark.fullName}'s BMI(${Mark.BMI}) is higher than ${John.fullName}'s BMI(${John.BMI})!`);
} else {
    console.log(`${John.fullName}'s BMI(${John.BMI}) is higher than ${Mark.fullName}'s BMI(${Mark.BMI})!`);
}
