/* var tweet = prompt("Enter your tweet");
var tweetCount = tweet.length;

var tweetUnder140 = tweet.slice(0,140)

alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters left");
alert(tweetUnder140) */


//you have written characters, you have characters left.

/* alert(prompt("Compose your tweet: ").slice(0,140)) */

/* word.toUpperCase(); 
    name = name.toUpperCase();
    name = name.toLowerCase();
*/


/* var Name = prompt("What's your name?");
/*     alert(Name.toUpperCase()); */

/*  var Name1 = (Name.slice(0,1).toUpperCase());
    var Name2 = (Name.slice(1,Name.length).toLowerCase()); */

/* alert("Hello " + Name1 + Name2 + " , how are you doing? "); 
 */

/* Numbers

Sum
var a = 1 + 2;

Substraction
var b = 10 - 2;

Multiplication
var c = 3 * 3;

Division
var d = 6 / 2; 

Modulo
var e = 9 % 6; */

/* var dogAge = prompt("How old is your dog?")
var humanAge = ((dogAge - 2) * 4 ) + 21

alert("Your dog is " + humanAge + " human years old") */

/* var ageInYears = parseInt(prompt("How old are you?"));
var yearsTo90 = 90 - ageInYears 

var ageInMonths = Math.floor(ageInYears * 12);

var ageInDays = Math.floor(ageInYears * 365);

alert("Your age is " + ageInYears + " Years" + ", or " + ageInMonths + " Months, or " + ageInDays + " Days");

alert("You are " + yearsTo90 + " years away from 90");
alert(" You are " + ((90*12) - ageInMonths) + " months away from 90")
alert(" You are " + ((90*365) - ageInDays) + " days away from 90")
 */

/* BMI Calculator */
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8)
alert("Your BMI is " + bmi);

