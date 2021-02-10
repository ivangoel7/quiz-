function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		var element=document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++)
		{
			var element = document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
};

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML="Question "+currentQuestionNumber +" of "+quiz.questions.length;

};

function showScores()
{
	var gameOverHtml="<h1> Result of the quiz.. that u are dumb but still</h1>"
	gameOverHtml+="<h2 id='score'>Your Score is :  "+quiz.score+"</h2>";
	gameOverHtml+="<h4 id='score'>if u chose that the annuals should be held offline u are dumb </h4>";
	gameOverHtml+="<h20 id='score'>sub to ivan goel7 on youtube pls :</h20>";

	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;


};

var questions=[
	new Question("who is the developer??",["ivan goel","christopher collumbus","i am dumb","none of the above"],"ivan goel"),
	new Question("is ivan goel smart???",["yes","no","no comments","i am dumb"],"yes"),
	new Question("what is ivangoel's favourite colour??",["red","yellow"," blue","black"],"black"),
	new Question("do u want the annuals offline??",["yes","no","i dont know","i dontcare"],"no"),
	new Question("did u like the quiz",["yes","no","no comments","i am dumb"],"yes"),

	


];
var quiz=new Quiz(questions);
populate();