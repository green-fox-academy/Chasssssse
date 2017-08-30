'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(n) {
    var fac = 1;
    for (var i=1; i<n+1; i++)
    {
        fac *= i;
    }
    return fac;
}

console.log(factorio(5));