'use strict'

window.onload = function() {
    document.querySelector('.spin').addEventListener('mouseover', function() {
        spin();
    });
    document.querySelector('.spin').addEventListener('mouseout', function() {
        reverse();
    });

}

function spin() {
    var block = document.querySelector('.spin');
    document.getElementById('text').style.color = 'salmon';
    block.style.cursor = 'pointer';
    block.style.transform = 'rotate(45deg)';  
}

function reverse() {
    var block = document.querySelector('.spin');
    document.getElementById('text').style.color = 'black';
    block.style.transform = 'none';
}
