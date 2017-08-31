var button = document.querySelector("button");

var list = document.querySelectorAll("ul>li");
var n = list.length;

button.addEventListener("click", action, false);

function action() {
    document.querySelector('.result').textContent = n + ' items in the list';
}
