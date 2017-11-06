// pick theme
var currentWordsGroup = [];

var theme1 = {
    name: "Silicon Valley",
    words: ["INTEL", "ORACLE", "FACEBOOK", "GOOGLE", "UBER", "LINKEDIN", "YAHOO", "APPLE"],
    styleLink: "assets/css/theme1.css",
    imageLink: "assets/images/theme1.png"
  };

var  theme2 = {
    name: "The Jungle Book",
    words: ["BEAR", "TIGER", "WOLF", "PANTHER", "PYTHON"],
    styleLink: "assets/css/theme2.css",
    imageLink: "assets/images/theme2.png"
  };
var  theme3 = {
    name: "Fruit Ninja",
    words: ["APPLE", "COCONUT", "PINEAPPLE", "STRAWBERRY", "WATERMELON", "KIWI", "PEAR"],
    styleLink: "assets/css/theme3.css",
    imageLink: "assets/images/theme3.png"
  };

function pickTheme(theme) {
    document.querySelector("#theme").innerHTML = theme.name;
    document.getElementById("theme_css").href = theme.styleLink;
    document.getElementById("theme_img").src = theme.imageLink;
    currentWordsGroup = theme.words;
    document.getElementById("start").style.display = "inline";
}

var wins = 0;
var lives;
var alreadyGuessed = [];
var wordToGuess;
var arrayBlank;
var blank = "";

function arrayToString(a) {
  return a.join("");
}

function stringToArray(a) {
  return a.split("");
}

function restartGame() {
  document.getElementById("input").style.display = "none";
  document.getElementById("start").style.display = "inline";
}

function startGame() {
  document.getElementById("input").style.display = "inline";
  document.getElementById("pickTheme").style.display = "none";
  document.getElementById("start").style.display = "none";
  //document.getElementById("focus").scrollIntoView();
  wordToGuess = currentWordsGroup[Math.floor(Math.random() * currentWordsGroup.length)];
  //console.log(wordToGuess);

  lives = 5;
  blank = "";
  alreadyGuessed = [];

  for (var i = 0; i < wordToGuess.length; i++) {
    blank += "_";
  }

  arrayBlank = stringToArray(blank);

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<br><p>wins: " + wins + "</p>" +
    "<p>Word to guess: </p>" + "<p id='blank'>" + blank + "</p>" +
    "<p>Numbers of guesses remaining: " + lives + "</p>" + 
    "<p>Letters already Guessed: " + alreadyGuessed + "</p>";
        
  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;

}

function theGame(){
  var userGuess = event.key.toUpperCase();
  var x = document.getElementById("key");
  x.value = "";

  if (userGuess.charCodeAt() >= 65 && userGuess.charCodeAt() <= 90 && userGuess.length == 1){
    var pos = wordToGuess.indexOf(userGuess);

    if (pos == -1 && alreadyGuessed.indexOf(userGuess) == -1){
      alreadyGuessed.push(userGuess);
      lives--;
    } else {
      while (pos !== -1) {
        arrayBlank[pos] = userGuess;
        blank = arrayToString(arrayBlank);
        pos = wordToGuess.indexOf(userGuess, pos + 1);
      } 
    }
  } 

  //console.log(blank);

  if(blank.indexOf("_") == -1) {
    wins++;
    restartGame();
  }

  if (lives == 0) {
    restartGame();
  }

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<br><p>wins: " + wins + "</p>" +
    "<p>Word to guess: </p>" + "<p id='blank'>" + blank + "</p>" +
    "<p>Numbers of guesses remaining: " + lives + "</p>" + 
    "<p>Letters already Guessed: " + alreadyGuessed + "</p>";
        
  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;

}
