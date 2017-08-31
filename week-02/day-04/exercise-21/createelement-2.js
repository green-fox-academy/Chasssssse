var asteroidList = document.querySelector('ul.asteroids');
var king = document.querySelector('li');
asteroidList.removeChild(king); 

var newItem1 = document.createElement('li');
var newItem2 = document.createElement('li');
var newItem3 = document.createElement('li');

newItem1.textContent = 'The Fox';
newItem2.textContent = 'The Fox';
newItem3.textContent = 'The Fox';

asteroidList.appendChild(newItem1)
asteroidList.appendChild(newItem2)
asteroidList.appendChild(newItem3)