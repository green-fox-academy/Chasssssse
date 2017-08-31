'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function name_balance(ac_no) {
    var obj;
    for (var i=0; i<accounts.length; i++) {
        if (accounts[i].account_number == ac_no) {
            obj = [accounts[i].client_name, accounts[i].balance];
            break;
        }
    }
    if (obj) {
        console.log(obj);
        return obj;
    } 
    else {console.log("404 - account not found");}
}   

name_balance(11234543); // Igor 203004099.2

function transfer(from, to, balance) {
    var original_accounts = accounts;
    var from_exist = false;
    var to_exist = false;
    original_accounts.forEach(function(element) {
        if (element.account_number == from) {
            from_exist = true;
            element.balance -= balance;
        }    
        else if (element.account_number == to) {
            to_exist = true;
            element.balance += balance;
        }
    });
    
    if (from_exist&&to_exist) {
        accounts = original_accounts;
        console.log(accounts);
    }
    else if (!from_exist&&to_exist) {
        console.log(from, ' 404 - account not found');
    }
    else if (!to_exist&&from_exist) {
        console.log(to, ' 404 - account not found');
    }
    else {
        console.log('404 - Both accounts not found')
    }
}

transfer(112134543, 43546731, 10);