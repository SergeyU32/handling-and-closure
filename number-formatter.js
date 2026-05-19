// 1. Функция парсинга
function parseCount(value) {
    const parsed = Number.parseFloat(value);
    
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    
    return parsed;
}

// 2. Функция валидации
function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

console.log(parseCount("42"));      // 42
console.log(parseCount("3.14"));    // 3.14
console.log(parseCount("abc"));     // выбросит ошибку

console.log(validateCount("50"));           // 50
console.log(validateCount("abc"));          // Error: Невалидное значение
console.log(validateCount("3.1415abc"));    // 3.1415