/**
 * Files and module scan be imported to the current program using require()
 */

const { receiveMessageOnPort } = require('worker_threads');
const tutorial = require('./export.js');

console.log(tutorial);
console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());