'use strict';

var width, length, height;

function cuboid(w, l, h) {
    width = w;
    length = l;
    height = h;

    var surface = 2*( w * l + w * h + h * l );
    var volume = w * l * h;

    console.log('surface area: ' + surface);
    console.log('volume: ' + volume);
}
cuboid(10, 10, 10);
console.log('width: ' + width);
console.log('length: ' + length);
console.log('height: ' + height);