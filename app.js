`use strict`;
console.log(`app is running`);
let totalScore = 0;

// question 0
let userName = prompt(`What is your name?`);
if (typeof (userName) === `string`) {
  userName = userName.toLowerCase(); 
}

alert(`Hi ${userName}! That is a cool name. Now, I have some questions for you!`);



// question 1
let name = prompt(`Is my name Mathew?`);
if (typeof (name) === `string`) {
  name = name.toLowerCase();
}

if (name === `y`) {
  totalScore += 1;
  alert(`Correct, my name is Mathew`);
} else if (name === `yes`) {
  totalScore += 1;
  alert(`Correct, my name is Mathew`);
} else {
  alert(`Incorrect, my name is Mathew`);
}



// question 2
let school = prompt(`Did I go to Arizona State University`);
if (typeof (school) === `string`) {
  school = school.toLowerCase();
}

if (school === `y`) {
  totalScore += 1;
  alert(`Correct, I went to Arizona State University`);
} else if (name === 'yes') {
  totalScore += 1;
  alert(`Correct, I went to Arizona State University`);
} else {
  alert(`Incorrect, I went to Arizona State University`);
}



// question 3
let military = prompt(`Am I in the military?`);
if (typeof (military) === `string`) {
  military = military.toLowerCase();
}

if (military === `y`) {
  totalScore += 1;
  alert(`Correct, I am in the Army National Guard`);
} else if (military === `yes`) {
  totalScore += 1;
  alert(`Correct, I am in the Army National Guard`);
} else {
  alert(`Incorrect, I am in the Army National Guard`);
}



// question 4
let job = prompt(`Was I ever an astronaut?`);
if (typeof (job) === `string`) {
  job = job.toLowerCase();
}

if (job === `y`) {
  alert(`Incorrect, I was never an astronaut. I worked in insurance and real estate`);
} else if (job === `yes`) {
  alert(`Incorrect, I was never an astronaut. I worked in insurance and real estate`);
} else {
  totalScore += 1;
  alert(`Correct, I was never an astronaut. I worked in insurance and real estate`);
}


// question 5
let kids = prompt(`Do I have any kids?`);
if (typeof (kids) === `string`) {
  kids = kids.toLowerCase();
}

if (kids === `y`) {
  totalScore += 1;
  alert(`Correct, I have 2 kids.  A 9 year old son and 5 year old daughter.`);
} else if (kids === `yes`) {
  totalScore += 1;
  alert(`Correct, I have 2 kids.  A 9 year old son and 5 year old daughter.`);
} else {
  alert(`Incorrect, I have 2 kids.  A 9 year old son and 5 year old daughter.`);
}

alert(`Hi ${userName}, It is a pleasure to meet you.  My name is Mathew. I graduated from Arizona State University.  I worked in insurance and real estate before coming to Code Fellows. I have 2 kids, a 9 year old son and 5 year old daughter. I'm looking forward to going on this coding journey with you! So far you have answered ${totalScore} questions right.  Keep going!`);



// question 6
let age;
let response;

for (let i = 0; i < 4; i++) {
  age = Number(prompt('How old and I?'));
  if (age > 38) {
    alert(`no you are too high`);
  } else if (age < 38) {
    alert(`no you are too low`);
  } else {
    break;
  }

}
if (age === 38) {
  totalScore += 1;
  alert(`YES, I am 38 years old!`);
} else {
  alert(`You guessed too many times. I am 38 years old.`);
}

// question 7
let correctColor = ['blue', 'green', 'purple'];
let responseColor;

for (let i = 0; i < 6; i++) {
  let correct = false;
  responseColor = prompt('What is my favorite color?');
  for (let color of correctColor) {
    if (responseColor.toLowerCase() === color) {
      totalScore += 1;
      alert(`You are correct! Good job, you got ${totalScore} out of 7 questions right!`);
      correct = true;
      break;
    } 
  }
  
  if (correct === false) {
    alert('Incorrect');
  } else {
    break;
  }
}
