
questions = [
  "Does Framework have a new CPU yet?",
  "Do we know when Framework will be releasing new mainboards?",
  "Are there any available Ryzen CPUs for the Framework laptop?"
];

answers = [
  "No",
  "Nope",
  "Nah",
  "No way",
  "Nuh uh"
];

window.onload = function () {
  document.querySelector("#question").innerHTML = questions[Math.floor(Math.random() * questions.length)];
  document.querySelector("#answer").innerHTML = answers[Math.floor(Math.random() * answers.length)];
};