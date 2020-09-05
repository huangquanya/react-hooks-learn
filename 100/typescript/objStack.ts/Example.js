"use strict";
exports.__esModule = true;
var Obj_1 = require("./Obj");
var number_1 = require("./number");
var decimalToBinary = function (decNumber) {
    var stack = new number_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var decimalToBinaryObjStack = function (decNumber) {
    var stack = new Obj_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var testNumber = 999993;
console.time('数组栈');
console.log(decimalToBinary(testNumber));
console.timeEnd('数组栈');
console.time('对象栈');
decimalToBinaryObjStack(testNumber);
console.timeEnd('对象栈');
