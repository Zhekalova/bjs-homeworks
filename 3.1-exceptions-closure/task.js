'use strict';

//task 1
function parseCount(parceValue) {
    const resultParceValue = parseInt(parceValue, 10);
    if (Number.isNaN(resultParceValue)) {
        throw new Error('Невалидное значение');
    };
    return resultParceValue;
};

function validateCount(parseCountValue) {
    try {
        return parseCount(parseCountValue);
    } catch(e) {
        return e;
    };
};

//task 2
class Triangle {
    constructor(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c;
        if(a > b + c || b > c + a || c > b + a) {
            throw new Error('Треугольник с такими сторонами не существует');
        };
    };

    getPerimeter() {
        return this.a + this.b + this.c;
    };

    getArea() {
        const halfTrianglePerimeter = this.getPerimeter() / 2;
        const triangleArea = Math.sqrt(halfTrianglePerimeter*(halfTrianglePerimeter - this.a)*(halfTrianglePerimeter - this.b)*(halfTrianglePerimeter - this.c));
        return +(triangleArea.toFixed(3));
      };
};
    
    function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c);
        } catch(err) {
            return {
                getArea: () => 'Ошибка! Треугольник не существует',
                getPerimeter: () => 'Ошибка! Треугольник не существует',
            };
        };
    };