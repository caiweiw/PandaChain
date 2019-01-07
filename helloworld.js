"use strict";
var person = /** @class */ (function () {
    function person() {
    }
    /**
     * print
     */
    person.prototype.print = function () {
        console.log('this is a person');
    };
    return person;
}());
var p = new person();
p.print();
