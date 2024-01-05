var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];


var guest = prompt ("What is your name")

if (guestList.includes(guest)) {
    alert (`Welcome ${guest}`);
} else {
    alert (`You are not in the list ${guest}`);
}

console.log(guestList[0])