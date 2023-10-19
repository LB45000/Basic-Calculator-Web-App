function GiveMeResult() {
    let previous_operand = Number(document.getElementById("previous-operand").value);
    let next_previous = Number(document.getElementById("next-previous").value);
    let resultSpan = document.getElementById("result");
    let operator = document.querySelector("select").value;

    // Perform the selected operation
    let resultNum = null;
    let comparisonResult = false;
    let operandTypes = "";

    switch (operator) {
        case '+':
            resultNum = previous_operand + next_previous;
            resultSpan.innerHTML = resultNum;
            break;
        case '-':
            resultNum = previous_operand - next_previous;
            resultSpan.innerHTML = resultNum;
            break;
        case '*':
            resultNum = previous_operand * next_previous;
            resultSpan.innerHTML = resultNum;
            break;
        case '/':
            if (next_previous !== 0) {
                resultNum = previous_operand / next_previous;
                resultSpan.innerHTML = resultNum;
            } else {
                resultSpan.innerHTML = "Cannot divide by zero";
            }
            break;
        case '**':
            resultNum = Math.pow(previous_operand, next_previous);
            resultSpan.innerHTML = resultNum;
            break;
        case '%':
            if (next_previous !== 0) {
                resultNum = previous_operand % next_previous;
                resultSpan.innerHTML = resultNum;
            } else {
                resultSpan.innerHTML = "Cannot calculate modulo by zero";
            }
            break;
        case '>':
            comparisonResult = previous_operand > next_previous;
            operandTypes = `Operand Types: (${typeof previous_operand}, ${typeof next_previous})`;
            resultSpan.innerHTML = comparisonResult;
            break;
        case '<':
            comparisonResult = previous_operand < next_previous;
            operandTypes = `Operand Types: (${typeof previous_operand}, ${typeof next_previous})`;
            resultSpan.innerHTML = comparisonResult;
            break;
        case '!=':
            comparisonResult = previous_operand !== next_previous;
            operandTypes = `Operand Types: (${typeof previous_operand}, ${typeof next_previous})`;
            resultSpan.innerHTML = comparisonResult;
            break;
    }

    // Provide feedback for each specific operation
    document.getElementById("addition").innerHTML = `Addition: ${previous_operand} + ${next_previous} = ${previous_operand + next_previous}`;
    document.getElementById("subtraction").innerHTML = `Subtraction: ${previous_operand} - ${next_previous} = ${previous_operand - next_previous}`;
    document.getElementById("multiplication").innerHTML = `Multiplication: ${previous_operand} * ${next_previous} = ${previous_operand * next_previous}`;
    document.getElementById("division").innerHTML = `Division: ${previous_operand} / ${next_previous} = ${resultNum}`;
    document.getElementById("exponentiation").innerHTML = `Exponentiation: ${previous_operand} ^ ${next_previous} = ${resultNum}`;
    document.getElementById("modulo").innerHTML = `Modulo: ${previous_operand} % ${next_previous} = ${resultNum}`;
    document.getElementById("comparison").innerHTML = `Comparison: ${previous_operand} ${operator} ${next_previous} = ${comparisonResult}`;
    document.getElementById("operand-types").innerHTML = operandTypes;
}
