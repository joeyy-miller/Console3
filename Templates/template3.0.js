var programdrive=1;//Do not change program drive, it will make your program inoperable.

var programname="Program Name"; // Change to program name.
function program(data1)
{
    menu = 1;//0 = menu OFF 1 = menu ON
    switch (data1)
    {
        case "first":
            //Edit if you have a menu.
            if (menu == 1){
                consolewrite("First Page of Menu");
                consolewrite("--------------------------------------------------------------------------------------");
            }//define your menu. 
            //What the user will see when they run your software: Edit this.
            consolewrite("Welcome to this program.");
            break;
        case "exit":
            //This is what the user will see when they exit your software: Edit this.
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
            //When the command is not recognized
            consolewrite("That was not a command, silly!");
    }
}
//Copyright iJD Computers. Do not distribue. 2015.