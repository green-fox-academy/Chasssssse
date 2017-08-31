//1
var heading = document.querySelector('h1').innerHTML;
alert(heading);

//2
var firstP = document.querySelector('p').innerHTML;
console.log(firstP);

//3
var secondP = document.querySelector('.other').innerHTML;
alert(secondP);

//4
document.querySelector('h1').innerHTML = 'New content';

//5
document.querySelector('.result').innerHTML = document.querySelector('p').textContent;
