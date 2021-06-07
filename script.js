
//following code came from W3Schools
//Take this out as part of your 3 Repls submitted
//I left it in there for learning's sake
/*
function carrotsMessage() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = "<b>" + "this is your gretting" + "</b>" + greeting;
}
*/


function printCarrotsMessageByIfElseIfElse() {
  var greeting;

  //3 not "3"
  var numOfCarrots = prompt("enter the number of numOfCarrots you would like");

  if (numOfCarrots == 1) 
  {
    greeting = "not hungry for that many Carrots?";
  } 
  else if (numOfCarrots < 3) 
  {
    greeting = "you like to eat that many Carrots!";
  } 
  //esle if ()
  //else if ()
  else 
  {
    greeting = "wow, you love to eat that many Carrots??";
  }

  document.getElementById("demoHeaderForCarrots").innerHTML = "Carrots Header";
 
/*
  "3"
  3
  */


  document.getElementById("demoParagraphForCarrots").innerHTML = greeting + " " + numOfCarrots.toString();

  /*
  numOfCarrots.toString();
  3.toString(); -> "3"
  */

  /*
  paragraph.stringvalue = value
  value =  greeting + " " + numOfCarrots.toString();

  greeting = "you like to eat that many carrots!" +
  " " + 
  numOfCookies.toString(); 3 -> "3"
  */
}



function printCarrotsMessageBySwitch() 
{
var greeting;
  //3

  //1
  numOfCarrots = prompt("enter the number of Carrots you would like");

//for my program:
//i used  == 1 and < 3 for conditions that meant something for the message i wanted to print out
//for your program, just pick conditions that you feel is relevant

//numOfC <- 88

switch (true) 
{//3
  case (numOfCarrots == 1):
    greeting = "not hungry for that many Carrots?";
    break;
  case (numOfCarrots < 3):
    greeting = "you like to eat that many Carrots!";
    break;
  default:
    greeting = "wow, you love to eat that many Carrots??";
}

//note, you can set the styling within the string, but for our programs, we will just
//rely on external CSS to do the styling
//document.getElementById("demo").innerHTML = "<b>" + "some text" + "</b>" + " " + greeting + " " //+ numOfCookies.toString();

document.getElementById("demoHeaderForCarrots").innerHTML = "Carrots Header";
document.getElementById("demoParagraphForCarrots").innerHTML = greeting + " " + numOfCarrots.toString()

//1 -> "1"
}


//following code came from W3Schools
//Take this out as part of your 3 Repls submitted
//I left it in there for learning's sake
/*
function myFunction() 
{

  
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
}
*/



function printAvgNumberOfCarrotsEatenPerDayByLoop() 
{
//each of the values in the array represent the number of carrots eaten
//per day

/*
var kk = 99;
var zz = 88;
*/

//array
var CarrotsEatenPerDay = [7];
var j = 0;


/*
7 DAYS
1 2 3 4 5 6 7
0 1 2 3 4 5 6

*/

//for your program, use either a while loop or do-while loop

//THIS COMMENT ADDED BY DB: ON JUNE 2ND: or a For loop


//DATA TYPES
//1) STRINGS: SET OF CHARACTERS
//2: NUMERICZS

//"34" <- PROMPT
//"34" -> 34: PARSEINT

//7 < 7: FALSE

while (j < 7)
{
  //2
  CarrotsEatenPerDay[j] = parseInt(prompt("enter the number of Carrots on this day you ate"));
  
  j = j + 1;
  //J = 1 + 1;
}

do 
{
  //carrotsEaternPerDay: array
  CarrotsEatenPerDay[j] = parseInt(prompt("enter the number of Carrots on this day you ate"));
  j++;
  //or do j += 1;
  //j = j + 1;
}
//7 < 7" false
while (j < 7);



var sumOfCarrotsEatenAcrossTheWeek = 0;
var i;

//7 times
//1st time: 0
//2nd time: 1
//....
//for (i = 0; i < carrotsEatenPerDay.length; i++) 
for (i = 0; i < CarrotsEatenPerDay.length; i++) 
{
  // sumOfCarrotsEatenAcrossTheWeek += cookiesEatenPerDay[0];
  //sumOfCarrotsEatenAcrossTheWeek = 2 + 34
  //sumOfCarrotsEatenAcrossTheWeek = sumOfCarrotsEatenAcrossTheWeek + carrotsEatenPerDay[0] 
  sumOfCarrotsEatenAcrossTheWeek += CarrotsEatenPerDay[i];
}

//calculate the average number of carrots eaten per day over the week
var avgNumberOfCarrotsEatenPerDayAcrossTheWeek = sumOfCarrotsEatenAcrossTheWeek/CarrotsEatenPerDay.length;


//print out the average number of cookies eaten per day over the week
/*
document.getElementById("demo").innerHTML = "<b>" + "you ate this number of carrot on average per day across the week" + "</b>" + " " + avgNumberOfCarrotsEatenPerDayAcrossTheWeek;
*/

document.getElementById("demoHeaderForCarrots").innerHTML = "Carrots Header";
document.getElementById("demoParagraphForCarrots").innerHTML = "you ate this number of Carrots on average per day across the week" + " " + avgNumberOfCarrotsEatenPerDayAcrossTheWeek;
}
