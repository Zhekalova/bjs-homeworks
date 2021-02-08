'use strict';
function getResult(a,b,c) {
    let discrim = b**2 - 4 * a * c;
    let result = [];
    if (discrim === 0) {
        result[0] = (-b) / (2 * a);
    } else if (discrim > 0) {
        result[0] = ((-b) + Math.sqrt(discrim)) / (2 * a);
        result[1] = ((-b) - Math.sqrt(discrim)) / (2 * a);
    };
    return result;
    
}

function getAverageMark(marks){
    let sum = 0;
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log('Оценок больше пяти, считаем среднее первых пяти');
        marks = marks.slice(0, 5);
    };

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };

    return sum / marks.length;
    
}

function askDrink(name,dateOfBirthday){
    let now = new Date().getFullYear();
    let userAge = now - dateOfBirthday.getFullYear();
    return (userAge >= 18) ? 
    `Не желаете ли олд-фэшн, ${name}?` : 
    `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    
}