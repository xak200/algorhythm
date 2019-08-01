const problemsArray = [
  [
    "Problem: Given a number, write a function multiplyByThree that takes one argument, num, and returns the number times three.<br><br>function multiplyByThree(num) {",
    "return num * 3"
  ],
  [
    "Problem: Given a number, write a function subtractOneHundredAndThirtySeven that takes one argument, num, and returns the number minus 137.<br><br>function subtractOneHundredAndThirtySeven(num) {",
    "return num - 137"
  ]
];

const randNum = Math.floor(Math.random() * problemsArray.length);

const cover = document.createElement("div");
cover.setAttribute("id", "coverDiv");
cover.style.backgroundColor = "#24e3aa";
cover.style.width = "50%";
cover.style.margin = "auto";
cover.style.zIndex = "-1";
cover.style.display = "flex";
cover.style.flexDirection = "column";
cover.style.marginTop = "7%";
cover.style.padding = "5%";

document.body.appendChild(cover);

const welcomeText = document.createElement("div");
welcomeText.innerHTML =
  "It's algoRhythm time!<br><br> Solve this algoRhythm problem before continuing to your regularly scheduled interwebz.<br><br>";
welcomeText.style.textAlign = "center";
welcomeText.style.lineHeight = "1.5em";
welcomeText.style.fontSize = "x-large";
welcomeText.style.fontStyle = "italic";
welcomeText.style.color = "black";
welcomeText.style.fontFamily = "Georgia";
cover.appendChild(welcomeText);

const algoProb = document.createElement("div");
algoProb.innerHTML = problemsArray[randNum][0];
algoProb.style.fontSize = "large";
algoProb.style.fontWeight = "bold";
algoProb.style.textAlign = "center";
algoProb.style.color = "black";
algoProb.style.fontFamily = "Georgia";

// const solutionBox = document.createElement("div");
// solutionBox.innerHTML = problemsArray[randNum][1];
// solutionBox.style.fontSize = "large";
// solutionBox.style.textAlign = "center";
// solutionBox.style.color = "black";
// solutionBox.style.fontFamily = "Georgia";
// how would you add the solution before the page resets back to the original content?

cover.appendChild(algoProb);

// text editor
const textEditor = document.createElement("textarea");
textEditor.setAttribute("rows", 20);
textEditor.setAttribute("cols", 10);
textEditor.setAttribute("id", "textEditorID");
textEditor.style.display = "block";
textEditor.style.margin = "10px auto";
textEditor.style.height = "150px";
textEditor.style.width = "300px";
textEditor.style.fontFamily = "Lucida Console";
cover.appendChild(textEditor);

// button container
const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "row";
buttonContainer.style.justifyContent = "space-around";
cover.appendChild(buttonContainer);

// complete button
const completeButton = document.createElement("button");
completeButton.setAttribute("id", "complete");
completeButton.innerHTML = "I solved it! (Trust me).";
completeButton.style.fontSize = "medium";
completeButton.style.fontWeight = "bold";
completeButton.style.border = "solid";
completeButton.style.borderRadius = "7px";
completeButton.style.padding = "10px 5px 10px 5px";
completeButton.style.borderColor = "#ff5ca3";
completeButton.style.backgroundColor = "#ff5ca3";
completeButton.style.fontFamily = "sans-serif";
completeButton.style.color = "black";

// failure button
const failureButton = document.createElement("button");
failureButton.setAttribute("id", "failure");
failureButton.innerHTML = "I don't want to be a developer.";
failureButton.style.fontSize = "medium";
failureButton.style.fontWeight = "bold";
failureButton.style.border = "solid";
failureButton.style.borderRadius = "7px";
failureButton.style.padding = "10px 5px 10px 5px";
failureButton.style.borderColor = "#ff5ca3";
failureButton.style.backgroundColor = "#ff5ca3";
failureButton.style.fontFamily = "sans-serif";
failureButton.style.color = "black";

// solution Button
const solutionButton = document.createElement("button");
solutionButton.setAttribute("id", "solution");
solutionButton.innerHTML =
  "Congratulations! You got the right answer. Go be social!";
solutionButton.style.fontSize = "medium";
solutionButton.style.fontWeight = "bold";
solutionButton.style.border = "solid";
solutionButton.style.borderRadius = "7px";
solutionButton.style.padding = "10px 5px 10px 5px";
solutionButton.style.borderColor = "#ff5ca3";
solutionButton.style.backgroundColor = "#ff5ca3";
solutionButton.style.fontFamily = "sans-serif";
solutionButton.style.color = "black";

buttonContainer.appendChild(completeButton);
buttonContainer.appendChild(failureButton);

function checkId() {
  if (document.querySelector("#doc") !== null) {
    let twitterTag = document.querySelector("#doc");
    twitterTag.hidden = true;
  } else if (document.querySelector("#u_0_15") !== null) {
    let facebookTag = document.querySelector("#u_0_15");
    facebookTag.hidden = true;
  } else if (document.querySelector("ytd-app") !== null) {
    let youtubeTag = document.querySelector("ytd-app");
    youtubeTag.hidden = true;
  }
}

checkId();

// eventListener onthe buttons

const completeClick = document.querySelector("#complete");
const failureClick = document.querySelector("#failure");
const coverDivRef = document.querySelector("#coverDiv");

function dismissAlgorhythm() {
  if (document.querySelector("#doc") !== null) {
    let twitterTag = document.querySelector("#doc");
    twitterTag.hidden = false;
    coverDivRef.hidden = true;
  } else if (document.querySelector("#u_0_15") !== null) {
    let facebookTag = document.querySelector("#u_0_15");
    facebookTag.hidden = false;
    coverDivRef.hidden = true;
  } else if (document.querySelector("ytd-app") !== null) {
    let youtubeTag = document.querySelector("ytd-app");
    youtubeTag.hidden = false;
    coverDivRef.hidden = true;
  }
}

function revealSolution() {
  // algoProb.appendChild(solutionBox);
  // setTimeout(dismissAlgorhythm, 4500);
  completeClick.hidden = true;
  failureClick.hidden = true;
  cover.appendChild(solutionButton);
}

completeClick.addEventListener("click", evaluateUserInput); // => change to evaluate userInput
failureClick.addEventListener("click", dismissAlgorhythm);
solutionButton.addEventListener("click", dismissAlgorhythm);

const wrongAnswer = document.createElement("div");
wrongAnswer.innerHTML =
  "<br>Sorry, your answer is incorrect. Refactor your code and try again!";
wrongAnswer.style.textAlign = "center";
wrongAnswer.style.lineHeight = "1.5em";
wrongAnswer.style.fontSize = "large";
wrongAnswer.style.fontStyle = "italic";
wrongAnswer.style.color = "black";
wrongAnswer.style.fontFamily = "Georgia";

function evaluateUserInput() {
  const userInput = textEditor.value;
  const userFunction = new Function("num", userInput);
  const ourFunction = new Function("num", problemsArray[randNum][1]);
  try {
    if (userFunction(3) === ourFunction(3)) {
      revealSolution();
      wrongAnswer.hidden = true;
    }
  } catch {
    cover.append(wrongAnswer);
  }
}
