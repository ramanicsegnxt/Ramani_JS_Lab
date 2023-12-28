class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }

  getQuestionByIndex() {
    return this.questions[this.questionIndex];
  }

  checkOptionWithAnswer(answer) {
    if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }
}

class Question {
  constructor(questionText, choices, answer) {
    this.questionText = questionText;
    this.answer = answer;
    this.choices = choices;
  }

  isCorrectAnswer(userAnswer) {
    return this.answer === userAnswer;
  }
}

const showProgress = () => {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

const showScores = () => {
  var resultHtml = "<h1 style={text-align: center;}>Result</h1>";
  resultHtml += `<h2> Your score: ${quiz.score}<br>
  And Mark Percentage is: ${(quiz.score / questions.length) * 100}%</h2>`;
  var element = document.getElementById("quiz");
  element.innerHTML = resultHtml;
};

const loadQuestions = () => {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionByIndex().questionText;

    // show options
    var choices = quiz.getQuestionByIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      handleOptionButton("btn" + i, choices[i]);
    }

    showProgress();
  }
};

const handleOptionButton = (id, choice) => {
  var button = document.getElementById(id);
  button.onclick = () => {
    quiz.checkOptionWithAnswer(choice);
    loadQuestions();
  };
};

const questions = [
  new Question(
    "JavaScript supports",
    ["Functions", "XHTML", "CSS", "HTML"],
    "Functions"
  ),
  new Question(
    "Which language is used for styling web pages?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "Which is not a JavaScript Framework?",
    ["Python Script", "JQuery", "Django", "NodeJS"],
    "Django"
  ),
  new Question(
    "Which is used for Connect To Database?",
    ["PHP", "HTML", "JS", "All"],
    "PHP"
  ),
  new Question(
    "JavaScript is a ",
    ["Language", "Programming Language", "Development", "All"],
    "Programming Language"
  ),
];

const quiz = new Quiz(questions);

loadQuestions();
