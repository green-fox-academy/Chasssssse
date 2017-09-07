var Data, _Data, pics, SWITCH;
SWITCH = Array(16).fill(false);
console.log(SWITCH);
window.onload = function() {
  var inputbox = document.createElement("input");
  document.body.appendChild(inputbox);
  var search_button = document.createElement("button");
  search_button.textContent = "Search";
  document.body.appendChild(search_button);
  search_button.addEventListener("click", function() {
    if (document.getElementById('a')) {
      document.body.removeChild(document.getElementById('a'));
    }
    var http = new XMLHttpRequest();
    http.open(
      "GET",
      "https://api.giphy.com/v1/gifs/search?api_key=1909d9d600084ecf82a9ae032b658c77&q=" + inputbox.value + "&limit=25&offset=0&rating=G&lang=en");
    http.send(null);
    var division = document.createElement("div");
    division.style.width = "800px";
    division.style.height = "400px";
    division.id = 'a';
    document.body.appendChild(division);
    
    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        console.log(JSON.parse(http.response));
        Data = JSON.parse(http.response).data;
        _Data = JSON.parse(http.response).data;
        _Data.length = 16;
        pics = _Data.map(function(element, index) {
          if (index < 16) {
            var pic;
            pic = document.createElement("img");
            pic.src = element.images.fixed_width_small_still.url;
            pic.id = index;
            pic.addEventListener(
              "click",
              function(event) {
                select(event.target);
              },
              false
            );
            pic.addEventListener(
              "mouseover",
              function(event) {
                hoveron(event.target);
              },
              false
            );
            pic.addEventListener(
              "mouseout",
              function(event) {
                hoverout(event.target);
              },
              false
            );
          }
          return pic;
        });

        pics.forEach(function(element) {
          division.appendChild(element);
        });
      }
    };
  });
};


function select(obj) {
  var _src = obj.src;
  _Data.forEach(function(element, index) {
    if (
      _src === element.images.fixed_width_small.url &&
      SWITCH[index] === false
    ) {
      pics[index].src = element.images.fixed_width_small.url;
      SWITCH[index] = true;
      console.log(SWITCH);
    } else if (
      _src === element.images.fixed_width_small.url &&
      SWITCH[index] === true
    ) {
      pics[index].src = element.images.fixed_width_small_still.url;
      SWITCH[index] = false;
    }
  });
}

function hoveron(obj) {
  var _src = obj.src;
  _Data.forEach(function(element, index) {
    if (_src === element.images.fixed_width_small_still.url) {
      pics[index].src = element.images.fixed_width_small.url;
    }
  });
}

function hoverout(obj) {
  var _src = obj.src;
  _Data.forEach(function(element, index) {
    if (
      _src === element.images.fixed_width_small.url &&
      SWITCH[index] === false
    ) {
      pics[index].src = element.images.fixed_width_small_still.url;
    }
  });
}
