const loginView = document.getElementById("loginView");
const loadingView = document.getElementById("loadingView");
const homeView = document.getElementById("homeView");
const name = document.getElementById("name");
const loginBtn = document.getElementById("loginBtn");
const username = document.getElementById("username");
const playHTML = document.getElementById("playHtml");
const playCSS = document.getElementById("playCss");
const questionsViewJ = document.getElementById("questionsViewJS");
const questionsViewC = document.getElementById("questionsViewCSS");

const answersBoxJS1 = document.getElementById("answer-js-1");
const answersBoxJS2 = document.getElementById("answer-js-2");
const answersBoxJS3 = document.getElementById("answer-js-3");

const answerJS11 = document.getElementById("answer-js-1-1");
const answerJS12 = document.getElementById("answer-js-1-2");
const answerJS13 = document.getElementById("answer-js-1-3");
const answerJS14 = document.getElementById("answer-js-1-4");

const answerJS21 = document.getElementById("answer-js-2-1");
const answerJS22 = document.getElementById("answer-js-2-2");
const answerJS23 = document.getElementById("answer-js-2-3");
const answerJS24 = document.getElementById("answer-js-2-4");

const answerJS31 = document.getElementById("answer-js-3-1");
const answerJS32 = document.getElementById("answer-js-3-2");
const answerJS33 = document.getElementById("answer-js-3-3");
const answerJS34 = document.getElementById("answer-js-3-4");

const answersBoxCSS1 = document.getElementById("answer-css-1");
const answersBoxCSS2 = document.getElementById("answer-css-2");
const answersBoxCSS3 = document.getElementById("answer-css-3");

const answerCSS11 = document.getElementById("answer-css-1-1");
const answerCSS12 = document.getElementById("answer-css-1-2");
const answerCSS13 = document.getElementById("answer-css-1-3");
const answerCSS14 = document.getElementById("answer-css-1-4");

const answerCSS21 = document.getElementById("answer-css-2-1");
const answerCSS22 = document.getElementById("answer-css-2-2");
const answerCSS23 = document.getElementById("answer-css-2-3");
const answerCSS24 = document.getElementById("answer-css-2-4");

const answerCSS31 = document.getElementById("answer-css-3-1");
const answerCSS32 = document.getElementById("answer-css-3-2");
const answerCSS33 = document.getElementById("answer-css-3-3");
const answerCSS34 = document.getElementById("answer-css-3-4");

const winView = document.getElementById("win-view");
const loseView = document.getElementById("lose-view");
const playAgain = document.getElementById("play-again");

const numRightAnswersBox = document.getElementById("num-right-ans");
const goalBox = document.getElementById("goal-box");

let numRightAnswers = 0;

const goHomeView = function() {
  numRightAnswers = 0;
  winView.classList.add("hide");
  loseView.classList.add("hide");
  playAgain.classList.add("hide");
  questionsViewJ.classList.add("hide");
  questionsViewC.classList.add("hide");
  goalBox.classList.add("hide");
  username.innerHTML = name.value;
  loadingView.classList.add("hide");
  homeView.classList.remove("hide");
};
const login = function() {
  if (name.value === "") {
    window.alert("Please enter your name"); // TODO change this
  } else {
    loginView.classList.add("hide");
    loadingView.classList.remove("hide");
    setTimeout(goHomeView, 1000); // TODO work with loading bar
  }
};

const openQuiz = function(questionSet) {
  homeView.classList.add("hide");
  if (questionSet == "js") {
    questionsViewJ.classList.remove("hide");
  } else {
    questionsViewC.classList.remove("hide");
  }
};

const checkAnswer = function() {
  // ideally if the right answer was selected is right answer?
};

const rightAnswer = function(rightBox, currAnswersBox, nextAnswersBox) {
  numRightAnswers += 1; // counter should not increase bigger than 10
  numRightAnswersBox.innerHTML = `${numRightAnswers} /3`;
  rightBox.style.background = "green";
  // show animation this was a right answer!
  // show new answer options
  currAnswersBox.classList.add("hide");
  currAnswersBox.classList.remove("card-question");
  if (nextAnswersBox !== "final") {
    nextAnswersBox.classList.add("card-question");
    nextAnswersBox.classList.remove("hide");
  } else {
    winView.classList.remove("hide");
    playAgain.classList.remove("hide");
  }
};

const wrongAnswer = function(wrongBox, rightBox) {
  // paint the right one and the current one
  wrongBox.style.background = "red";
  rightBox.style.background = "green";
};

loginBtn.addEventListener("click", login);
playHTML.addEventListener("click", function() {
  openQuiz("js");
});
playCSS.addEventListener("click", function() {
  openQuiz("css");
});

answerJS11.addEventListener("click", function() {
  wrongAnswer(answerJS11, answerJS12);
});
answerJS12.addEventListener("click", function() {
  rightAnswer(answerJS12, answersBoxJS1, answersBoxJS2);
});
answerJS13.addEventListener("click", function() {
  wrongAnswer(answerJS13, answerJS12);
});
answerJS14.addEventListener("click", function() {
  wrongAnswer(answerJS14, answerJS12);
});

answerJS21.addEventListener("click", function() {
  rightAnswer(answerJS21, answersBoxJS2, answersBoxJS3);
});
answerJS22.addEventListener("click", function() {
  wrongAnswer(answerJS22, answerJS21);
});
answerJS23.addEventListener("click", function() {
  wrongAnswer(answerJS23, answerJS21);
});
answerJS24.addEventListener("click", function() {
  wrongAnswer(answerJS24, answerJS21);
});

answerJS31.addEventListener("click", function() {
  wrongAnswer(answerJS31, answerJS31);
});
answerJS32.addEventListener("click", function() {
  wrongAnswer(answerJS32, answerJS31);
});
answerJS33.addEventListener("click", function() {
  rightAnswer(answerJS33, answersBoxJS3, "final");
});
answerJS34.addEventListener("click", function() {
  wrongAnswer(answerJS34, answerJS31);
});

answerCSS11.addEventListener("click", function() {
  wrongAnswer(answerCSS12, answerCSS14);
});
answerCSS12.addEventListener("click", function() {
  wrongAnswer(answerCSS12, answerCSS14);
});
answerCSS13.addEventListener("click", function() {
  wrongAnswer(answerCSS13, answerCSS14);
});
answerCSS14.addEventListener("click", function() {
  rightAnswer(answerCSS14, answersBoxCSS1, answersBoxCSS2);
});

answerCSS21.addEventListener("click", function() {
  wrongAnswer(answerCSS21, answerCSS22);
});
answerCSS22.addEventListener("click", function() {
  rightAnswer(answerCSS22, answersBoxCSS2, answersBoxCSS3);
});
answerCSS23.addEventListener("click", function() {
  wrongAnswer(answerCSS23, answerCSS22);
});
answerCSS24.addEventListener("click", function() {
  wrongAnswer(answerCSS24, answerCSS22);
});

answerCSS31.addEventListener("click", function() {
  wrongAnswer(answerCSS31, answerCSS33);
});
answerCSS32.addEventListener("click", function() {
  wrongAnswer(answerCSS32, answerCSS33);
});
answerCSS33.addEventListener("click", function() {
  rightAnswer(answerCSS33, answersBoxCSS3, "final");
});
answerCSS34.addEventListener("click", function() {
  wrongAnswer(answerCSS34, answerCSS33);
});

playAgain.addEventListener("click", goHomeView);
