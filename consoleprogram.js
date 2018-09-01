var programdrive=1;//Do not change program drive, it will make your program inoperable.
var programname="jMATH"; // Change to program name.
var step = 0; //which step of the process the user is at 0 = first, 1 = sign, 2 = second floating.
var first = 0.0;
var second = 0.0;
var type = 0; //which type of math. 1 = ADDITION. 2 = SUBTRACTION. 3 = MULTIPLICAITON. 4 = DIVISION.

function program(data1)
{
    menu = 1;
    switch (data1)
    {
        case "first":
            //What the user will see when they run your software: Edit this.
            writeMenu("jMATH v2.1","--------------------------------------------------------------------------------------");
            consolewrite("");
            consolewrite("Welcome to jMATH type the first floating point integer.");
            break;
        case "repeat":
            consolewrite("Enter another calculation...");
            break;
        case "reset":
            console("clear");
            consolewrite("Operation reset.")
            program("frist");
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
                    writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first ,"--------------------------------------------------------------------------------------");                    step = 1;
                    consolewrite("Enter operation. (+, -, *, /)");
                    break;
                case 1:
                    switch (document.getElementById("consoleinput").value) {
                        case "+":
                            type = 1;
                            consolewrite("+");
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " + " ,"--------------------------------------------------------------------------------------");                    step = 1;
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        case "-":
                            type = 2;
                            consolewrite("-");
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " - " ,"--------------------------------------------------------------------------------------");                    step = 1;
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        case "*":
                            type = 3;
                            consolewrite("*");
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " * " ,"--------------------------------------------------------------------------------------");                    step = 1;
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        case "/":
                            type = 4;
                            consolewrite("/");
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " / " ,"--------------------------------------------------------------------------------------");                    step = 1;
                            consolewrite("Enter the second floating point integer.");
                            step = 2;
                            break;
                        default:
                            consolewrite("Unrecognized operation.");
                    }
                    break;
                case 2:
                    second = document.getElementById("consoleinput").value;
                    first = parseFloat(first);
                    second = parseFloat(second);
                    switch (type){
                        case 1:
                            consolewrite(second);
                            result = first + second;
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " + " + second + " = " + result,"--------------------------------------------------------------------------------------");                    step = 1;
                            break;
                        case 2:
                            consolewrite(second);
                            result = first - second;
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " - " + second + " = " + result ,"--------------------------------------------------------------------------------------");                    step = 1;
                            break;
                        case 3:
                            consolewrite(second);
                            result = first * second;
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " * " + second + " = " + result ,"--------------------------------------------------------------------------------------");                    step = 1;
                            break;
                        case 4:
                            consolewrite(second);
                            result = first / second;
                            writeMenu("jMATH v2.1&nbsp;&nbsp;&nbsp;&nbsp; " + first + " / " + second + " = " + result ,"--------------------------------------------------------------------------------------");                    step = 1;
                            break;
                    }
                    program("repeat");
                    step = 0;
                    break;
            }
    }
}
//Copyright iJD Computers. Do not distribue. 2015.