function next() {
    window.location.href="q1/question.html";
    sessionStorage.setItem("score", 0);
    var name = document.getElementById('name_text').value;
    sessionStorage.setItem("name", name);
    console.log(name);
}