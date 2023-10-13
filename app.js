use strict'

let username = prompt('What is your name?');
console.log('Thank you visting, ' + username);

let age = prompt('How old are you? (15-100)');
let message; 

let email = prompt('Enter your email to get notified on new customs');
let message;

if(age <= 15){
    message = 'Cool, check out the new custom drops every Saturday';
} else if (age >=14 ){
    message = 'maybe next time';}

// look for the "<h2><script src="app.js"></script></h2>" on line 20 in the HTML, this is where the message will write too!
document.write('Hello ' + username + '! ' + message);