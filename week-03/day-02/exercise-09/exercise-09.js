// Click Three Times

// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 
// 5 seconds is already elapsed since the page is loaded, 
// a text should appear under the button: 5 seconds elapsed and clicked 3 times


var buttonElement;
window.addEventListener('load', function() {

    buttonElement = document.createElement('button');
    buttonElement.appendChild(document.createTextNode('Button'));
    buttonElement.setAttribute('id', 'elapsed');
    document.body.appendChild(buttonElement);
    setTimeout(function() {
        buttonElement.addEventListener('click', elapse);
    },5000);
});


var i = 0;

function elapse() {
    
    i++;
    console.log(i);
    if (i==3) {
        var text;
        text = document.createElement('p');
        text.appendChild(document.createTextNode('5 seconds elapsed and clicked 3 times'));
        document.body.appendChild(text);
        i = 0;
    }
}