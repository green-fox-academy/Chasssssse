'use strict';

// Create a constructor called PirateHorde, that takes an array of pirates as a parameter:
// It should have an "addPirate" method that adds a pirate object to it's list
// It should have a "getSumGold" method that returns the sum of all pirates gold
// It should have a "getLongestName" method that returns the name of the pirate that has the longest
// It should have a "getTheWoodenLegNames" method that retuns the names of the pirates that has wooden leg


function PirateHorde(pirates) {
    this.pirates = pirates;
    this.addPirate = function(_name, _gold, _hwl) {
        let newpirate = {name: _name, gold: _gold, hasWoodenLeg: _hwl};
        this.pirates.push(newpirate);
    };
    this.getSumGold = function() {
        var sum = 0;
        this.pirates.forEach(function(element) {
            sum += element.gold;   
        });
        return sum;
    };
    this.getLongestName = function() {
        var longest = this.pirates[0].name;
        this.pirates.forEach(function(element) {
            if (longest.length < element.name.length) {
                longest = element.name;
            }
        });
        return longest
    }
    this.getTheWoodenLegNames = function() {
        var woodenlegs = this.pirates.filter(function (value) {
        return value.hasWoodenLeg == true;
        });
        var p_woodenlegs = [];
        woodenlegs.forEach(function(element) {
            p_woodenlegs.push(element.name);
        })   
        return p_woodenlegs;
    }
}


var pirates = [
  {name: 'Jack', gold: 4, hasWoodenLeg: true},
  {name: 'Bob', gold: 0, hasWoodenLeg: false},
  {name: 'Olaf', gold: 3, hasWoodenLeg: true},
  {name: 'Steve', gold: 2, hasWoodenLeg: true},
  {name: 'Ian', gold: 10, hasWoodenLeg: false},
];

var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirateHorde.getSumGold()); // 25
console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']