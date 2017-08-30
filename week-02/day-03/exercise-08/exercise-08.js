'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
if (lineCount%2==1)
{
    for (var i=1; i<(lineCount+3)/2; i++)
    {
        console.log(' '.repeat((lineCount+1)/2 - i) + '*'.repeat(i * 2 - 1) + ' '.repeat((lineCount+1)/2 - i));
    }
    for (var i=(lineCount+1)/2; i>1; i--)
    {
        console.log(' '.repeat((lineCount+3)/2 - i) + '*'.repeat(i * 2 - 3) + ' '.repeat((lineCount+3)/2 - i));
    }
}
else if (lineCount%2==0)
{
    for (var i=1; i<lineCount/2+1; i++)
    {
        console.log(' '.repeat(lineCount/2 - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(lineCount/2 - i));
    }
    for (var i=lineCount/2; i>0; i--)
    {
        console.log(' '.repeat(lineCount/2 - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(lineCount/2 - i));
    }
}