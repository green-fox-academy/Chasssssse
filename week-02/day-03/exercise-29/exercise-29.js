'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var n = 4;
var arr = new Array(n);

for (var i=0; i<n; i++)
{
    arr[i] = new Array(n);
}

for (var j=0; j<n; j++)
{
    for (var k=0; k<n; k++)
    {
        arr[j][k] = (j+k==n-1)
            ? 1
            : 0;
    }
}

for (i=0; i<n; i++)
{
    console.log(arr[i]);
}