/**
 * Functions, constants, and classes can be exported from one file
 * to another to import, using exports()
 */

const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObject {
    constructor() {
        console.log('Object Created');
    }
};

module.exports = {sum: sum, PI: PI, SomeMathObject: SomeMathObject};
/* Can also do it one by one by doing something like:
 * module.exports.sum = sum;
 */