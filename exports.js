/* shorthand */
exports.subtract = function subtract() {
    return "Hello";
}

/* is the same as ... */
module.exports.subtract = function subtract() {
    return "Hello";
}

/* No need for module.exports = as we are not overriding it and it will be returned automatically */