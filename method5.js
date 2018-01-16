const greet = "Greeting";

const greetingFn = function greetingFn() {
    console.log(greet);
};

/* Expose only methods, values that we want */
module.exports = {
    greet: greetingFn
};
