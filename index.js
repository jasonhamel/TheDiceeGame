function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = roll();
var randomNumber2 = roll();

document
  .querySelectorAll(".player > button > img")[0]
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document
  .querySelectorAll(".player > button > img")[0]
  .setAttribute("alt", "Player 1 got a " + randomNumber1);
document
  .querySelectorAll(".player > button > img")[1]
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
document
  .querySelectorAll(".player > button > img")[1]
  .setAttribute("alt", "Player 2 got a " + randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
