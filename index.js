var randomNumber1 = Math.floor(Math.random()*6) + 1;
var rendomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/"+rendomDiceImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2)

// throw dice

function reloadPage() {
    location.reload();
}


// if player win

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}

else  { document.querySelector("h1").innerHTML = "it's drow!"}

