const display = document.getElementById("display");

function appendToDisplay(intput){
    display.value += intput;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Syntax Error";
    }
}