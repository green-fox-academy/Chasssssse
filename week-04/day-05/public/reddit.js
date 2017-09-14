'use strict'

window.onload = function() {
    MainPage();
}

function MainPage() {
    document.querySelector('main').innerHTML = '';
    var http = new XMLHttpRequest();
    http.open("GET", 'http://localhost:2000/posts');
    http.send(null);   

    var Posts;
    document.getElementById('h1').addEventListener('click', function() {
        post();
    });

    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            console.log(JSON.parse(http.response));
            Posts = JSON.parse(http.response).posts;
            Posts.forEach(function(element, index) {
                CreateNewBox(element.title, element.href, element.timestamp, element.owner, element.score, index + 1, element.id);
            }, this);
        }     
    } 

}

function CreateNewBox(_title, _href, _time, _author, _score, i, _id) {
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

    var title = document.createElement('a');
    title.classList.add('title');
    title.href = _href;
    title.textContent = _title;
    box.appendChild(title); 

    var timestamp = document.createElement('p');
    var author = _author === null ? 'anonymous' : _author;
    timestamp.classList.add('time');
    timestamp.id = 'a' + _id;
    timestamp.textContent = 'submitted ' + CalculateTimeInterval(_time) + ' ago by ' + author;
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

    setInterval(function() {
        if (document.getElementById('a' + _id.toString())){
            document.getElementById('a' + _id.toString()).textContent = 'submitted ' + CalculateTimeInterval(_time) + ' ago by ' + author;
        }
    }, 60000);
    UpVote(up, i, _id);
    DownVote(down, i, _id);
    DeletePost(remove, _id);
    modify.addEventListener('click', function() {
        ModifyPost(_id);
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
    nav.style.height = '7%';
    nav.style.width = '100%';
    nav.style.margin = '0';
    nav.style.borderBottom = '3px solid #5B96CE';
    container.appendChild(nav);

    var p1 = document.createElement('p');
    p1.style.display = 'inline-block';
    p1.textContent = 'submit to';
    p1.style.margin = '3px 5px 0 0';
    nav.appendChild(p1);
    var p2 = document.createElement('a');
    p2.style.display = 'inline-block';
    p2.textContent = 'the page';
    nav.appendChild(p2);

    var url = document.createElement('div');
    url.style.height = '20%';
    url.style.width = '100%';
    url.style.padding = '0 0 0 5px';
    url.style.margin = '10px 0 10px 0';
    url.style.background = '#CEE3F8';
    container.appendChild(url);

    var url_text = document.createElement('p');
    url_text.style.margin = '5px 0 1px 3px';
    url_text.textContent = 'url';
    url.appendChild(url_text);

    var url_input = document.createElement('input');
    url_input.setAttribute('type', 'text');
    url_input.id = '_url';
    url_input.style.margin = '0 25px 0 3px';
    url_input.style.width = '90%';
    url.appendChild(url_input);

    var title = document.createElement('div');
    title.style.height = '48%';
    title.style.width = '100%';
    title.style.padding = '0 0 0 5px';
    title.style.marginBottom = '10px';
    title.style.background = '#CEE3F8';
    container.appendChild(title);

    var star = document.createElement('span');
    star.style.display = 'inline-block';
    star.style.color = 'red';
    star.style.marginLeft = '3px';
    star.textContent = '*';
    title.appendChild(star);

    var title_text = document.createElement('p');
    title_text.style.display = 'inline-block';
    title_text.style.margin = '2px 2px 1px 0';
    title_text.textContent = 'title';
    title.appendChild(title_text);  

    var title_input = document.createElement('input');
    title_input.setAttribute('type', 'text');
    title_input.id = '_title';
    title_input.style.margin = '0 25px 0 3px';
    title_input.style.width = '90%';
    title_input.style.height = '70%'
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
        SendPost();
    });
}

function SendPost() {
    var _url = document.getElementById('_url').value;
    var _title = document.getElementById('_title').value;
    var current_time = new Date();
    var information = {'title': _title, 'href': _url}; 
    if (_title != ''){
        var http = new XMLHttpRequest();
        http.open("POST", 'http://localhost:2000/posts');
        http.setRequestHeader('Accept', 'application/json');
        http.setRequestHeader("Content-Type", "application/json");
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('Linked successfully');
                MainPage();  
            } 
        }    
        http.send(JSON.stringify(information));  
    }    
    else {
        alert("Ttile can't be blank");
    } 
}


function UpVote(up, i, _id) {
    up.addEventListener('click', function() {
        up.style.background = "url('images/upvoted.png') no-repeat center"; 
        var score = document.querySelector('.score.a' + i.toString()).textContent;
        document.querySelector('.score.a' + i.toString()).style.color = 'orange';
        var http = new XMLHttpRequest();
        http.open("PUT", 'http://localhost:2000/posts/' + _id + '/upvote'); 
        http.setRequestHeader('Accept', 'application/json');
        http.send(JSON.stringify(_id.toString()));
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('voted successfully'); 
                MainPage();
            } 
        } 
    })
}

function DownVote(down, i, _id) {
    down.addEventListener('click', function() {
        down.style.background = "url('images/downvoted.png') no-repeat center"; 
        var score = document.querySelector('.score.a' + i.toString()).textContent;
        document.querySelector('.score.a' + i.toString()).style.color = 'blue';
        var http = new XMLHttpRequest();
        http.open("PUT", 'http://localhost:2000/posts/' + _id + '/downvote'); 
        http.setRequestHeader('Accept', 'application/json');
        http.send();
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('voted successfully'); 
                MainPage(); 
            } 
        } 
    })
}

function DeletePost(remove, _id) {
    remove.addEventListener('click', function() {
        var http = new XMLHttpRequest();
        http.open("DELETE", 'http://localhost:2000/posts/' + _id); 
        http.setRequestHeader('Accept', 'application/json');
        http.send();
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) { 
                console.log('deleted successfully');  
                MainPage();
            } 
        }         
    });

}

function ModifyPost(_id) {
    var http = new XMLHttpRequest();
    http.open("GET", 'http://localhost:2000/posts');
    http.send(null);   

    var Posts;
    var title_default, url_default;
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            Posts = JSON.parse(http.response).posts;
            console.log(Posts);
            Posts.forEach(function(element, index) {
                if (element.id === _id) {
                    url_default = element.href;
                    title_default = element.title;

                    document.querySelector('main').innerHTML = '';

                    var container = document.createElement('div');
                    container.id = 'modify_post';
                    container.style.height = '300px';
                    container.style.width = '450px';
                    document.querySelector('main').appendChild(container);

                    var nav = document.createElement('nav');
                    nav.style.height = '10%';
                    nav.style.width = '100%';
                    nav.style.margin = '5px 4px 0 0';
                    nav.style.borderBottom = '3px solid #5B96CE';
                    nav.textContent = 'modify post #' + _id;
                    container.appendChild(nav);

                    var url = document.createElement('div');
                    url.style.height = '20%';
                    url.style.width = '100%';
                    url.style.padding = '0 0 0 5px';
                    url.style.margin = '10px 0 10px 0';
                    url.style.background = '#CEE3F8';
                    container.appendChild(url);

                    var url_text = document.createElement('p');
                    url_text.style.margin = '5px 0 1px 3px';
                    url_text.textContent = 'url';
                    url.appendChild(url_text);

                    var url_input = document.createElement('input');
                    url_input.setAttribute('type', 'text');
                    url_input.id = '_url';
                    url_input.style.margin = '0 25px 0 3px';
                    url_input.style.width = '90%';
                    url_input.value = url_default;
                    url.appendChild(url_input);

                    var title = document.createElement('div');
                    title.style.height = '48%';
                    title.style.width = '100%';
                    title.style.padding = '0 0 0 5px';
                    title.style.marginBottom = '10px';
                    title.style.background = '#CEE3F8';
                    // title.textContent = 'title';
                    container.appendChild(title);

                    var star = document.createElement('span');
                    star.style.display = 'inline-block';
                    star.style.color = 'red';
                    star.style.marginLeft = '3px';
                    star.textContent = '*';
                    title.appendChild(star);

                    var title_text = document.createElement('p');
                    title_text.style.display = 'inline-block';
                    title_text.style.margin = '2px 2px 1px 0';
                    title_text.textContent = 'title';
                    title.appendChild(title_text);  

                    var title_input = document.createElement('input');
                    title_input.setAttribute('type', 'text');
                    title_input.id = '_title';
                    title_input.style.margin = '0 25px 0 3px';
                    title_input.style.width = '90%';
                    title_input.style.height = '70%'
                    title_input.value = title_default;
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
                            
                            http.open("PUT", 'http://localhost:2000/posts/' + _id); 
                            http.setRequestHeader('Accept', 'application/json');
                            http.setRequestHeader('Content-Type', 'application/json');
                            http.send(JSON.stringify(information));  
                            http.onreadystatechange = function() {
                                if (http.readyState === 4 && http.status === 200) { 
                                    console.log('modified successfully');  
                                    MainPage();
                                } 
                            }          
                    });
                }
            }, this);
        }     
    } 

}

function CalculateTimeInterval(date) {
    var years, months, days, hours, mins, seconds;
    seconds = Math.floor((new Date() - date) / 1000);
    years = Math.floor(seconds / 31536000);
    months = Math.floor(seconds / 2592000);
    days = Math.floor(seconds / 86400);
    hours = Math.floor(seconds / 3600);
    mins = Math.floor(seconds / 60);
    if (years > 1) {
        return years + ' '.concat('years');
    }
    else if (years < 1 && months >1) {
        return months + ' '.concat('months');
    }
    else if (months < 1 && days >1) {
        return days + ' '.concat('days');
    }
    else if (days < 1 && mins > 1) {
        return mins + ' '.concat('minutes');
    }
    else if (mins < 1) {
        return seconds  + ' '.concat('seconds');
    }
}
