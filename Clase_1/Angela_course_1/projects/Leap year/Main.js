
function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 ===0) {
                return "Leap Year"
            } else {
                return "Not leap year"
            }
        } else {
            return "Leap Year"
        } 
    } else {
        return "Not Leap Year"
    }
}

var year = prompt("What is your year?");
alert (isLeap(year));