'use strict';
String.prototype.isPalindrome = function(str) {
    str = this.toLowerCase();
    console.log(str);

    let newStr = str.split('');
    newStr.forEach((word) => {
        if (word === ' ') {
          newStr.splice(newStr.indexOf(' '),1);
        }
      });
    newStr = newStr.join();

    let strReverse = newStr.split('').reverse().join('');
      
    if (newStr === strReverse) { 
        return true;
    } else { 
        return false; 
    };
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    };

    let sumValues = 0;
    for (let i = 0; i < marks.length; i++) {
        sumValues += marks[i];
    };
    
    let average = sumValues / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let todayDate = new Date();
    let now = todayDate.getTime();
    console.log(`today: ${now}`);

    let  userBirthday = new Date(birthday);
    birthday = userBirthday.getTime();
    console.log(`userBirthday: ${birthday}`);

    let diff = now - birthday;
    let age = Math.trunc(diff / 31556952000);

    console.log(`result: ${(age > 18)}`);
    return (age > 18);
}