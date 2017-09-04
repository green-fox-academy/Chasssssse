'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

var CarStore = function(cars) {
    this.cars = cars;
    this.addCar = function(_type, _price, _year) {
        let car = {type: _type, price: _price, year: _year};
        this.cars.push(car);
    }
    this.getSumPrice = function() {
        var sum = 0;
        this.cars.forEach(function(element) {
            sum += element.price;
        });
        return sum
    }
    this.getOldestCarType = function() {
        var yr = this.cars[0].year;
        var type = this.cars[0].type;
        this.cars.forEach(function(element, index) {
            if (element.year < yr) {
                yr = element.year;
                type = element.type;
            }
        });
        return type;
        
    }
    this.deleteCarByType = function(type) {
        this.cars = this.cars.filter(function (_type) {
        return _type.type !== type;
        })
    }
}

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);
carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000