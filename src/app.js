import "../src/style.css";
let generateRandomNumber = () => {
  const card = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let position = Math.floor(Math.random() * card.length);
  return card[position];
};
let generateRandomSuit = () => {
  const pinta = ["♦", "♥", "♠", "♣"];
  let indexPinta = Math.floor(Math.random() * pinta.length);
  return pinta[indexPinta];
};
let randomSuit = generateRandomSuit();
let randomNumber = generateRandomNumber();
window.onload = () => {
  let topSuit = document.querySelector(".top-suit");
  let number = document.querySelector(".number");
  let bottomSuit = document.querySelector(".bottom-suit");
  topSuit.innerHTML = randomSuit;
  number.innerHTML = randomNumber;
  bottomSuit.innerHTML = randomSuit;
  if (randomSuit == ":diamantes:" || randomSuit == ":corazones:") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  }
};
