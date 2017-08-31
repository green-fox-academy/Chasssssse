var para = document.querySelectorAll('p');

for (var i=0; i<para.length; i++) {
    str = '.' + para[i].className;
    document.querySelector(str).innerHTML = document.querySelector('.dog').textContent;
}