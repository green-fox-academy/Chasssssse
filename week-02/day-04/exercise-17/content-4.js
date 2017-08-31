var list = ['apple', 'banana', 'cat', 'dog'];

list.forEach(function(element, index) {
    document.querySelectorAll('ul>li')[index].textContent = element;
});