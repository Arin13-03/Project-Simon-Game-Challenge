var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern= [];
var rn;
var randomChosenColour;
var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started)
    {
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
}

   
}); 
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    /*console.log(userClickedPattern);*/
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    });

    function checkAnswer(currentLevel)
{
 if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
 {
 /*console.log("success");*/
 if (userClickedPattern.length === gamePattern.length)
 {
 setTimeout(function(){nextSequence()},1000);

 }
 else
 {
playSound("wrong");
$("body").addClass("game-over");
$("#level-title").text("Game Over, Press Any Key to Restart");
setTimeout(function(){
    $("body").removeClass("game-over");
},200);

startOver();
 }
}
} 

function nextSequence()
{
    userClickedPattern=[];
   rn=Math.floor(Math.random()*4);
   randomChosenColour = buttonColors[rn];
   gamePattern.push(randomChosenColour);
   
   level=level+1;
   $("#level-title").text("Level "+level);
   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);  
}

function animatePress(currentColor)
{
$("#"+currentColor).addClass("pressed");
setTimeout(function()
{
    $("#",currentColor).removeClass("pressed");
},100);
}







function playSound(name){
  
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    }






function startOver()
{
    level = 0;
    gamePattern=[];
    started = false;
}