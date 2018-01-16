const User = function User() {
    this.balance = 0;
}

User.prototype.addBalance = function addBalance(amount) {
    this.balance += amount;
}

User.prototype.subtractBalance = function subtractBalance(amount) {
    this.balance -= amount;
}

module.exports = new User;
