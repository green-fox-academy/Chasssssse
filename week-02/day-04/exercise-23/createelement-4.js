var asteroidList = document.querySelector('ul.asteroids');
var king = document.querySelector('li');
asteroidList.removeChild(king);

var planetData = [
      {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true
      },
      {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true
      },
      {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true
      },
      {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false
      },
      {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true
      }
]

planetData.forEach(function(element, index) {
    if (element.asteroid) {
        var newItem = document.createElement('li');
        newItem.textContent = element.content;
        newItem.className = element.category;
        asteroidList.appendChild(newItem);
    }

});