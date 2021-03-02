'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null
    };
    addClock(time, func, id) {
        if(id === undefined) {
            throw new Error('id is undefined');
        };
        if(this.alarmCollection.some(element => element.id === id)) {
            console.error('such id already exists');
        } else {
            this.alarmCollection.push({time, func, id});
        };
    };
    removeClock(id) {   
        const initLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
        return this.alarmCollection.length === initLength;
    };
    getCurrentFormattedTime() {
        const addLeadingZero = time => time < 10 ? `0${time}` : `${time}`;
        const hours = addLeadingZero(new Date().getHours());
        const minutes = addLeadingZero(new Date().getMinutes()); 
        return `${hours}:${minutes}`;
    };
    start() {
        let checkClock = (arr) => {
            if(this.getCurrentFormattedTime() === arr.time) {
                return arr.func();
            };
        };
        if (this.timerId === null) { 
            this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 1000);
        };
    };
    stop() {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    };
    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`time: ${element.time}, id: ${element.id}`))
    };
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
};

function testCase() {
    let phoneAlarm = new AlarmClock;
    phoneAlarm.addClock('9:00', () => console.log('подъем'), 1);
    phoneAlarm.addClock('9:01', () => { console.log('подъем!!!'); phoneAlarm.removeClock(2)}, 2);
    //phoneAlarm.addClock('9:02', () => console.log('пора вставать')); //нет id
    //phoneAlarm.addClock('9:03', () => console.log('вставай'), 1); //существующий id
    phoneAlarm.printAlarms();
    phoneAlarm.start();
    phoneAlarm.addClock('9:04', () => { 
        console.log('last'); phoneAlarm.stop(); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms();
    },  3);
}