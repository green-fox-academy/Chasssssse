//1
var king = document.getElementById('b325').textContent;
console.log(king);

//2
var conceited = document.querySelector('.b326').innerHTML;
alert(conceited);

//3
var businessLamp = document.querySelectorAll('.big');
console.log(businessLamp[0].textContent);
console.log(businessLamp[1].textContent);

//4
var conceitedKing = document.querySelectorAll('.container .asteroid');
alert(conceitedKing[0].textContent);
alert(conceitedKing[1].textContent);

//5
var noBusiness = document.querySelectorAll('div.asteroid');
noBusiness.forEach(function(element) {
    console.log(element.textContent);
});

//6
var allBisniss = document.querySelector('p.big').innerHTML;
alert(allBisniss);

