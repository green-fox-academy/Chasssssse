var class_name = document.querySelectorAll('p');
if (class_name[2].classList.contains('cat')) {
    alert('YEAH CAT!');
}

if (class_name[3].classList.contains('dolphin')) {
    document.querySelector('.apple').innerHTML = 'pear';
}

if (class_name[0].classList.contains('apple')) {
    document.querySelector('.cat').innerHTML = 'dog';
}

document.querySelector('.apple').className = 'red';
document.querySelector('.balloon').style.borderRradius = 0;