import constants from "./constants";
import random from "./random";
import score from "./score";
import "../styles/main.scss";

const UI = (function () {
  let shuffling = false;
  const jackpotContainerEl = document.querySelector("#jackpotContainer");
  const classNames = {
    jackpotColOuterContainer: "jackpotColOuterContainer",
    jackpotColInnerContainer: "jackpotColInnerContainer",
    jackpotItem: "jackpotItem",
    userScore: "userScore",
    userHint: "userHint",
  };
  const radius = Math.round(
      constants.itemHeight / 2 / Math.tan(Math.PI / constants.colItemsCount)
    ),
    itemRotation = 360 / constants.colItemsCount;
  function drawJackpot() {
    for (let i = 0; i < constants.colsCount; i++) {
      let colOuterContainerEl = document.createElement("div"),
        colInnerContainerEl = document.createElement("div");
      colOuterContainerEl.classList.add(classNames.jackpotColOuterContainer);
      colInnerContainerEl.classList.add(classNames.jackpotColInnerContainer);
      colOuterContainerEl.insertAdjacentElement(
        "afterbegin",
        colInnerContainerEl
      );
      for (let j = 0; j < constants.colItemsCount; j++) {
        const colItemEl = document.createElement("div");
        colItemEl.classList.add(classNames.jackpotItem);
        colItemEl.style.backgroundImage = `url(${
          constants.imagesPath + constants.items[j] + constants.imageType
        })`;
        colItemEl.style.transform = `rotateX(${
          itemRotation * j
        }deg) translateZ(${radius}px)`;
        colInnerContainerEl.insertAdjacentElement("beforeend", colItemEl);
      }
      jackpotContainerEl.insertAdjacentElement(
        "beforeend",
        colOuterContainerEl
      );
    }
  }
  function resetJackpot() {
    const cols = document.querySelectorAll(
      "." + classNames.jackpotColInnerContainer
    );
    for (let i = 0; i < cols.length; i++) {
      cols[i].style.transform = `translateZ(${radius}px) rotateX(${0}deg)`;
    }
  }

  function shuffle() {
    if (shuffling) return false;
    return new Promise((resolved, rejected) => {
      shuffling = true;
      const cols = document.querySelectorAll(
          "." + classNames.jackpotColInnerContainer
        ),
        states = [];
      resetJackpot();
      setTimeout(() => {
        for (let i = 0; i < cols.length; i++) {
          const randomNum = random.generate();
          states.push(randomNum);
          setTimeout(() => {
            cols[i].style.transform = `translateZ(${radius}px) rotateX(${
              -36 * states[i] - 1080
            }deg)`;
            if (i == cols.length - 1) resolved(states);
          }, 1000 * i);
        }
      }, 1200);
    });
  }

  function drawShuffleButton() {
    const shuffleButtonEl = document.createElement("div");
    shuffleButtonEl.classList.add("shuffleButton");
    shuffleButtonEl.innerText = "START";
    shuffleButtonEl.addEventListener("click", function () {
      const shuffleResult = shuffle();
      if (shuffleResult)
        shuffleResult.then((states) => {
          const result = score.calculate(states);

          setTimeout(() => (shuffling = false), 1000);
        });
    });
    jackpotContainerEl.insertAdjacentElement("beforebegin", shuffleButtonEl);
  }
  return {
    jackpotContainer,
    drawJackpot,
    drawShuffleButton,
  };
})();
export default UI;
