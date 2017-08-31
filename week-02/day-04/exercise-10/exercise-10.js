'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average


function morethan4(list) {
    list.forEach(function(element) {
        if (element.candies>4) {
            console.log(element.name);
        }
    });
}

function avCandies(list) {
    var n = 0;
    list.forEach(function(element) {
        n += element.candies
    });

    var av = n/students.length;
    console.log(av);
    return av;
}

morethan4(students);
avCandies(students);