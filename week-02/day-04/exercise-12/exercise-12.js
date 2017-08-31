'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
	{ 'vodka': 1, 'needs_cooling': true },
	{ 'coffee_liqueur': 0, 'needs_cooling': true },
	{ 'fresh_cream': 1, 'needs_cooling': true },
	{ 'captain_morgan_rum': 2, 'needs_cooling': true },
	{ 'mint_leaves': 0, 'needs_cooling': false },
	{ 'sugar': 100, 'needs_cooling': false },
	{ 'lime juice': 10, 'needs_cooling': true },
	{ 'soda': 100, 'needs_cooling': true }
]

var length_c1 = 'Ingredient'.length;
var length_c2 = 'Needs cooling'.length;
var length_c3 = 'In stock'.length;
var longest = length_c1;

ingredients.forEach(function(element) {
	for (let keys in element) {
		keys.length > longest ? longest = keys.length : longest = longest;
	}
});

function border(l1, l2, l3) {
	console.log('+' + '-'.repeat(l1 + 2) + '+' + '-'.repeat(l2 + 2) + '+' + '-'.repeat(l3 + 2) + '+');
}

function tags(l1, l2, l3) {
	console.log('| ' + 'Ingredient' + ' '.repeat(longest + 1 - l1 ) + '| Needs Cooling | In stock |' );
}

function content(l1, l2, l3) {
	ingredients.forEach(function(element, index) {

		for (let keys in element) {
			if (keys != 'needs_cooling') {
				var cool;
				var num_in_stock;
				element[keys] == 0 ? num_in_stock = '-' : num_in_stock = element[keys].toString();
				element.needs_cooling 
				? cool = '| Yes' + ' '.repeat(l2 -2) + '| ' + num_in_stock + ' '.repeat(l3 + 1 - num_in_stock.length) + '|' 
				: cool = '| No' + ' '.repeat(l2 -1) + '| ' + num_in_stock + ' '.repeat(l3 + 1 - num_in_stock.length) + '|';
				
				console.log('| ' + keys + ' '.repeat(longest + 1 - keys.length) + cool);
			}
		}
	})
}


border(longest, length_c2, length_c3);
tags(length_c1, length_c2, length_c3);
border(longest, length_c2, length_c3);
content(longest, length_c2, length_c3);
border(longest, length_c2, length_c3);


