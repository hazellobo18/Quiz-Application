
document.getElementById("result").innerHTML=sessionStorage.getItem("score");
var userChoice = JSON.parse(sessionStorage.getItem("userChoice"));

buildTable(questionBank);

function buildTable(questionBank){
    var table= document.getElementById("myTable");

    for(var i=0; i< questionBank.length;i++){
        var row= `<tr>
                    <td>${questionBank[i].q}</td>
                    <td>${userChoice[i]}</td>
                    <td>${questionBank[i].answer}</td>
                </tr>`
        table.innerHTML+=row
    }
}