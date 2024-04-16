const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const astroAnswer = document.getElementById("astro-a");

yesButton.addEventListener('click', yesAnswer);
noButton.addEventListener('click', noAnswer);

function yesAnswer() {
    astroAnswer.innerText =  "i'm so sorry.";
}

function noAnswer() {
    astroAnswer.innerText =  "i forgive you.";
}