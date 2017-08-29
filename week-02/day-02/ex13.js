'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

function remainingSec()
{
    var Hoursleft = 23 - currentHours;
    var Minsleft = 59 - currentMinutes;
    var Secondsleft = 60 - currentSeconds;

    console.log(Hoursleft*60*60 + Minsleft*60 + Secondsleft);
}

remainingSec();