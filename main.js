// CALCULATOR PROGRAM

const display = document.getElementById("display");

let equation = "";

// Edit the equation vs display
function appendToDisplay(input){
  if (input == "*") {
    display.value += "×";
    equation += "*";
  }
  else if (input == "/") {
    display.value += "÷";
    equation += "/";
  }
  else if(input == "^"){
    display.value += "^";
    equation += "**";
  }
  else {
    display.value += input;
    equation += input;
  }
  
}

function ClearDisplay(){
  display.value = "";
  equation = "";
}
        
function calculate(){
  try{
    equation = eval(equation);
    display.value = equation;
  }
  catch(error){
    display.value = "Error";
    equation = "";
  }
}
function special(){
  display.value = display.value.slice(0, -1)
  equation = equation.slice(0, -1)
}
  
