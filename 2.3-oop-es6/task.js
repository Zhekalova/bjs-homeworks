'use strict'
//task 1

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };
    fix() {
        this.state = this.state * 1.5;
    };
    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        };
    }
    get state() {
        console.log(`getter result: state = ${this._state}`);
        return this._state;
    };
};

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'magazine';
    };
};

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.author = author;
        this.type = 'book';
    };
};

class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'novel';
    };
};

class FantasticBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'fantastic';
    };
};

class DetectiveBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'detective';
    };
};

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    };
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        };
    };
    findBookBy(type, value) {
        if (this.books.find(typeOfBook => typeOfBook[type] === value) === undefined) {
            return null;
        } else {
        return this.books.find(typeOfBook => typeOfBook[type] === value);
        };
    };
    giveBookByName(bookName) {
        const findBook = this.books.find(typeOfBook => typeOfBook.name === bookName);
        if (findBook === undefined) {
            return null;
        } else {
            return this.books.splice(this.books.indexOf(findBook), 1)[0];
        };
    };
};

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//test
const library2 = new Library("Библиотека 2");
console.log(`Новая библиотека: ${library2.name}`);//Библиотека 2
library2.addBook(new DetectiveBook("Иванов", "Детектив", 2019, 1000));
library2.addBook(new FantasticBook("Петров", "Фантастика", 2020, 500));
library2.addBook(new NovelBook("Сидоров", "Роман", 1919, 250));
console.log(library2.findBookBy("releaseDate", 1919).name); // Роман
console.log("Количество книг библиотеки номер 2 до выдачи: " + library2.books.length); // 3
//library2.giveBookByName("Фантастика");
console.log(library2.giveBookByName("Фантастика"));
console.log("Количество книг библиотеки номер 2 после выдачи: " + library2.books.length); // 2
const readBook = new FantasticBook("Петров", "Фантастика", 2020, 500);
readBook.state = 40;
console.log(readBook);
readBook.fix();
library2.addBook(readBook);
console.log("Количество книг библиотеки номер 2 после возврата: " + library2.books.length); //3



//task 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    };
    getName() {
        return this.name;
    };
    addGrade(grade, subject) {
        if (this.subjects[subject] === undefined) {
            this.subjects[subject] = [];
        };
        if ((grade < 1) || (grade > 5)) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`);
            return this.subjects[subject].length;
        } else if (typeof grade === 'string') {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`);
            return this.subjects[subject].length;
        } else {
            this.subjects[subject].push(grade);
            return this.subjects[subject].length;
        };
    };
    getAverageBySubject(subject) {
        let sum = 0;
        if ((this.subjects[subject] === undefined) ||
            (this.subjects[subject].length === 0)) {
            return 0;
        } else {
            for (let i = 0; i < this.subjects[subject].length; i++) {
                sum += this.subjects[subject][i];
            };
            return sum / this.subjects[subject].length;
        };
    };
    getTotalAverage() {
        let totalAverage = [];
        let sum = 0;
        let count = 0;
        for (let subject in this.subjects) {
            if (this.subjects[subject].length > 0) {
                sum += this.getAverageBySubject(subject);
                count++;
            }
        }
        return sum / count;
    };
};

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()); // Олег Никифоров
console.log(log.addGrade(2, 'algebra'));// 1
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra'));// 2
console.log(log.addGrade(5, 'geometry'));// 1
console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
console.log(log.addGrade(4, 'geometry'));// 2
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log(log.getTotalAverage()); // 3,75
