/**
 * The EventEmitter class is used for listening and emitting using the events module
 */

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// "on" call is what the eventEmitter object does
// params are the listener (i.e. event being listened to)
// and function to call when the event occurs
eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has occurred');
    console.log('Sum: ' + (num1 + num2));
});

// Emitting 'tutorial' to manually trigger the listener and pass in input parameters
eventEmitter.emit('tutorial', 1, 2);

// A custom class can be made which inherits the EventEmitter class,
// so we can take advantage of events
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
};

let pedro = new Person('Pedro');
pedro.on('name', () => {
    console.log('My name is ' + pedro.name);
});
let rebecca = new Person('Rebecca');
rebecca.on('name', () => {
    console.log('My name is ' + rebecca.name);
});

// Events occur synchronously,
// so Pedro listener activates first because Pedro was emitted first
pedro.emit('name');
rebecca.emit('name');