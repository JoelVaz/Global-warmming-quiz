function tester() {
    var ans = document.getElementById("box4").checked;
    if(ans == true) {
        window.location.href="correct/correct.html"
    }else{
        window.location.href="wrong/wrong.html"
    }
}
