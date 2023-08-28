let age: number = 20;
console.log(age);
if (age < 50) {
    age += 10;
}
console.log(age);
// Functions
// A function with a value of void; meaning it does not return any value.
function calculateTax() {

}

// A function that returns <0>.
function calculateTaxOne() {
    return 0;
}

// Annotate functions for best practices
// A function that returns a number
function calculateTaxTwo(): number {
    return 1;
}

// A function that will trigger an error
function calculateTaxThree(): number {
    return "1";
}

// A function with unused parameter
function calculateTaxFour(income: number): number {
    return 1;
}

// A function with used parameter
function calculateTaxFive(income: number): number {
    return income * 1.5;
}

// A function with error for returning undefined object when the condition is false.
function calculateTaxSix(income: number): number {
    if (income > 50){
        return income * 1.5; 
    }
    // Return undefined if income < 50
}

// A function that fixes returning an undefined object from the previous example.
function calculateTaxSeven(income: number): number {
    if (income > 50) {
        return income * 1.5;
    }
    return income * 1.2;
}

// A function with two arguments, and returning one value.
function calculateTaxEight(income: number, taxYear: number): number {
    if (taxYear > 50) {
        return income * 1.5;
    }
    return income * 1.2;
}

// A function with a default value
function calculateTaxNine(income: number, taxYear = 2022): number {
    if (taxYear > 50) {
        return income * 1.5;
    }
    return income * 1.2;
}