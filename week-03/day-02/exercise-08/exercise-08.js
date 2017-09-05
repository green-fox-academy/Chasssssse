// Delayed Click

// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds elapsed


var buttonElement;
window.addEventListener('load', function() {


    buttonElement = document.createElement('button');
    buttonElement.appendChild(document.createTextNode('Button'));
    buttonElement.setAttribute('id', 'elapsed');
    document.body.appendChild(buttonElement);
    buttonElement.addEventListener('click', elapse);
});




function elapse() {
    setTimeout(function() {
        var text;
        text = document.createElement('p');
        text.appendChild(document.createTextNode('Text shows up in 2 seconds'));
        document.body.appendChild(text);
    }, 2000);
}