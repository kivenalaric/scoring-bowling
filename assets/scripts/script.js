const score = document.querySelectorAll(".roll");
const totalScore = document.querySelectorAll(".roll-total");
const rollBtn = document.querySelector(".roll-btn");
const resetBtn = document.querySelector(".reset-btn");
const loadingHolder = document.querySelector(".loading-holder");
const loading = document.querySelector(".loader");
const top = document.querySelector(".top");
const left = document.querySelector(".left");
const bottom = document.querySelector(".bottom");
const right = document.querySelector(".right");
const totalDisplay = document.querySelector(".grand-total");

let count = 0;
let totalScores = 0;

function getRandomPin(remainingPins) {
  return Math.round(Math.random() * remainingPins);
}

const rollBall = () => {
  let standingPins = 10;

  for (let i = 0; i < score.length; i++) {
    count++;
    if (count <= 100) {
      const pinsHitFirst = getRandomPin(standingPins);
      standingPins = standingPins - pinsHitFirst;
      const pinsHitSecond = getRandomPin(standingPins);
      const totalHits = pinsHitFirst + pinsHitSecond;
      totalScores += totalHits;
      score[i].innerHTML = `${pinsHitFirst} / ${pinsHitSecond}`;
      totalScore[i].innerHTML = totalScores;
      totalDisplay.innerHTML = `${totalScores}`;
      loading.classList.add("active");
      loading.innerHTML = "Game Over!! Reset to Play again.";
    } else {
      loading.innerHTML = "Number of Games Exceeded";
      loading.classList.add("active");
      return;
    }
  }
};

resetBtn.addEventListener("click", () => window.location.reload());

rollBtn.addEventListener("click", () => {
  loading.classList.add("active");
  loading.classList.add("active");
  top.classList.add("active");
  bottom.classList.add("active");
  left.classList.add("active");
  right.classList.add("active");
  loadingHolder.classList.add("active");
  rollBtn.disabled = true;

  setTimeout(() => {
    rollBall();
    loading.classList.remove("active");
    top.classList.remove("active");
    bottom.classList.remove("active");
    left.classList.remove("active");
    right.classList.remove("active");
    loading.classList.remove("active");
    loadingHolder.classList.remove("active");
  }, Math.floor(Math.random() * (1900 - 500 + 1)) + 500);
});
