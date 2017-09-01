var imgs = [
  {
    src: 'images/old royal palace.jpg',
    title: 'Old Royal Palace',
    description: 'The Old Royal Palace (Czech: Starý královský palác) is part of the Prague Castle, Czech Republic. Its history dates back to the 12th century and it is designed in the Gothic and Renaissance styles. Its Vladislav Hall is used for inaugurations, being the most important representative hall in the country. It is also home to a copy of the Czech crown.'
  },
  {
    src: 'images/charles bridge.jpg',
    title: 'Charles Bridge',
    description: 'is an historic bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under the auspices of King Charles IV, and finished in the beginning of the 15th century. The bridge replaced the old Judith Bridge built 1158–1172 that had been badly damaged by a flood in 1342. This new bridge was originally called Stone Bridge (Kamenný most) or Prague Bridge (Pražský most) but has been "Charles Bridge" since 1870. '
  },
  {
    src: 'images/Casa Milà.jpg',
    title: 'Casa Milà',
    description: 'Casa Milà, popularly known as La Pedrera or "open quarry", a reference to its unconventional rough-hewn appearance, is a modernist building in Barcelona, Catalonia, Spain. It was the last private residence designed by architect Antoni Gaudí and was built between 1906 and 1910.'
  },
  {
    src: 'images/Tempelhof Feld.jpg',
    title: 'Tempelhof Feld',
    description: 'Tempelhof Feld was one of the airports in Berlin, Germany. Situated in the south-central Berlin borough of Tempelhof-Schöneberg, the airport ceased operating in 2008 amid controversy, leaving Tegel and Schönefeld as the two main airports serving the city, with the new Berlin Brandenburg Airport still under construction as of 2017.'
  },
  {
    src: 'images/Piazza Venezia.jpg',
    title: 'Piazza Venezia',
    description: 'Piazza Venezia  is the central hub of Rome, Italy, in which several thoroughfares intersect, including the Via dei Fori Imperiali and the Via del Corso. It takes its name from the Palazzo Venezia, built by the Venetian Cardinal, Pietro Barbo (later Pope Paul II) alongside the church of Saint Mark, the patron saint of Venice. The Palazzo Venezia served as the embassy of the Republic of Venice in Rome.'
  },
  {
    src: 'images/Copenhagen Central Station.jpg',
    title: 'Copenhagen Central Station',
    description: 'Copenhangen Central Station, (Danish: Københavns Hovedbanegård, abbreviated København H) is the main railway station in Copenhagen, Denmark and the largest railway station in Denmark. It is situated between the districts of Indre By and Vesterbro with entrances from Bernstorffsgade (at Tivoli Gardens), Banegårdspladsen, Reventlowsgade and access to platforms from Tietgensgade.'
  },
  {
    src: 'images/London Eye.jpg',
    title: 'London Eye',
    description: 'The official London Eye is a giant Ferris wheel on the South Bank of the River Thames in London. As of January 2015, it has been advertised as the Coca-Cola London Eye. The structure is 443 feet (135 m) tall and the wheel has a diameter of 394 feet (120 m). Supported by an A-frame on one side only, unlike the taller Nanchang and Singapore wheels, the Eye is described by its operators as "the world\'s tallest cantilevered observation wheel"'
  },
 
]

var imgs2 = ['images/old royal palace1.jpg', 'images/charles bridge1.jpg', 'images/Casa Milà1.jpg', 'images/Tempelhof Feld1.jpg', 'images/Piazza Venezia1.jpg', 'images/Copenhagen Central Station1.jpg', 'images/London Eye1.jpg'];

// set default
var imgNum = imgs.length;

var firstpic = document.querySelector('#img1');
var secondpic = document.querySelector('#img2');
var thirdpic = document.querySelector('#img3');
var forthpic = document.querySelector('#img4');
var fifthpic = document.querySelector('#img5');
var sixthpic = document.querySelector('#img6');
var seventhpic = document.querySelector('#img7');

var collection = [firstpic, secondpic, thirdpic, forthpic, fifthpic, sixthpic, seventhpic];

var title = document.querySelector('.title');
var description = document.querySelector('.description');
var mainpic = document.querySelector('.mainpic');

mainpic.setAttribute('src', imgs[0].src);
firstpic.setAttribute('src', imgs[0].src);

for (var i=0; i<imgNum; i++) {
  collection[i].setAttribute('src', imgs2[i]);
}

title.textContent = imgs[0].title;
description.textContent = imgs[0].description;

// right 
function browsing_right() {
  var src = mainpic.getAttribute('src');
  var i = 0;
  imgs.forEach(function(element,index) {
    if (element.src === src) {
      i = index;
    }
  });
  if (i == imgNum - 1) {
    mainpic.setAttribute('src', imgs[0].src);
    title.textContent = imgs[0].title;
    description.textContent = imgs[0].description;
  } else {
    mainpic.setAttribute('src', imgs[i + 1].src);
    title.textContent = imgs[i + 1].title;
    description.textContent = imgs[i + 1].description;
  }
}

// left
function browsing_left() {
  var src = mainpic.getAttribute('src');
  var i = 0;
  imgs.forEach(function(element,index) {
    if (element.src === src) {
      i = index;
    }
  });
  if (i == 0) {
    mainpic.setAttribute('src', imgs[imgNum - 1].src);
    title.textContent = imgs[imgNum - 1].title;
    description.textContent = imgs[imgNum - 1].description;
  } else {
    mainpic.setAttribute('src', imgs[i - 1].src);
    title.textContent = imgs[i - 1].title;
    description.textContent = imgs[i - 1].description;
  }
}

var rightb = document.querySelector('.rightb');
var leftb = document.querySelector('.leftb');
rightb.addEventListener('click',browsing_right, false);
leftb.addEventListener('click',browsing_left, false);