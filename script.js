
questions = [
  "Does Framework have a new CPU yet?",
  "Do we know when Framework will be releasing new mainboards?",
];

answers = [
  "Yep",
  "Yes",
  "Yeah"
];

window.onload = function () {
  document.querySelector("#question").innerHTML = questions[Math.floor(Math.random() * questions.length)];
  document.querySelector("#answer").innerHTML = `${answers[Math.floor(Math.random() * answers.length)]}!`;
};