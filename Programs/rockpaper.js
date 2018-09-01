var programname="Rock, Paper, Scissors XL";
var programdrive=1;//Do not change program drive, it will make your program inoperable.
var cpu=0;
var player=0;
var score=0;
var cpuscore=0;
//1== ROCK 2==PAPER 3=SCISSORS
function program(data1)
{
	switch (data1)
	{
		case "first":
			//What the user will see when they run your software: Edit this
			consolewrite("Welcome to Rock, Paper, Scissors XL!");
			consolewrite("Enter {rock}{paper} or {scissors} to fight the CPU!");
			consolewrite("{score} to see your score! {cpu score} to see the CPU's score!");
			break;
		case "exit":
			//This is what the user will see when they exit your software: Edit this
	}
}
function programuser()
{
	switch (document.getElementById("consoleinput").value)
	{
		//Each case is a command by the user. 
		case "rock":
			player=1;
			programcheck();
			break;
		case "paper":
			player=2;
			programcheck();
			break;
		case "scissors":
			player=3;
			programcheck();
			break;
		case "score":
			consolewrite("Your score is "+score);
			break;
		case "cpu score":
			consolewrite("The CPU's score is "+cpuscore);
			break;
		case "":
			//You may change this
			consolewrite("No input detected!");
			break;
		default:
			//When the command is not recognized
			consolewrite("That was not a command, silly!");
	}
}
function programcheck()
{
	cpu=Math.floor((Math.random()*3)+1);
	switch (player)
	{
		//1== ROCK 2==PAPER 3=SCISSORS
		case 1:
			if (cpu == 1)
			{
				consolewrite("You have tied! CPU used rock!");
			}
			if (cpu == 2)
			{
				consolewrite("You have won! CPU used paper! Score +1");
				score++;
			}
			if (cpu == 3)
			{
				consolewrite("You have lost! CPU used scissors! Score -1");
				cpuscore++;
			}
			break;
		case 2:
			if (cpu == 1)
			{
				consolewrite("You have won! CPU used rock! Score +1");
				score++;
			}
			if (cpu == 2)
			{
				consolewrite("You have tied! CPU used paper!");
			}
			if (cpu == 3)
			{
				consolewrite("You have lost! CPU used scissors! Score -1");
				cpuscore++;
			}
			break;
		case 3:
			if (cpu == 1)
			{
				consolewrite("You have lost! CPU used rock! Score -1");
				cpuscore++;
			}
			if (cpu == 2)
			{
				consolewrite("You have won! CPU used paper! Score +1");
				score++
			}
			if (cpu == 3)
			{
				consolewrite("You have tied! CPU used scissors!");
			}
			break;
	}
}