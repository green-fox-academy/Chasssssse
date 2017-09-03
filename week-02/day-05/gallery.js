var imgs = [
  {
    src: 'images/Brandenburg Gate.jpg',
    src2: 'images/Brandenburg Gate1.jpg',
    title: 'Brandenburg Gate',
    description: 'The Brandenburg Gate (German: Brandenburger Tor) is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the (temporarily) successful restoration of order during the early Batavian Revolution. One of the best-known landmarks of Germany, it was built on the site of a former city gate that marked the start of the road from Berlin to the town of Brandenburg an der Havel, which used to be capital of the Margraviate of Brandenburg.'
  },  
  {
    src: 'images/St. Vitus Cathedral.jpg',
    src2: 'images/St. Vitus Cathedral1.jpg',
    title: 'St. Vitus Cathedral',
    description: 'The Metropolitan Cathedral of Saints Vitus, Wenceslaus and Adalbert (Czech: metropolitní katedrála svatého Víta, Václava a Vojtěcha) is a Roman Catholic metropolitan cathedral in Prague, the seat of the Archbishop of Prague. Until 1997, the cathedral was dedicated only to Saint Vitus, and is still commonly named only as St. Vitus Cathedral.'
  },
  {
    src: 'images/charles bridge.jpg',
    src2: 'images/charles bridge1.jpg',
    title: 'Charles Bridge',
    description: 'Charles Bridge is an historic bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under the auspices of King Charles IV, and finished in the beginning of the 15th century. The bridge replaced the old Judith Bridge built 1158–1172 that had been badly damaged by a flood in 1342. This new bridge was originally called Stone Bridge (Kamenný most) or Prague Bridge (Pražský most) but has been "Charles Bridge" since 1870. '
  },
  {
    src: 'images/Casa Milà.jpg',
    src2: 'images/Casa Milà1.jpg',
    title: 'Casa Milà',
    description: 'Casa Milà, popularly known as La Pedrera or "open quarry", a reference to its unconventional rough-hewn appearance, is a modernist building in Barcelona, Catalonia, Spain. It was the last private residence designed by architect Antoni Gaudí and was built between 1906 and 1910.'
  },
  {
    src: 'images/Tempelhof Feld.jpg',
    src2: 'images/Tempelhof Feld1.jpg',
    title: 'Tempelhof Feld',
    description: 'Tempelhof Feld was one of the airports in Berlin, Germany. Situated in the south-central Berlin borough of Tempelhof-Schöneberg, the airport ceased operating in 2008 amid controversy, leaving Tegel and Schönefeld as the two main airports serving the city, with the new Berlin Brandenburg Airport still under construction as of 2017.'
  },
  {
    src: 'images/Piazza Venezia.jpg',
    src2: 'images/Piazza Venezia1.jpg',
    title: 'Piazza Venezia',
    description: 'Piazza Venezia  is the central hub of Rome, Italy, in which several thoroughfares intersect, including the Via dei Fori Imperiali and the Via del Corso. It takes its name from the Palazzo Venezia, built by the Venetian Cardinal, Pietro Barbo (later Pope Paul II) alongside the church of Saint Mark, the patron saint of Venice. The Palazzo Venezia served as the embassy of the Republic of Venice in Rome.'
  },
  {
    src: 'images/Copenhagen Central Station.jpg',
    src2: 'images/Copenhagen Central Station1.jpg',
    title: 'Copenhagen Central Station',
    description: 'Copenhangen Central Station, (Danish: Københavns Hovedbanegård, abbreviated København H) is the main railway station in Copenhagen, Denmark and the largest railway station in Denmark. It is situated between the districts of Indre By and Vesterbro with entrances from Bernstorffsgade (at Tivoli Gardens), Banegårdspladsen, Reventlowsgade and access to platforms from Tietgensgade.'
  },
  {
    src: 'images/Barcelona.jpg',
    src2: 'images/Barcelona1.jpg',
    title: 'Barcelona City',
    description: 'Barcelona, is a city in Spain and the capital and largest city of Catalonia, an autonomous community in, and the country\'s second most populous municipality, with a population of 1.6 million within city limits. Its urban area extends beyond the administrative city limits with a population of around 4.7 million people, being the sixth most populous urban area in the European Union after Paris, London, Madrid, the Ruhr area and Milan. It is the largest metropolis on the Mediterranean Sea, located on the coast between the mouths of the rivers Llobregat and Besòs.'
   },
   {
     src: 'images/St. Stephen\'s Cathedral.jpg',
     src2: 'images/St. Stephen\'s Cathedral1.jpg',
     title: 'St. Stephen\'s Cathedral',
     description: 'St. Stephen\'s Cathedral (more commonly known by its German title: Stephansdom) is the mother church of the Roman Catholic Archdiocese of Vienna and the seat of the Archbishop of Vienna, Christoph Cardinal Schönborn, OP. The current Romanesque and Gothic form of the cathedral, seen today in the Stephansplatz, was largely initiated by Duke Rudolf IV (1339–1365) and stands on the ruins of two earlier churches, the first a parish church consecrated in 1147.'
   },
   {
     src: 'images/Hamburg Rathaus.jpg',
     src2: 'images/Hamburg Rathaus1.jpg',
     title: 'Hamburg Rathaus',
     description: 'The Hamburg Rathaus is the Rathaus—the city hall or town hall—of the Free and Hanseatic City of Hamburg, Germany. It is the seat of the government of Hamburg and as such, the seat of one of Germany\'s 16 state parliaments. The Rathaus is located in the Altstadt quarter in the city center, at the Rathausmarkt square, and near the lake Binnenalster and the central station.'
   } 
]

// set default
var imgNum = 7; // imgs.length;
var imgNum1 = imgs.length;
var firstpic = document.querySelector('#img1');
var secondpic = document.querySelector('#img2');
var thirdpic = document.querySelector('#img3');
var forthpic = document.querySelector('#img4');
var fifthpic = document.querySelector('#img5');
var sixthpic = document.querySelector('#img6');
var seventhpic = document.querySelector('#img7');

var collection = [firstpic, secondpic, thirdpic, forthpic, fifthpic, sixthpic, seventhpic];
var collection_id = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];
var title = document.querySelector('.title');
var description = document.querySelector('.description');
var mainpic = document.querySelector('.mainpic'); 

mainpic.setAttribute('src', imgs[0].src);

for (var i=0; i<imgNum; i++) {
  collection[i].setAttribute('src', imgs[i].src2);
}

title.textContent = imgs[0].title;
description.textContent = imgs[0].description;

var elementStyle = document.getElementById('img1').style;
elementStyle.marginTop = '-4px';
elementStyle.boxShadow = '9px 10px 5px #5d5d5c';


// right 
function browsing_right() {
  var j;
  imgs.forEach(function(element, index) {
    if (mainpic.getAttribute('src') == element.src) {
      j = index;
    }
  });
  if (thumbnails[6].getAttribute('src') == imgs[j].src2) {
    scrollLeft();
  }
  var src = mainpic.getAttribute('src');
  var i = 0;
  imgs.forEach(function(element,index) {
    if (element.src == src) {
      i = index;
    }
  });
  if (i == imgNum1 - 1) {
    mainpic.setAttribute('src', imgs[0].src);
    title.textContent = imgs[0].title;
    description.textContent = imgs[0].description;
  } else {
    mainpic.setAttribute('src', imgs[i + 1].src);
    title.textContent = imgs[i + 1].title;
    description.textContent = imgs[i + 1].description;
  }
  mainpic_standout();
}

// left
function browsing_left() {
  var j;
  imgs.forEach(function(element, index) {
    if (mainpic.getAttribute('src') == element.src) {
      j = index;
    }
  });
  if (thumbnails[0].getAttribute('src') == imgs[j].src2) {
    scrollRight();
  }
  var src = mainpic.getAttribute('src');
  var i = 0;
  imgs.forEach(function(element,index) {
    if (element.src == src) {
      i = index;
    }
  });
  if (i == 0) {
    mainpic.setAttribute('src', imgs[imgNum1 - 1].src);
    title.textContent = imgs[imgNum1 - 1].title;
    description.textContent = imgs[imgNum1 - 1].description;
  } else {
    mainpic.setAttribute('src', imgs[i - 1].src);
    title.textContent = imgs[i - 1].title;
    description.textContent = imgs[i - 1].description;
  }
  mainpic_standout();
}

function scrollLeft() {
  var src = document.getElementById('img7').getAttribute('src');
  var i = imgs.length - 1;
  var j = 0;
  for (var k = 0; k < 7; k++) {
    if (collection[k].getAttribute('src') == imgs[i].src2) {
      collection[k].setAttribute('src', imgs[0].src2);
    }
    else {
      imgs.forEach(function(element, index) {
        if (collection[k].getAttribute('src') == element.src2) {
          j = index;
        }
      });
      collection[k].setAttribute('src', imgs[j + 1].src2);
    }
  };
  mainpic_standout();
}

function scrollRight() {
  var src = document.getElementById('img1').getAttribute('src');
  var i = imgs.length - 1;
  var j = 0;
  for (var k = 0; k < 7; k++) {
    if (collection[k].getAttribute('src') == imgs[0].src2) {
      collection[k].setAttribute('src', imgs[i].src2);
    }
    else {
      imgs.forEach(function(element, index) {
        if (collection[k].getAttribute('src') == element.src2) {
          j = index;
        }
      });
      collection[k].setAttribute('src', imgs[j - 1].src2);
    }
  };
  mainpic_standout();
}

/////////////////////////////////////////////////////////////////////
var rightb = document.querySelector('.rightb');
var leftb = document.querySelector('.leftb');
rightb.addEventListener('click', browsing_right, false);
leftb.addEventListener('click', browsing_left, false);

var leftS = document.querySelector('.scrollLeft');
var rightS = document.querySelector('.scrollRight');
leftS.addEventListener('click', scrollLeft, false);
rightS.addEventListener('click', scrollRight, false);



function select(obj) {
  var src = document.getElementById(obj.id).getAttribute('src');
  imgs.forEach(function(element, index) {
    if (src == element.src2) {
      mainpic.setAttribute('src', imgs[index].src);
      title.textContent = imgs[index].title;
      description.textContent = imgs[index].description;     
    }
  });
  
}

var thumbnails = [];
collection_id.forEach(function(element, index) {
  thumbnails[index] = document.getElementById(element);
});

function standout(element) {
  if (element.style.marginTop == '-4px') {}
  else {
    boxShadow1(element);
    
  }
    thumbnails.forEach(function(ele, index) {
      if (element!=ele) {
        boxShadow2(ele);
      }
    });  
};

function standback(element) {
  element.style.marginTop = '0';
  element.style.boxShadow = '6px 7px 3px #888888';
  mainpic_standout();
}

thumbnails.forEach(function(element) {
  element.addEventListener('mouseover', function() {standout(element)}, false);
});


thumbnails.forEach(function(element) {
  element.addEventListener('mouseout', function() {standback(element)}, false);
});

function mainpic_standout() {
  thumbnails.forEach(function(element) {
    boxShadow2(element);
  });
  var i;
  var src = mainpic.getAttribute('src');
  imgs.forEach(function(element, index) {
    if (src == element.src) {
      i = index;
    }
  });

  thumbnails.forEach(function(element, index) {
    
    if (element.getAttribute('src') == imgs[i].src2) {
      boxShadow1(element);
    }
  });
}


function boxShadow1(element) {
  element.style.marginTop = '-4px';
  element.style.boxShadow = '9px 10px 5px #5d5d5c';
}

function boxShadow2(element) {
  element.style.marginTop = '0';
  element.style.boxShadow = '6px 7px 3px #888888';
}

function scroll() {

}