`use strict`; 
console.log(`app is running`);


// question 0
let userName = prompt(`What is your name?`); // String data type
if (typeof(userName) === `string`) {
  userName = userName.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

  alert(`Hi ${userName}! That is a cool name. Now, I have some questions for you!`);


// console.log(`That's a cool name`);

// question 1
let name = prompt(`Is my name Mathew?`); // String data type
if (typeof(name) === `string`) {
  name = name.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (name === `y`) {
  alert(`Correct, my name is Mathew`);
} else if (name === `yes`) {
  alert(`Correct, my name is Mathew`);
} else {
  alert(`Incorrect, my name is Mathew`);
}

// console.log(`My name is Mathew`);


// question 2
let school = prompt(`Did I go to Arizona State University`); // String data type
if (typeof(school) === `string`) {
  school = school.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (school === `y`) {
  alert(`Correct, I went to Arizona State University`);
} else if (name === 'yes') {
  alert(`Correct, I went to Arizona State University`);
} else {
  alert(`Incorrect, I went to Arizona State University`);
}

// console.log(`I went to Arizona State University`);


// question 3
let military = prompt(`Am I in the military?`); // String data type
if (typeof(military) === `string`) {
  military = military.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (military === `y`) {
  alert(`Correct, I am in the Army National Guard`);
} else if (military === `yes`) {
  alert(`Correct, I am in the Army National Guard`);
} else {
  alert(`Incorrect, I am in the Army National Guard`);
}

// console.log(`I am in the Army National Guard`);


// question 4
let job = prompt(`Was I ever an astronaut?`); // String data type
if (typeof(job) === `string`) {
  job = job.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (job === `y`) {
  alert(`Incorrect, I was never an astronaut. I worked in insurance and real estate`);
} else if (job === `yes`) {
  alert(`Incorrect, I was never an astronaut. I worked in insurance and real estate`);
} else {
  alert(`Correct, I was never an astronaut. I worked in insurance and real estate`);
}

// console.log(`I was never an astronaut. I worked in insurance and real estate`);


// question 5
let kids = prompt(`Do I have any kids?`); // String data type
if (typeof(kids) === `string`) {
  kids = kids.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (kids === `y`) {
  alert(`Correct, I have 2 kids.  A 9 year old son and 5 year old daughter.`);
} else if (kids === `yes`) {
  alert(`Correct, I have 2 kids.  A 9 year old son and 5 year old daughter.`);
} else {
  alert(`Correct, I have 2 kids.  A 9 year old son and 5 year old daughter.`);
}

alert(`Hi ${userName}, It is a pleasure to meet you.  My name is Mathew. I graduated from Arizona State University.  I worked in insurance and real estate before coming to Code Fellows. I have 2 kids, a 9 year old son and 5 year old daughter. I'm looking forward to going on this coding journey with you!`);
