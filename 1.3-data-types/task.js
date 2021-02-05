function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    if (typeof percent === 'string') {
        percent = parseFloat(percent);
    } else if ((typeof percent != 'number') && (typeof percent != 'string')) {
        console.log(`Параметр "проценты" содержит неправильное значение ${percent}`);
    };

    if (typeof contribution === 'string') {
        contribution = parseFloat(contribution);
    } else if ((typeof contribution != 'number') && (typeof contribution != 'string')) {
        console.log(`Параметр "первоначальный взнос" содержит неправильное значение ${contribution}`);
    };

    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    } else if ((typeof amount != 'number') && (typeof amount != 'string')) {
        console.log(`Параметр "сумма кредита" содержит неправильное значение ${amount}`);
    };
    console.log(`проценты: ${percent}`);
    console.log(`перв взнос: ${contribution}`);
    console.log(`сумма кредита: ${amount}`);

    console.log(`дата окончания: ${date}`);


    if ((typeof percent === 'number') && (typeof contribution === 'number') && (typeof amount === 'number')) {
        //тело кредита: сумма кредита минус первоначальный взнос
        let credit = amount - contribution;
        console.log(`тело кредита: ${credit}`);

        //количество выплачиваемых месяцев
        let todayDate = new Date();
        console.log(`сегодня: ${todayDate}`);
        const amountMonth = (date.getFullYear() - todayDate.getFullYear()) * 12 - todayDate.getMonth() + date.getMonth();
        console.log(`количество выплачиваемых месяцев: ${amountMonth}`);

        /*Ежемесячная оплата: Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, 
        P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев*/
        let percentMonth = percent / 100 / 12;
        console.log(`1/12 процентной ставки: ${percentMonth}`);
        let payment = credit * (percentMonth + percentMonth / (((1 + percentMonth) ** amountMonth) - 1));
        console.log(`ежемесячная оплата: ${payment}`);

        //Общая сумма, которую придется заплатить клиенту.
        let totalAmount = amountMonth * payment;
        console.log(`итог: ${totalAmount}`);
        return parseFloat(totalAmount.toFixed(2));
    }
}

function getGreeting(name) {
    let greeting;
    if ((name != '') && (typeof name != 'undefined')) {
        greeting = `Привет, мир! Меня зовут ${name}.`;
        console.log(greeting);
    } else if ((name === '') || (typeof name === 'undefined')) {
        greeting = `Привет, мир! Меня зовут Аноним.`;
        console.log(greeting);
    }
    return greeting;
}