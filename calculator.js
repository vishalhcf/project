function inputFun(val) // val is parameter
{
    document.getElementById("result").value += val;  
   // The value property sets or returns the value of the value attribute of a text field.
    // The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value;
    let y = eval(x); // The eval() function evaluates JavaScript code represented as a string.
    document.getElementById("result").value = y;
}
  
//function that clear the display
function clr()
{
    document.getElementById("result").value = ""; 
}