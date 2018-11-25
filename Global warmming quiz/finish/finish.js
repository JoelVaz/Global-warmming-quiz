var p = (sessionStorage.getItem("score"));
var score = p.length;
document.getElementById('score').innerHTML = score - 1 + "/6";
var name = sessionStorage.getItem("name");
console.log(name);
document.getElementById('finished').innerHTML = "Thank you " + name + " for taking this quiz"