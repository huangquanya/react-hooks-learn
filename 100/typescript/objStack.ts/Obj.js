"use strict";
// k:v 没有顺序的stack 入栈是有顺序的
// 进制转换
exports.__esModule = true;
var ObjStack = /** @class */ (function () {
    // 手动维护指针
    // 构造器
    function ObjStack() {
        this.items = {};
        this.count = 0;
    }
    // 入栈
    ObjStack.prototype.push = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    ObjStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    ObjStack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    ObjStack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    ObjStack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    ObjStack.prototype.size = function () {
        return this.count;
    };
    ObjStack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[0];
        for (var i = 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return ObjStack;
}());
exports["default"] = ObjStack;
