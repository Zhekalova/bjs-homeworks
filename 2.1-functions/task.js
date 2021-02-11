function getSolutions( a, b, c ) {
    let discrim = b**2 - 4 * a * c;
    let x1, x2;

    if (discrim < 0) {
        return {D: discrim, roots: []};
    }
    else if (discrim === 0) {
        x1 = (-b) / (2 * a);
        return {D: discrim, roots: [x1]};
    } else {
        x1 = ((-b) + Math.sqrt(discrim)) / (2 * a);
        x2 = ((-b) - Math.sqrt(discrim)) / (2 * a);
        return {D: discrim, roots: [x1, x2]};
    };
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

function getAverageMark(value) {
    if (value.length === 0) {
        return 0;
    };

    let sumValues = 0;
    for (let i = 0; i < value.length; i++) {
        sumValues += value[i];
    };
    //console.log(`sumValues: ${sumValues}`);
    //console.log(`value.length: ${value.length}`);
    
    return sumValues / value.length;
};

function getAverageScore(data) {
    let averageScore = new Object();
    let average = 0;
    let countOfProps = 0;
    for (let prop in data) {
        let value = data[prop];
        //console.log(`свойство:  ${prop}, value: ${value}`);
        let avg = getAverageMark(value);

        average += avg;
        countOfProps += 1;

        let customProperty = prop;
        averageScore[customProperty] = avg;
        console.log(prop + ': ' + avg);
    }
    
    if (countOfProps === 0) {
        return {average: 0};
    };

    console.log(`сумма средних оценок: ${average}`);
    console.log(`количество предметов: ${countOfProps}`);
    console.log(`среднее по всем предметам: ${average / countOfProps}`);
    averageScore.average = average / countOfProps;
    return averageScore;
};
/* {
        algebra : [4, 5, 5, 4],
        geometry : [2, 5],
        russian : [3, 3, 4, 5],
        physics : [5, 5],
        music : [ 2, 2, 5],
        english : [4, 4, 3, 3],
        poetry : [5, 3, 4],
        chemistry : [2],
        french : [4, 4] 
      };
      */

function getDecodedValue(secret) {
    return (secret === 1) ? `Эмильо` : `Родриго`;
}

function getPersonData(secretData) {
    let name = getDecodedValue(secretData.aaa);
    let surname = getDecodedValue(secretData.bbb);
    return { firstName: name, lastName: surname };
}

/*
{
    aaa: 0,
    bbb: 0
}
*/





