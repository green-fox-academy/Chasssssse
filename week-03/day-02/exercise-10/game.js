// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy production rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x
var create_candy, candy_amount, create_lol, lol_amount, rate, rain;
function candyshop(){
    this.candies = 10000;
    this.lollipops = 0;
    this.lollipops2 = 0;
    this.rate = 0;
    this.base_rate = 0;
}
var newshop = new candyshop();

create_candy = document.querySelector('.create-candies');
candy_amount = document.querySelector('.candies');
create_lol = document.querySelector('.buy-lollipops');
lol_amount = document.querySelector('.lollipops');
rate = document.querySelector('.speed');
rain = document.querySelector('.candy-machine');

candy_amount.innerContext = newshop.candies;
lol_amount.innerContext = '';

create_candy.addEventListener('click', function() {
    newshop.candies++;
    console.log(newshop.candies);
    candy_amount.textContent = newshop.candies;
});
create_lol.addEventListener('click', function() {
    if (newshop.candies >= 100) {
        newshop.lollipops++;
        newshop.lollipops2++;
        console.log(newshop.lollipops);
        newshop.candies -= 100;
        lol_amount.innerHTML += '🍭';
        candy_amount.textContent = newshop.candies;
    }
});

rain.addEventListener('click', function() {
    newshop.rate *= 10;
    newshop.base_rate = newshop.rate;
    rate.textContent = newshop.rate;
    newshop.lollipops2 = 0; 
});


setInterval(function() {
    newshop.candies = newshop.rate + newshop.candies;
    candy_amount.textContent = newshop.candies;
}, 1000);


setInterval(function() {
    newshop.rate = newshop.base_rate + Math.floor(newshop.lollipops2/10);
    rate.textContent = newshop.rate;
}, 1000);


