// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

var n = 8;

for (var i=1; i<n+1; i++)
{
    var str = (i%2==1) 
        ? '% '.repeat(n/2) 
        : ' %'.repeat(n/2);
    
    // if (i%2==1)
    // {
    //     var str='% '.repeat(n/2);
    // }
    // else
    // {
    //     var str=' %'.repeat(n/2);
    // }
    console.log(str);
}