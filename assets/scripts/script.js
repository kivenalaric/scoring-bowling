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
  for (let i = 0; i < score.length; i++) {
    count++;
  }

  let standingPins = 10;
  const pinsHitFirst = getRandomPin(standingPins);
  standingPins = standingPins - pinsHitFirst;
  const pinsHitSecond = getRandomPin(standingPins);
  const totalHits = pinsHitFirst + pinsHitSecond;
  totalScores += totalHits;

  if (count <= 10) {
    score[0].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[0].innerHTML = totalHits;
  } else if (count <= 20) {
    score[1].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[1].innerHTML = totalScores;
  } else if (count <= 30) {
    score[2].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[2].innerHTML = totalScores;
  } else if (count <= 40) {
    score[3].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[3].innerHTML = totalScores;
  } else if (count <= 50) {
    score[4].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[4].innerHTML = totalScores;
  } else if (count <= 60) {
    score[5].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[5].innerHTML = totalScores;
  } else if (count <= 70) {
    score[6].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[6].innerHTML = totalScores;
  } else if (count <= 80) {
    score[7].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[7].innerHTML = totalScores;
  } else if (count <= 90) {
    score[8].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[8].innerHTML = totalScores;
  } else if (count <= 100) {
    score[9].innerHTML = `${pinsHitFirst}/${pinsHitSecond}`;
    totalScore[9].innerHTML = totalScores;
    totalDisplay.innerHTML = totalScores;
  } else {
    loading.innerHTML = "Number of Games Exceeded";
    loading.classList.add("active");
  }
};


resetBtn.addEventListener("click", () => window.location.reload());

rollBtn.addEventListener("click", () => {
  loading.classList.add("active");
  top.classList.add("active");
  bottom.classList.add("active");
  left.classList.add("active");
  right.classList.add("active");
  loadingHolder.classList.add("active");
  rollBtn.disabled = true;

  setTimeout(() => {
    rollBall();
    loading.classList.remove('active');
    top.classList.remove('active');
    bottom.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('active');
    loadingHolder.classList.remove('active');
    rollBtn.disabled = false;
  }, Math.floor(Math.random() * (1900 - 500 + 1)) + 500);
});
