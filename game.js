$(".container").slideUp(100);
var level = 0;
var userName=prompt("Enter Your Name");
var random=[];
var pattern=[];
var colorCode=["green","red","yellow","blue"]
var random = [];
var pattern = [];
userName=userName.toUpperCase();
var started = false;
$("#level-title").html("Welcome,"+ userName + "<br><br>"+ " Level :" + level);

$("button.start").click(function() {
  if (!started) {
    $("button.start").slideUp(100);
    $("div.start").slideUp(100);

    $(".container").slideDown(50);


    console.log(userName);

    nextSequence();
    started = true;

  }
});

$(".btn").click(function() {
  pattern.push(this.id);
  playSound(this.id);
  animatePress(this.id);
  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(pattern.length-1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (random[currentLevel] ===pattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (pattern.length === random.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("h1.over").slideDown();
      $("h1.over").text("Game Over"+ " Level :" + level);
      $("h1.over").css("margin","250px")
      $("h1.over").slideUp(7000);


      //2. Call startOver() if the user gets the sequence wrong.
      startOver();

    }

}

function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
 pattern = [];

  level++;
  $("#level-title").html("Welcome,"+ userName + "<br><br>"+ " Level :" + level);



  var rnd = Math.floor(Math.random() * 4);
  var randomChosenColour = colorCode[rnd];
  random.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  pattern = [];
  random=[];
  started = false;
  $(".container").slideUp(100);
  $("div.start").slideDown(100);

  $("button.start").slideDown();
}
