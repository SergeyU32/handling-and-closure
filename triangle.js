class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        // Проверка существования треугольника
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2; // полупериметр
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3)); // округление до 3 знаков
    }
}

// Функция-защитник
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}

// Нормальный треугольник
const triangle = new Triangle(3, 4, 5);
console.log(triangle.perimeter); // 12
console.log(triangle.area);      // 6

// Несуществующий треугольник
console.log(getTriangle(1, 2, 10).area);        // "Ошибка! Треугольник не существует"
console.log(getTriangle(1, 2, 10).perimeter);   // "Ошибка! Треугольник не существует"