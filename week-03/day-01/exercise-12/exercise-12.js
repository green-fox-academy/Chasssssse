// Rocket

// Create a Rocket class.
// It should take 3 parameters in its constructor
// 1st parameter: the type of the rocket as a string, "falcon1" or "falcon9".
// 2nd parameter: the starting fuel level as a number, defaults to 0.
// 3rd parameter: number of launches as a number, defaults to 0.
// It should have 3 methods:
// launch()
// it should use 1 fuel if it's a falcon1 and 9 fuels if it's a falcon9.
// it should increment the launches by one if it had enough fuel for the launch.
// refill()
// it should refill the rocket's fuel level to 5 if falcon1 and to 20 if falcon9.
// it should return the amount of fuel used for the refill.
// example: if the rocket is a falcon1 and has fuel level 3, then it should return 2.
// getStats()
// it should return its stats as a string like: "name: falcon9, fuel: 11, launches: 1"

function Rocket(type, fuelLevel, launches) {
    this.type = type;
    this.fuelLevel = fuelLevel||0;
    this.launches = launches||0;
    this.launch = function() {
        if (this.type == 'falcon1') {
            this.fuelLevel --;
        }
        else if (this.type == 'falcon9') {
            this.fuelLevel -= 9;
        }

        this.launches ++;
    };
    this.refill = function() {
        var initial_fuel = this.fuelLevel;
        if (this.type == 'falcon1') {
            this.fuelLevel = 5;
        }
        else if (this.type == 'falcon9') {
            this.fuelLevel = 20;
        }
        return (this.fuelLevel - initial_fuel)
    };
    this.getStats = function() {
        var stats = `name: ${this.type}, fuel: ${this.fuelLevel}, launches; ${this.launches}`;
        console.log(stats);
        return stats
    }
}

var r = new Rocket('falcon9', 0, 0);
r.refill();
r.getStats();
r.launch();
r.getStats();



// SpaceX

// Create a SpaceX class.
// it should take 1 parameter in its constructor: the stored fuel
// it should have 4 methods:
// addRocket(rocket)
// it should add a new rocket to SpaceX that is given in its first parameter
// refillAll()
// it should refill all of its rockets with fuel and subtract the needed fuel from the storage
// launchAll()
// it should launch all the rockets
// buyFuel(amount)
// it should increase stored fuel by amount
// getStats()
// it should return its stats as a sting like: "rockets: 3, fuel: 100, launches: 1"

function SpaceX(fuel) {
    this.fuel = fuel;
    this.rockets = [];
    this.launches = 0;
    this.addRocket = function(rocket) {
        this.rockets.push(rocket);
    };
    this.refillAll = function() {
        this.rockets.forEach(function(element) {
            var cost = element.refill();
            console.log(cost);
            this.fuel -= cost;
        }, this);
    };
    this.launchAll = function() {
        this.rockets.forEach(function(element) {
            element.launch();
            this.launches ++;
        }, this);
    };
    this.buyFuel = function(amount) {
        this.fuel += amount;
    };
    this.getStats = function() {
        var stats = `rockets: ${this.rockets}, fuel: ${this.fuel}, launches: ${this.launches}`;
        console.log(stats);
        return stats

    }
}

var s = new SpaceX(1000);
s.addRocket(r);
s.refillAll();
s.launchAll();
console.log(s.fuel);
s.getStats();