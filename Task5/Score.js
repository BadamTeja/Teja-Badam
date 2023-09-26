var score=0
function increase(){
    score=score+10;
    document.getElementById("total").textContent=score;
}

function decrease(){
    score=score-10;
    document.getElementById("total").textContent=score;
}