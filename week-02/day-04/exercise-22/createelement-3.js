var asteroidList = document.querySelector('ul.asteroids');
var king = document.querySelector('li');
asteroidList.removeChild(king);

var list = ['apple', 'bubble', 'cat', 'green fox'];

list.forEach(function(element) {
    var newItem = document.createElement('li');
    newItem.textContent = element;
    asteroidList.appendChild(newItem);
});


