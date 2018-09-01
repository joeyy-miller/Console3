var programdrive=1;//Do not change program drive, it will make your program inoperable.

var programname="jMATH"; // Change to program name.
var step = 0; //which step of the process the user is at 0 = first, 1 = sign, 2 = second floating.
var first = 0;
var second = 0;
var type = 0; //which type of math. 1 = ADDITION. 2 = SUBTRACTION. 3 = MULTIPLICAITON. 4 = DIVISION.

function program(data1)
{
    menu = 1;//0 = menu OFF 1 = menu ON
    switch (data1)
    {
        case "first":
            if (menu == 1){
                consolewrite("First Page of Menu");
                consolewrite("--------------------------------------------------------------------------------------");
            //What the user will see when they run your software: Edit this.
            consolewrite("Welcome to jMATH type the first floating point integer.");
            break;
        case "recursion":
            consolewrite("jMATH: enter another ")
    }
}
function programuser()
{
    switch (document.getElementById("consoleinput").value)
    {
        //Each case is a command by the user. 
        case "":
            //This is the response: Edit this.
            consolewrite("No input detected!");
            break;
        default:
            switch (step) {
                case 0:
                    first = document.getElementById("consoleinput").value;
                    consolewrite(first);
                    step = 1;
                    consolewrite("Enter operation. (+, -, *, /)");
                    break;
                case 1:
                    switch (document.getElementById("consoleinput").value) {
                        case "+":
                            type = 1;
                            consolewrite(first + " +");
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        case "-":
                            type = 2;
                            consolewrite(first + " -");
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        case "*":
                            type = 3;
                            consolewrite(first + " *");
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        case "/":
                            type = 4;
                            consolewrite(first + " /");
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        default:
                            consolewrite("Unrecognized operation.");
                    }
                    break;
                case 2:
                    second = document.getElementById("consoleinput").value;
                    first = parseInt(first);
                    second = parseInt(second);
                    switch (type){
                        case 1:
                            result = first + second;
                            consolewrite(first + " + " + second + " = " + result);
                            break;
                        case 2:
                            result = first - second;
                            consolewrite(first + " - " + second + " = " + result);
                            break;
                        case 3:
                            result = first * second;
                            consolewrite(first + " * " + second + " = " + result);
                            break;
                        case 4:
                            result = first / second;
                            consolewrite(first + " / " + second + " = " + result);
                            break;
                    }
                    program("first");
                    step = 0;
                    break;
            }
    }
}
//Copyright iJD Computers. Do not distribue. 2015.