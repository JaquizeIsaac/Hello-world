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
document.addEventListener("DOMContentLoaded", function () {
    const jordanCountInput = document.getElementById("jordanCount");
    const submitButton = document.getElementById("submitButton");
    const output = document.getElementById("output");

    submitButton.addEventListener("click", function () {
        const jordanCount = parseInt(jordanCountInput.value);

        if (isValidCount(jordanCount)) {
            output.innerHTML = ""; // Clear any previous content
            displayCustomJordans(jordanCount);
        } else {
            output.innerHTML = "Please enter a valid positive number.";
        }
    });

    function isValidCount(count) {
        return !isNaN(count) && count > 0;
    }

    function displayCustomJordans(count) {
        output.innerHTML = ""; // Clear previous content

        for (let i = 0; i < count; i++) {
            const jordanImage = document.createElement("img");
            jordanImage.src = "jordan-image.jpg";
            jordanImage.alt = "Custom Jordan Image";
            output.appendChild(jordanImage);
        }
    }
});

function timeOfDay() {
    let time = prompt('How many custom shoes you have?'); // 5;
    let message = '';

    if (time <= 5) {
        message = 'Share your customs!';
    } else if (time <= 4) {
        message = 'Youre off to a great start on this wonderful journey.';
    } else {
        message = "Collect more customs.";
    }

    return message;
}

function displayRating() {

    let output = '';
    let rating = prompt('scale of 1-50, how many shoes is in your collection?');
    for(let i = 0; i < rating; i++){
        output += "<img class='Custom VL Jordan 1.s' src='https://images.squarespace-cdn.com/content/v1/6051270aed61351688b8d6a4/1655762860080-OAF4O6R2K0Q8J7QW1BH8/IMG_2954.jpg?format=1500w/>";
    }

    return document.write(output);
}

guessANumber();
