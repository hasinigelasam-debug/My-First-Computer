const quiz = [
{
question:"Which part is called the brain of the computer?",
options:["Monitor","CPU","Mouse"],
answer:"CPU"
},
{
question:"Which device is used to type letters?",
options:["Keyboard","Printer","Monitor"],
answer:"Keyboard"
},
{
question:"Which device is used to move the pointer?",
options:["Mouse","CPU","Speaker"],
answer:"Mouse"
},
{
question:"Which device displays pictures and videos?",
options:["Monitor","Printer","Keyboard"],
answer:"Monitor"
},
{
question:"Which device prints documents?",
options:["Printer","Mouse","CPU"],
answer:"Printer"
},
{
question:"Which device plays sound?",
options:["Speaker","Keyboard","Monitor"],
answer:"Speaker"
},
{
question:"Which device records your voice?",
options:["Microphone","Printer","CPU"],
answer:"Microphone"
},
{
question:"Which device helps us click icons?",
options:["Mouse","Speaker","Monitor"],
answer:"Mouse"
},
{
question:"Which device is an input device?",
options:["Keyboard","Monitor","Printer"],
answer:"Keyboard"
},
{
question:"Which device shows text on the screen?",
options:["Monitor","Mouse","Speaker"],
answer:"Monitor"
}
];

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion(){

document.getElementById("message").innerHTML="";

document.getElementById("submitBtn").style.display="inline";

document.getElementById("nextBtn").style.display="none";

document.getElementById("question").innerHTML =
"Question " + (currentQuestion+1) + " of " + quiz.length + "<br><br>" +
quiz[currentQuestion].question;

let html="";

quiz[currentQuestion].options.forEach(function(option){

html += `
<label>
<input type="radio" name="answer" value="${option}">
${option}
</label><br><br>
`;

});

document.getElementById("options").innerHTML = html;

}

function submitAnswer(){

let selected =
document.querySelector('input[name="answer"]:checked');

if(selected==null){

alert("Please select an answer.");

return;

}

if(selected.value==quiz[currentQuestion].answer){

score++;

document.getElementById("message").innerHTML="✅ Correct!";

}
else{

document.getElementById("message").innerHTML=
"❌ Wrong! Correct Answer: "+quiz[currentQuestion].answer;

}

document.getElementById("submitBtn").style.display="none";

document.getElementById("nextBtn").style.display="inline";

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<quiz.length){

loadQuestion();

}
else{

document.querySelector(".quiz-box").innerHTML=`

<h2>🎉 Quiz Completed!</h2>

<h1>Your Score: ${score}/${quiz.length}</h1>

<p>
${score>=8 ? "⭐⭐⭐⭐⭐ Excellent!"
: score>=5 ? "⭐⭐⭐ Good Job!"
: "📚 Keep Practicing!"}
</p>

<a href="games.html">
<button>Play Games 🎮</button>
</a>

`;

}

}

document.getElementById("submitBtn").addEventListener("click", submitAnswer);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);