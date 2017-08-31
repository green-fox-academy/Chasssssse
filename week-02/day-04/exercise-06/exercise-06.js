'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];

far.forEach(function(element, index) {
    far[index] = far[index]+'e';
})

console.log(far);