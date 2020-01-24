/**
 * Initialize the app
 */
function init() {
  displayQuestions();
}
init();

/**
 * Display Questions.
 */

function displayQuestions() {
  // Your Questions
  var questions = [
    "What is your name?",
    "How old are you?",
    "What's your major?",
    "How many semesters you have taken?"
  ];

  // Store the values
  var userAnswers = [];

  //Get the question tag from HTML.
  var question = document.getElementById("question");
  var questionsAnswered = 0;
  question.innerHTML = questions[questionsAnswered];

  // Get the button to count which question the user has responded.
  var nextBttn = document.getElementById("nextBttn");
  nextBttn.addEventListener("click", event => {
    var getAnswer = document.getElementById("answer").value;
    event.preventDefault();

    if (getAnswer === "") {
      alert("Please. enter a value.");
    } else {
      questionsAnswered++;
      document.getElementById("answer").value = "";

      // Store the values int he associative array
      if (questionsAnswered < questions.length + 1) {
        userAnswers[questionsAnswered - 1] = getAnswer;
      }

      if (questionsAnswered < questions.length) {
        question.innerHTML = questions[questionsAnswered];
      } else {
        //function to display the anwers
        displayAndwers(userAnswers, questions);
      }
    }
  });
}

function displayAndwers(answers, questions) {
  // Disable the button
  var nextBttn = document.getElementById("nextBttn");
  nextBttn.disabled = true;
  nextBttn.innerHTML = "See the results below";

  // Append title for the answers.
  var node = document.createElement("h3");
  var textnode = document.createTextNode("Your Answers");
  node.appendChild(textnode);
  document.getElementById("formContainer").appendChild(node);

  var counter = 0;
  // //Append the questions and anwers.
  for (let index = 0; index < answers.length; index++) {
    counter++;
    // Append the question
    var nodeQuestion = document.createElement("p");
    var questionNode = document.createTextNode("Question: " + questions[index]);
    nodeQuestion.appendChild(questionNode);
    document.getElementById("formContainer").appendChild(nodeQuestion);

    // Append the answer
    var nodeAns = document.createElement("p");
    var answerNode = document.createTextNode("Answer: " + answers[index]);
    nodeAns.appendChild(answerNode);
    document.getElementById("formContainer").appendChild(nodeAns);
  }

  if (counter === answers.length) {
    // Append title for the answers.
    var node = document.createElement("button");
    node.id = "restartBttn";
    node.className = "nextBttn";
    var textnode = document.createTextNode("Restart");
    node.appendChild(textnode);
    document.getElementById("formContainer").appendChild(node);
    // Listen to the restart function
    restart();
  }
}

function restart() {
  var restart = document.getElementById("restartBttn");
  restart.addEventListener("click", () => {});
}
