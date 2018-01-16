/* global console */
'use strict';

/* Import Node core */

const util = require('util');

const name = 'John';
const greeting = util.format('Hello, %s', name);

util.log(greeting);

/* --- Greet example */
const greet = require('./greet');
greet.english();
greet.spanish();

/* --- Module pattern 1 example */
const example1 = require('./method1');
example1();

/* --- Module pattern 2 example */
const example2 = require('./method2');
example2.balance();

/* --- Module pattern 2a example */
const balance = require('./method2').balance;
balance();

/* --- Module pattern 3 example */
const User = require('./method3');
console.log(User.balance); // 0
User.addBalance(500); 
console.log(User.balance); // 500
User.subtractBalance(200);
console.log(User.balance); // 300

const User2 = require('./method3'); // Remember that require does a cache and references the object
console.log(User.balance); // 300
User.addBalance(500); 
console.log(User.balance); // 800
User.subtractBalance(200);
console.log(User.balance); // 600

/* --- Module pattern 4 example */
const User3 = require('./method4'); // Not cached as passing the object
const newUser = new User3();
newUser.addBalance(500); // 500
console.log(newUser.balance);

/* --- Module pattern 5 example */
const greetFn = require('./method5'); // Not cached as passing the object
greetFn.greet();


/* --- Module exports example */
const hello = require('./exports');
// console.log(hello); // returns the module.exports object with extra name/value pairs such as path etc
