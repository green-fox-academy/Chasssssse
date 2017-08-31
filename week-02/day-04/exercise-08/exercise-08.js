'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1,2,3,4,5,6,8];

for (var i=0; i<numbers.length; i++) {
    numbers[i] == 7 ? console.log('Hoorray') : console.log('Noooooo');
    break;
}
