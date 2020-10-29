let secondTens = document.querySelector("#secondTens");
secondTens.textContent = 0;

let secondOnes = document.querySelector("#secondOnes");
secondOnes.textContent = 0;

let msHundreds = document.querySelector("#msHundreds");
msHundreds.textContent = 0;

let msTens = document.querySelector("#msTens");
msTens.textContent = 0;

let msTensCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;

let intervalId = window.setInterval(cb, 10);

function cb() {
  console.time();
  msTensCounter++;
  msTens.textContent = msTensCounter;

  if (msTens.textContent === "10") {
    msHundredsCounter++;
    msTensCounter = 0;
    msTens.textContent = 0;
    msHundreds.textContent = msHundredsCounter;
  }

  if (msHundreds.textContent === "10") {
    secondOnesCounter++;
    secondOnes.textContent = secondOnesCounter;
    msHundredsCounter = 0;
    msHundreds.textContent = 0;
  }

  if (secondOnes.textContent === "10") {
    secondOnesCounter = 0;
    secondTensCounter++;
    secondTens.textContent = secondTensCounter;
    secondOnes.textContent = 0;
  }

  if (secondTens.textContent === "1") {
    clearInterval(intervalId);
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 1;
    document.querySelector(".digits").style.color = "red";
    console.timeEnd();
  }
}

// function changeColor () {
//     if (intervalId ===)
// }
