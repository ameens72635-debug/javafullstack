let amount = 1200;

if ((amount > 500) && (amount % 500 === 0)) {
    console.log("You can withdraw " + amount);
    console.log(amount / 500 + " notes of 500");
} else if ((amount > 200) && (amount % 200 === 0)) {
    console.log("You can withdraw " + amount);
    console.log(amount / 200 + " notes of 200");
} else if ((amount > 100) && (amount % 100 === 0)) {
    console.log("You can withdraw " + amount);
    console.log(amount / 100 + " notes of 100");
} else {
    console.log("Invalid amount. Please enter a valid amount.");
}
