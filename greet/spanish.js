const greetings = require('./greetings.json');

/* Method 1 */
/* const greet = function greet() {
    console.log(greetings.es);
}; */

/* Method 2 */
module.exports = function greet() {
    console.log(greetings.es);
};