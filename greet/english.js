const greetings = require('./greetings.json');

const greet = function greet() {
    console.log(greetings.en);
};

module.exports = greet;