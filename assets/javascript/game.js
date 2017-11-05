// pick theme
var currentWordsGroup = [];

var theme1 = {
    name: "theme1",
    words: ["intel", "oracle", "facebook", "google"],
    styleLink: "assets/css/theme1.css",
    imageLink: "assets/images/theme1.png"
  };

var  theme2 = {
    name: "theme2",
    words: ["cat", "dog", "horse"],
    styleLink: "assets/css/theme2.css",
    imageLink: "assets/images/theme2.png"
  };
var  theme3 = {
    name: "theme3",
    words: ["apple", "peach", "pear"],
    styleLink: "assets/css/theme3.css",
    imageLink: "assets/images/theme3.png"
  };

function pickTheme(theme) {
    document.querySelector("#theme").innerHTML = "Your selected theme: " + theme.name;
    document.getElementById("theme_css").href = theme.styleLink;
    document.getElementById("theme_img").src = theme.imageLink;
    currentWordsGroup = theme.words;
}

var wins = 0;
var lives;
var alreadyGuessed = [];
var wordToGuess;
var arrayWord;
var arrayBlank;
var blank = "";

function arrayToString(a) {
  return a.toString();
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

  wordToGuess = currentWordsGroup[Math.floor(Math.random() * currentWordsGroup.length)];
  console.log (wordToGuess);

  lives = 5;
  blank = "";
  alreadyGuessed = [];

  for (var i = 0; i < wordToGuess.length; i++) {
    blank += "_";
  }

  arrayWord = wordToGuess.split("");

  arrayBlank = stringToArray(blank);

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<br><p>wins: " + wins + "</p>" +
    "<p>Lives: " + lives + "</p>" + 
    "<p>Word to guess: </p>" + "<p id='blank'>" + blank + "</p>" +
    "<p>Letter already Guessed: " + alreadyGuessed + "</p>";
        
  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;

}

function theGame(){
  var userGuess = event.key;
  var x = document.getElementById("key");
  x.value = "";


  var pos = wordToGuess.indexOf(userGuess);

  if (pos == -1){
    alreadyGuessed.push(userGuess);
    lives--;
  }else {
    while (pos !== -1) {
      arrayBlank[pos] = userGuess;
      blank = arrayToString(arrayBlank);
      pos = wordToGuess.indexOf(userGuess, pos + 1);
    }
  }

  console.log(blank);

  if(blank.indexOf("_") == -1) {
    wins++;
    restartGame();
  }

  if (lives == 0 ){
    restartGame();
  }

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<br><p>wins: " + wins + "</p>" +
    "<p>Lives: " + lives + "</p>" + 
    "<p>Word to guess: </p>" + "<p id='blank'>" + blank + "</p>" +
    "<p>Letter already Guessed: " + alreadyGuessed + "</p>";
        
  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;


}
