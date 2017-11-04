// pick theme
var currentWordsGroup = [];

var theme1Words = ["apple", "peach", "pear"];
var theme2Words = ["cat", "dog", "horse"];
var theme3Words = ["intel", "oracle", "facebook", "google"];


function pickTheme1() {
    document.querySelector("#theme").innerHTML = "Your selected theme: Theme1";
    document.getElementById("theme_css").href = "assets/css/theme1.css";
  //document.getElementById("theme_img").src = "assets/images/theme1.png";
    currentWordsGroup = theme1Words;
}

function pickTheme2() {
    document.querySelector("#theme").innerHTML = "Your selected theme: Theme2";
  document.getElementById("theme_css").href = "assets/css/theme2.css";
  //document.getElementById("theme_img").src = "assets/images/theme2.png";
    currentWordsGroup = theme2Words;

}

function pickTheme3() {
    document.querySelector("#theme").innerHTML = "Your selected theme: Theme3";
    document.getElementById("theme_css").href = "assets/css/theme3.css";
    //document.getElementById("theme_img").src = "assets/images/theme3.png";
    currentWordsGroup = theme3Words;

}

var wins = 0;
var lives = 5;
var alreadyGuessed = [];

document.onkeyup = function(event) {

  var wordToGuess = currentWordsGroup[Math.floor(Math.random() * currentWordsGroup.length)];
  console.log (wordToGuess);

  var blank = "";

  var userGuess = event.key;


  for (var i = 0; i < wordToGuess.length; i++) {
    blank += " _";
  }

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<p>wins: " + wins + "</p>" +
        "<p>Lives: " + lives + "</p>" + 
        "<p>Word to guess: </p>" + "<p>" + blank + "</p>" +
        "<p>Letter already Guessed: " + alreadyGuessed + "</p>";
        

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

}

//