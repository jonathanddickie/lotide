const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([5,6,7]), 7);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");