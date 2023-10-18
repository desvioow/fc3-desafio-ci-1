const args = process.argv.slice(2);

const a = parseInt(args[0]);
const b = parseInt(args[1]);

console.log("The sum of a + b is: " + sum(a, b));
console.log("The subtraction of a - b is: " + sub(a, b));
console.log("The multiplication of a * b is: " + mul(a, b));

module.exports = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b
};
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}