const element1 = document.querySelector(".btn");
const element2 = document.querySelector(".diceGif");

element1.addEventListener("click", gamePlay);
element2.addEventListener("click", gamePlay);

function gamePlay() {
    // generate random number for player 1 an 2
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // select dice name 
    var randomDiceName1 = "dice" + randomNumber1 + ".png";
    var randomDiceName2 = "dice" + randomNumber2 + ".png";

    // form image source
    var randomImageSource1 = "assets/" + randomDiceName1;
    var randomImageSource2 = "assets/" + randomDiceName2;

    // select dom tag
    var image1 = document.querySelectorAll("img")[1];
    var image2 = document.querySelectorAll("img")[2];

    // set image source
    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);


    document.querySelector(".letsPlay").classList.add("invisible");
    document.querySelector(".diceGif").classList.add("invisible");
    document.querySelector(".form").classList.add("invisible");

    document.querySelector(".btn").classList.add("playAgain");

    document.querySelector(".diceContainer").classList.remove("invisible");
    document.querySelector(".result").classList.remove("invisible");

    document.querySelector(".btn").innerHTML = "Play Again!";

    var playerOneName = document.getElementById("fname").value;
    var playerTwoName = document.getElementById("ln").value;
    if (playerOneName == "") {
        playerOneName = "Player 1";
    }

    if (playerTwoName == ""){
        playerTwoName = "Player 2";
    }


    if (randomNumber1 > randomNumber2){
        document.querySelector(".result").innerHTML = "🚩" + playerOneName +" WINS!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector(".result").innerHTML = "🚩" + playerTwoName + " WINS!"
    } else {
        document.querySelector(".result").innerHTML = "DRAW!"
    }
}