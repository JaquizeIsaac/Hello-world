// Ask for the user's age
const age = prompt('How old are you?');

// Ask for the user's email
const email = prompt('What is your email address?');

// Ask for the user's name
const name = prompt('What is your name?');

// Display the collected information
if (age && email && name) {
  alert(`Thank you, ${name}! You are ${age} years old, and your email is ${email}.`);
} else {
  alert('You did not provide all the requested information.');
}

function askNumberOfPairs() {
    const numberOfPairs = prompt("How many pairs of shoes do you own?");
    const resultElement = document.getElementById("result");
    const errorMessageElement = document.getElementById("error-message");

    if (numberOfPairs === null || numberOfPairs === "") {
        errorMessageElement.textContent = "Please enter a valid number of pairs.";
        resultElement.textContent = "";
    } else if (isNaN(numberOfPairs) || Number(numberOfPairs) < 0) {
        errorMessageElement.textContent = "Please enter a valid positive number of pairs.";
        resultElement.textContent = "";
    }
