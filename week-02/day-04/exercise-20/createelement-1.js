var asteroidList = document.querySelector('ul.asteroids');
var newAsteroid1 = document.createElement('li');
var newAsteroid2 = document.createElement('li');
newAsteroid1.textContent = 'The Green Fox';
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid1);
asteroidList.appendChild(newAsteroid2);

var container = document.querySelector('div.container');
var heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM';
container.appendChild(heading);

var img = document.createElement('img');
img.src = 'http://ampthemag.com/wp-content/uploads/2016/05/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners-1440x1080.jpg'
container.appendChild(img);

