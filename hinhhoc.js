"use strict";
exports.__esModule = true;
exports.Circle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function () {
    function Circle(radius, color, filled) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
