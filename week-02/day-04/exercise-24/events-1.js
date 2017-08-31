var button = document.querySelector("button");

button.addEventListener("click", turnon, false);

function turnon() {
    document.querySelector('div').classList.toggle('party');
}


