function getResult(a,b,c){
    'use strict';
    let discrim = b**2 - 4 * a * c;
    let x1;
    let x2;
    let result = [];
    if (discrim < 0) {
        result = [];
        return result;
    } else if (discrim === 0) {
        x1 = (-b) / (2 * a);
        result[0] = x1;
        return result;
    } else {
        x1 = ((-b) + Math.sqrt(discrim)) / (2 * a);
        x2 = ((-b) - Math.sqrt(discrim)) / (2 * a);
        result[0] = x1;
        result[1] = x2;
        return result;
    }
    
}

function getAverageMark(marks){
    'use strict';
    let sum = 0;
    let averageMark;
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log('Оценок больше пяти, считаем среднее первых пяти');
        marks.slice(0, 5);
        for (let i = 0; i < 5; i++) {
            sum += marks[i];
        }
        averageMark = sum / 5;
        return averageMark;
    } else {
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }
        averageMark = sum / marks.length;
        return averageMark;
    }
}

function askDrink(name,dateOfBirthday){
    'use strict';
    let now = new Date();
    let userAge = now.getFullYear() - dateOfBirthday.getFullYear();
    let greeting = (userAge >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    return greeting;
}