'use strict'

window.onload = function() {
    main_page();
}

function main_page() {
    document.querySelector('main').innerHTML = '';
    var http = new XMLHttpRequest();
    http.open("GET", 'https://time-radish.glitch.me/posts');
    http.send(null);   

    var Posts;
    document.getElementById('h1').addEventListener('click', function() {
        post();
    });

    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            Posts = JSON.parse(http.response).posts;
            console.log(Posts);
            Posts.forEach(function(element, index) {
                Create_posts_box(element.title, element.timestamp, element.owner, element.score, index + 1, element.id);
            }, this);
        }  
        
    } 
}

function Create_posts_box(_title, _time, _author, _score, i, _id) {
    var box = document.createElement('div');
    box.classList.add('container');
    document.querySelector('main').appendChild(box)

    var index = document.createElement('div');
    index.classList.add('index');
    index.textContent = i;
    box.appendChild(index);

    var updown = document.createElement('div');
    updown.classList.add('vote');
    box.appendChild(updown);  

    var up = document.createElement('div');
    up.classList.add('up');
    up.classList.add('a' + i.toString());
    updown.appendChild(up);

    var score = document.createElement('div');
    score.classList.add('score');
    score.classList.add('a' + i.toString());
    score.textContent = _score;
    updown.appendChild(score);   

    var down = document.createElement('div');
    down.classList.add('down');
    down.classList.add('a' + i.toString());
    updown.appendChild(down);    

    var title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = _title;
    box.appendChild(title); 

    var timestamp = document.createElement('p');
    var author = _author === null ? 'anonymous' : _author;
    timestamp.classList.add('time');
    timestamp.textContent = 'submitted ' + _time + ' ago by ' + author;
    box.appendChild(timestamp);

    var modification = document.createElement('div');
    modification.classList.add('modification');
    box.appendChild(modification);

    var modify = document.createElement('p');
    modify.id = 'modify';
    modify.style.cssFloat = 'left';
    modify.textContent = 'modify';
    modify.style.margin = '0 20px 0 0';
    modification.appendChild(modify);
    var remove = document.createElement('p');
    remove.id = 'remove';
    remove.style.cssFloat = 'left';
    remove.textContent = 'delete';
    remove.style.margin = '0 20px 0 0';
    modification.appendChild(remove);

    up_vote(up, i, _id);
    down_vote(down, i, _id);
    delete_post(remove, _id);
    modify.addEventListener('click', function() {
        modify_page(_id);
    });
}

function post() {
    document.querySelector('main').innerHTML = '';

    var container = document.createElement('div');
    container.id = 'post';
    container.style.height = '400px';
    container.style.width = '450px';
    document.querySelector('main').appendChild(container);

    var nav = document.createElement('nav');
    nav.style.height = '8%';
    nav.style.width = '100%';
    nav.style.margin = '0';
    nav.style.borderBottom = '2px solid blue';
    container.appendChild(nav);

    var p1 = document.createElement('p');
    p1.style.display = 'inline-block';
    p1.textContent = 'submit to';
    p1.style.margin = '0 5px 0 0';
    nav.appendChild(p1);
    var p2 = document.createElement('a');
    p2.href = 'Reddit.html';
    p2.id = 'backtoMain';
    p2.style.color = 'blue';
    p2.style.display = 'inline-block';
    p2.textContent = 'the page';
    nav.appendChild(p2);

    var url = document.createElement('div');
    url.style.height = '20%';
    url.style.width = '100%';
    url.style.padding = '0 0 0 5px';
    url.style.margin = '10px 0 10px 0';
    url.style.background = '#CEE3F8';
    url.textContent = 'url';
    container.appendChild(url);

    var url_input = document.createElement('input');
    url_input.setAttribute('type', 'text');
    url_input.id = 'url';
    url_input.style.margin = '0 25px 0 0px';
    url_input.style.width = '90%';
    url.appendChild(url_input);

    var title = document.createElement('div');
    title.style.height = '24%';
    title.style.width = '100%';
    title.style.padding = '0 0 0 5px';
    title.style.marginBottom = '10px';
    title.style.background = '#CEE3F8';
    title.textContent = 'title';
    container.appendChild(title);

    var title_input = document.createElement('input');
    title_input.setAttribute('type', 'text');
    title_input.id = 'title';
    title_input.style.margin = '0 25px 0 0px';
    title_input.style.width = '90%';
    title_input.style.height = '60%'
    title.appendChild(title_input);

    var option = document.createElement('div');
    option.style.height = '20%';
    option.style.width = '100%';
    option.style.padding = '5px 0 0 5px';
    option.style.background = '#CEE3F8';
    option.textContent = 'Options';
    container.appendChild(option);   

    var anonymous = document.createElement('div');
    anonymous.style.height = '20%';
    anonymous.style.width = '100%';
    option.appendChild(anonymous);
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.style.display = 'inline-block';
    anonymous.appendChild(check);

    var anonymous_text = document.createElement('p');
    anonymous_text.textContent = 'post as anonymous';
    anonymous_text.style.display = 'inline-block';
    anonymous.appendChild(anonymous_text); 

    var submit = document.createElement('div');
    submit.style.height = '10%';
    submit.style.width = '100%';
    submit.textContent = '*required'
    container.appendChild(submit); 

    var submit_button = document.createElement('button');
    submit_button.id = 'submitPost';
    submit_button.textContent = 'submit';
    container.appendChild(submit_button);

    document.getElementById('submitPost').addEventListener('click', function() {
        send_post();
    });
}

function send_post() {
    var _url = document.getElementById('url').value;
    var _title = document.getElementById('title').value;
    var information = {'title': _title, 'href': _url}; 
    if (_title != ''){
        var http = new XMLHttpRequest();
        http.open("POST", 'https://time-radish.glitch.me/posts');
        http.setRequestHeader('Accept', 'application/json');
        http.setRequestHeader("Content-Type", "application/json");
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('Linked successfully');
                main_page();  
            } 
        }    
        http.send(JSON.stringify(information));  
    }    
    else {
        alert("Ttile can't be blank");
    } 
}

function up_vote(up, i, _id) {
    up.addEventListener('click', function() {
        up.style.background = "url('images/upvoted.png') no-repeat center"; 
        var score = document.querySelector('.score.a' + i.toString()).textContent;
        document.querySelector('.score.a' + i.toString()).textContent = parseInt(score) + 1;
        document.querySelector('.score.a' + i.toString()).style.color = 'orange';
        var http = new XMLHttpRequest();
        http.open("PUT", 'https://time-radish.glitch.me/posts/' + _id + '/upvote'); 
        http.setRequestHeader('Accept', 'application/json');
        http.send();
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('voted successfully'); 
            } 
        } 
    })
}

function down_vote(down, i, _id) {
    down.addEventListener('click', function() {
        down.style.background = "url('images/downvoted.png') no-repeat center"; 
        var score = document.querySelector('.score.a' + i.toString()).textContent;
        document.querySelector('.score.a' + i.toString()).textContent = parseInt(score) - 1;
        document.querySelector('.score.a' + i.toString()).style.color = 'blue';
        var http = new XMLHttpRequest();
        http.open("PUT", 'https://time-radish.glitch.me/posts/' + _id + '/downvote'); 
        http.setRequestHeader('Accept', 'application/json');
        http.send();
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('voted successfully');  
            } 
        } 
    })
}

function delete_post(remove, _id) {
    remove.addEventListener('click', function() {
        var http = new XMLHttpRequest();
        http.open("DELETE", 'https://time-radish.glitch.me/posts/' + _id); 
        http.setRequestHeader('Accept', 'application/json');
        http.send();
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('deleted successfully');  
                main_page();
            } 
        }         
    });

}

function modify_page(_id) {
    document.querySelector('main').innerHTML = '';

    var container = document.createElement('div');
    container.id = 'modify_post';
    container.style.height = '300px';
    container.style.width = '450px';
    document.querySelector('main').appendChild(container);

    var nav = document.createElement('nav');
    nav.style.height = '10%';
    nav.style.width = '100%';
    nav.style.margin = '5px 0 0 0';
    nav.style.borderBottom = '2px solid blue';
    nav.textContent = 'modify post #' + _id;
    container.appendChild(nav);

    var url = document.createElement('div');
    url.style.height = '20%';
    url.style.width = '100%';
    url.style.padding = '0 0 0 5px';
    url.style.margin = '10px 0 10px 0';
    url.style.background = '#CEE3F8';
    url.textContent = 'url';
    container.appendChild(url);

    var url_input = document.createElement('input');
    url_input.setAttribute('type', 'text');
    url_input.id = '_url';
    url_input.style.margin = '0 25px 0 0px';
    url_input.style.width = '90%';
    url.appendChild(url_input);

    var title = document.createElement('div');
    title.style.height = '32%';
    title.style.width = '100%';
    title.style.padding = '0 0 0 5px';
    title.style.marginBottom = '10px';
    title.style.background = '#CEE3F8';
    title.textContent = 'title';
    container.appendChild(title);

    var title_input = document.createElement('input');
    title_input.setAttribute('type', 'text');
    title_input.id = '_title';
    title_input.style.margin = '0 25px 0 0px';
    title_input.style.width = '90%';
    title_input.style.height = '60%'
    title.appendChild(title_input);

    var required = document.createElement('div');
    required.style.height = '10%';
    required.style.width = '100%';
    required.textContent = '*required'
    required.style.fontSize = '12px';
    container.appendChild(required); 

    var modify_button = document.createElement('button');
    modify_button.id = 'submit_modification';
    modify_button.textContent = 'modify';
    container.appendChild(modify_button);

    modify_button.addEventListener('click', function() {
            var http = new XMLHttpRequest();
            var _url = document.getElementById('_url').value;
            var _title = document.getElementById('_title').value;
            var information = {'title': _title, 'href': _url}; 
            
            http.open("PUT", 'https://time-radish.glitch.me/posts/' + _id); 
            http.setRequestHeader('Accept', 'application/json');
            http.setRequestHeader('Content-Type', 'application/json');
            http.send(JSON.stringify(information));  
            http.onreadystatechange = function() {
                if (http.readyState === 4 && http.status === 200) { 
                    console.log('modified successfully');  
                    main_page();
                } 
            }         
           
    });
}