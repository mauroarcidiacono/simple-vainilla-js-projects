//The Calculator class handles the logic of the calculator.
class Calculator { 

    /* Constructor of the class. 
       Variable res is the string displayed in the calculator viewer. 
    */
    constructor(res) {
        this.res = res;
    }

    /*
    Method that appends a number to the string displayed in the calculator viewer. 
    @param  n       string 
    */
    appendNumber(n) {
        this.res = this.res + n;
    }

    /*
    Method that appends an operator to the string displayed in the calculator viewer. 
    @param  op       string 
    */
    appendOperation(op) {
        if (!isNaN(this.res[this.res.length - 1])) {
            this.res = this.res + op;
        }
    }

    /*
    Method that computes the requested operation. 
    */
    compute() {
        let op = this.res.match(/\*|\+|\-|\//)[0];
        let arrNumbers = this.res.split(op);
        let a = parseInt(arrNumbers[0], 2);
        let b = parseInt(arrNumbers[1], 2);
        let result;

        switch(op) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
            default:
                alert("Error");
        }
        
        this.res = result.toString(2);
    }

    /*
    Method that clears the calculator viewer. 
    */
    clear() {
        document.getElementById("res").innerText = "";
        this.res = "";
    }

    /*
    Method that updates the calculator viewer.
    */
    updateDisplay() {
        document.getElementById("res").innerText = this.res;
    }
}


/* Variables
res                 string in the calculator viewer.
num                 numbers (1 and 0).
clear               the letter C.
equal               the symbol "=".
operation           possible operations (addition, subtraction, multiplication and division).
*/
let res = document.getElementById("res").innerText;
let num = document.getElementsByClassName("number");
let clear = document.getElementById("btnClr"); 
let equal = document.getElementById("btnEql"); 
let operation = document.getElementsByClassName("operation");

// Create the calculator object.
let calculator = new Calculator(res);

// For each number that is clicked, append it and update the display.
[...num].forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

// For each operation that is clicked, append it and update the display.
[...operation].forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.appendOperation(operation.innerText);
        calculator.updateDisplay();
    })
});

// Compute the calculation when the equals sign is clicked. 
equal.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

// Clear the calculator viewer when C is pressed. 
clear.addEventListener('click', () => {
    calculator.clear();
})