const score = document.getElementById("score");
score.textContent = 0;

const moves = document.getElementById("moves");
moves.textContent = 0;

const cards = document.querySelectorAll(".flip-card-inner");
const cards2 = document.querySelectorAll(".flip-card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("rotate");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;

    console.log(firstCard.dataset.click);
    console.log(secondCard.dataset.click);

    if (firstCard.dataset.click === secondCard.dataset.click) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      score.textContent++;
      moves.textContent++;
      resetBoard();
    } else {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove("rotate");
        secondCard.classList.remove("rotate");
        lockBoard = false;
        resetBoard();
      }, 1500);
      moves.textContent++;
    }
  }
}

function resetBoard() {
  hasFlippedCard, (lockBoard = false);
  firstCard, (secondCard = null);
}
(function shuffle() {
  cards2.forEach((card) => {
    let randPositon = Math.floor(Math.random() * 12);
    card.style.order = randPositon;
  });
})();

function resetFunc() {
  location.reload();
}

cards.forEach((card) => card.addEventListener("click", flipCard));