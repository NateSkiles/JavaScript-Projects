//  OBJECT TO TRACK ENTERED VALUES
const Calculator = {
    Display_Value:'0',
    First_Operand: null,    // Holds the first operand for any expression
    Wait_Second_Operand:false,      // Check if second operand has input
    operator: null,     // Holds operator
};

// MODIFY VALUES WITH BUTTON CLICK
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {         // Check if Wait_Second_Operand is true and set.. 
        Calculator.Display_Value = digit;       // Display_Value to the key that was clicked
        Calculator.Wait_Second_Operand = false;
    } else {        // Overwrite Display_Value if current value is 0, else add on to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// DECIMAL POINTS
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;    // If Display_Value does not contain a decimal point, we..
    }                                       // will add one.
}

// OPERATORS
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // Convert current displayed number, to a number when operator key is pressed
    // Store result in Calculator.First_Operand if it doesn't exist already.
    const Value_of_Input = parseFloat(Display_Value);
    // Check if operator already exists and if Wait_Second_Operand is true..
    // then updates operator and exits function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        // If operator exists, property lookup is performed for the operator..
        // in the Perform_Calculation object and the function that matches the operator is executed
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input); // Add fixed amount of numbers after decimal
        result = Number(result).toFixed(9)  // Remove trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);

    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { // Updates the screen with the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();   // Monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => { // represents the element that was clicked
    const { target } = event;   // If the element that was clicked isn't a button, exit function
    if (!target.matches('button')) {   
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {   //Ensure AC clears numbers from the Calculator
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
}) 

























