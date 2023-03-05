"use strict";
// let data;
// data = 1;
// data = "apple";
var apple;
(function (apple) {
    apple[apple["a"] = 1] = "a";
    apple[apple["b"] = 2] = "b";
})(apple || (apple = {}));
const book = apple.a;
