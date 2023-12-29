/* Random

var n = Math.random();
 */


/* var n = Math.random();
Math.floor(n * 6) + 1;
console.log(n) */

var name1 = prompt("Enter your name");
var name2 = prompt("What's your lover's name?");

var n = Math.random() * 100;
loveScore = Math.floor(n) + 1;
console.log(loveScore);

if (loveScore > 70) {
    alert("Your love score is " + loveScore + " %, You love each other like kanye loves kanye");
} 

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%" );

} else (loveScore <= 30); {
    alert("Your love score is " + loveScore + "%" + "You go together like oil and water");
}


/* === Is equal to

!== Is not equal to

> greater than 

< lesser than 

>= greater or equal to

<= lesser or equal to 

&& and 

|| or 

! */

/* alert("The love compatibility between " + name1 + " and " + name2 + " is " + loveScore + "%")
 */
