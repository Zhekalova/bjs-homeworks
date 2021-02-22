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

/*Можно было проще:
String.prototype.isPalindrome = function() {
      const source = this.toLowerCase().split("");
      return source.join("") === source.reverse().join("");
}*/

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    };

    let sumValues = 0;
    for (let i = 0; i < marks.length; i++) {
        sumValues += marks[i];
    };
    
    const average = sumValues / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    const todayDate = new Date();
    const now = todayDate.getTime();
    console.log(`today: ${now}`);

    const parsedBirthday = new Date(birthday).getTime();
    //let  userBirthday = new Date(birthday);
    //birthday = userBirthday.getTime();
    console.log(`userBirthday: ${parsedBirthday}`);

    const diff = now - parsedBirthday;
    const age = Math.trunc(diff / 31556952000);

    console.log(`result: ${(age > 18)}`);
    return (age > 18);
}