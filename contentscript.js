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
  "It's Algorhythm time!<br><br> Solve this algorithm problem before continuing to your regularly scheduled interwebz.<br><br>";
welcomeText.style.textAlign = "center";
welcomeText.style.lineHeight = "1.5em";
welcomeText.style.fontSize = "x-large";
welcomeText.style.color = "white";
welcomeText.style.fontFamily = "Georgia";
cover.appendChild(welcomeText);

const algoProb = document.createElement("div");
algoProb.innerHTML =
  "PROBLEM: Given a number, write a function that returns a value equal to the number times three.<br><br><br><br>";
algoProb.style.fontSize = "large";
algoProb.style.textAlign = "center";
algoProb.style.color = "white";
algoProb.style.fontFamily = "Georgia";

cover.appendChild(algoProb);

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "row";
buttonContainer.style.justifyContent = "space-around";
cover.appendChild(buttonContainer);

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

buttonContainer.appendChild(completeButton);
buttonContainer.appendChild(failureButton);

// const facebookMainTag = document.querySelector("#u_0_15");
// const twitterMainTag = document.querySelector("#doc");
// const redditMainTag = document.querySelector();
// const instagramMainTag = document.querySelector();
// const buzzfeedMainTag = document.querySelector();
// const youtubeMainTag = document.querySelector();

// facebookMainTag.hidden = true;
// twitterMainTag.hidden = true;

// array of ids; one by one send it to our function

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

  //   } else if (document.querySelector("._1nxEQl5D2Bx2jxDILRHemb  ") !== null) {
  //     let redditTag = document.querySelector("._1nxEQl5D2Bx2jxDILRHemb  ");
  //     redditTag.hidden = true;
  // consider removing; header still displays.... ??
  //   } else if (document.querySelector(".page-content") !== null) {
  //     let buzzfeedTag = document.querySelector(".page-content");
  //     // let otherTag = document.querySelector(".xs-relative");
  //     buzzfeedTag.hidden = true;
  //     // otherTag.hidden = true;
  // //  } else if (document.querySelector("ytd-app") !== null) {
  //     let youtubeTag = document.querySelector("ytd-app");
  //     youtubeTag.hidden = true;
  // //   } else if (document.querySelector(".SCxLW  o64aR") !== null) {
  //     let instagramTag = document.querySelector(".SCxLW  o64aR");
  //     instagramTag.hidden = true;
  //   }
}

checkId();

// eventListener onthe buttons

const completeClick = document.querySelector("#complete");
const failureClick = document.querySelector("#failure");
const coverDivRef = document.querySelector("#coverDiv");

completeClick.addEventListener("click", function() {
  console.log("THAAAAANKS");
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
});

failureClick.addEventListener("click", function() {
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
});
