var i = 0;
var correctCount = 0 ;
var choice=[]


createQuiz(0);
// generate from json array data with index
function createQuiz(index) {
    document.getElementById("question").innerHTML = questionBank[index].q;
    document.getElementById("optt1").innerHTML = questionBank[index].opt1;
    document.getElementById("optt2").innerHTML = questionBank[index].opt2;
    document.getElementById("optt3").innerHTML = questionBank[index].opt3;
    document.getElementById("optt4").innerHTML = questionBank[index].opt4;
}
function userChoice(){
    if(document.getElementById("opt1").checked){
        choice.push(questionBank[i].opt1);
        
    }  
    if(document.getElementById("opt2").checked){
        choice.push(questionBank[i].opt2);
        
    } 
    if(document.getElementById("opt3").checked){
        choice.push(questionBank[i].opt3);
        
    }
    if(document.getElementById("opt4").checked){
        choice.push(questionBank[i].opt4);
        
    }
}


function checkAnswer() {
    userChoice()
    if (document.getElementById("opt1").checked && questionBank[i].opt1 == questionBank[i].answer) {
        correctCount++;
        
    }
     if (document.getElementById("opt2").checked && questionBank[i].opt2 == questionBank[i].answer) {
        correctCount++;
        
    }
    if (document.getElementById("opt3").checked && questionBank[i].opt3 == questionBank[i].answer) {
        correctCount++;
       
    }
    if (document.getElementById("opt4").checked && questionBank[i].opt4 == questionBank[i].answer) {
        correctCount++;
        
    }

    i++;
    if(questionBank.length-1 < i){
        sessionStorage.setItem("userChoice",JSON.stringify(choice));
        sessionStorage.setItem("score",correctCount) ;
        sessionStorage.setItem("questionCount",questionBank.length);
        document.location.href="result.html";    
    }
   
    createQuiz(i);
}
