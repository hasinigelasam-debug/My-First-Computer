const gameQuestions = [
{
question:"Which part is called the brain of the computer?",
answer:"cpu"
},
{
question:"Which device is used to type letters?",
answer:"keyboard"
},
{
question:"Which device is used to move the pointer?",
answer:"mouse"
},
{
question:"Which device shows pictures and videos?",
answer:"monitor"
},
{
question:"Which device prints documents?",
answer:"printer"
},
{
question:"Which device plays sound?",
answer:"speaker"
},
{
question:"Which device records your voice?",
answer:"microphone"
},
{
question:"Which device helps us click icons?",
answer:"mouse"
},
{
question:"Which device is an input device used for typing?",
answer:"keyboard"
},
{
question:"Which device displays text on the screen?",
answer:"monitor"
}
];

let current = 0;
let score = 0;

showGameQuestion();

function showGameQuestion(){

document.getElementById("gameQuestion").innerHTML =
"Question " + (current+1) + " of " + gameQuestions.length + "<br><br>" +
gameQuestions[current].question;

document.getElementById("userAnswer").value = "";
document.getElementById("gameMessage").innerHTML = "";

document.getElementById("nextGameBtn").style.display="none";

}

document.getElementById("checkBtn").onclick=function(){

let user =
document.getElementById("userAnswer").value.toLowerCase().trim();

if(user==gameQuestions[current].answer){

score++;

document.getElementById("gameMessage").innerHTML="✅ Correct!";

}
else{

document.getElementById("gameMessage").innerHTML=
"❌ Wrong! Correct Answer: "+
gameQuestions[current].answer.toUpperCase();

}

document.getElementById("nextGameBtn").style.display="inline";

}

document.getElementById("nextGameBtn").onclick=function(){

current++;

if(current<gameQuestions.length){

showGameQuestion();

}
else{

document.querySelector(".game-box").innerHTML=`

<h2>🎉 Game Completed!</h2>

<h1>Your Score: ${score}/${gameQuestions.length}</h1>

<p>
${score>=8 ? "⭐⭐⭐⭐⭐ Excellent!"
: score>=5 ? "⭐⭐⭐ Good Job!"
: "📚 Keep Practicing!"}
</p>

<a href="certificate.html">
<button>Get Certificate 🏆</button>
</a>

`;

}

}