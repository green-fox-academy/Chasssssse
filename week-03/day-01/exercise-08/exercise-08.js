// Create an Animal constructor

// Every animal has a hunger value, which is a number
// Every animal has a thirst value, which is a number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one


// Create a Farm constructor

// Every farm has list of Animals
// Every farm has slots which defines the number of free places for animals
// Every farm can breed() which creates a new animal if there's place for it
// Every farm can slaughter() which removes the least hungry animal

function Animal() {
    this.hunger = 50;
    this.thirst = 50;

    this.eat = function() {
        this.hunger --;
    };

    this.drink = function() {
        this.thirst --;
    };
    this.play = function() {
        this.hunger ++;
        this.thirst ++;
    }
}

function Farm(slots) {
    this.list = [];
    this.slots = slots;
    this.breed = function() {
        if (this.slots>0) {
            var baby = new Animal();
            this.list.push(baby);
        }

    };
    this.slaughter = function() {
        var min = 50;
        var i = 0;
        this.list.forEach(function(element, index) {
            if (element.hunger < min) {
                min = element.hunger;
                i = index;
            }
        });

        this.list.splice(i, 1);

    }
}

var a = new Farm(10);
a.breed();
a.breed();
a.list[1].eat();
a.list[0].eat();
a.list[0].eat();
a.slaughter();
console.log(a.list)
