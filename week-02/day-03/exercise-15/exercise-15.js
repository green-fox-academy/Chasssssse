'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(n) {
    var s = 0;
    for (var i=1; i<n+1; i++)
    {
        s = s + i;
    }
    return s;
}

console.log(sum(10));