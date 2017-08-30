'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (var i=1; i<lineCount+1; i++)
{   
    var str=' '.repeat(lineCount);
    var arr = str.split('');
    if (i==1||i==lineCount)
    {
        console.log('%'.repeat(lineCount));
    }
    else
    {   
        arr[0] = '%';
        arr[i] = '%';
        arr[lineCount-1] = '%';
        var newstr = arr.join('');
        console.log(newstr);
    }
}

