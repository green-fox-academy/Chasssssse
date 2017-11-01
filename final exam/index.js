var list = [1, 2, 3, 1, 2, 3];

function removeDuplications(list) {
    var newList =[list[0]];
    for (var i=1; i<list.length; i++) {
        console.log(i);
        if (!newList.includes(list[i])) {
            newList.push(list[i]);
        }
    }
    return newList;
}

console.log(removeDuplications(list));