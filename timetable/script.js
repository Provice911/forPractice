function onLoad() {
    currentFiller();
    tableFiller();
    currentDayWeek();
}
/*первичный прогрузчик*/
var weekDayArr = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];
var lessonOrder = ['F', 'S', 'T', 'Fo', 'Fi']; //ID дней недели

var date = new Date();
/*==========XX.1.XX -> XX.01.XX===========*/
var dayMonth;
if (new Date().getDate() < 10) {
    dayMonth = "0" + new Date().getDate();
} else {
    dayMonth = new Date().getDate();
}
/*=======================================*/

/*===============1.XX.XX -> 01.XX.XX==============*/
var dateMonth;
if (new Date().getMonth() + 1 < 10) {
    dateMonth = "0" + (new Date().getMonth() + 1);
} else {
    dateMonth = date.getMonth() + 1;
}
/*================================================*/

var yearMonth = (date.getFullYear() + '').substring(2); //2018 -> 18

var day = date.getDay();
var fix;
(day == 0) ? fix = 0 : fix = 1;

function currentDayWeek() { //шапка расписашки( Ex: Среда(17.01.18) )
var dayWeek = document.getElementById('day');
dayWeek.innerHTML = weekDayArr[day - fix] + '(' + dayMonth + '.' + dateMonth + '.' + yearMonth + ')';
} setInterval(currentDayWeek, 10000);
//console.log(day + ' aaa');

function tableFiller() {
    date = new Date();
/*======================Получение ID времени======================*/
    var timeF = document.getElementById('timeF'); //время 1ой пары
    var timeS = document.getElementById('timeS'); //время 2ой пары
    var timeT = document.getElementById('timeT'); //время 3ей пары
    var timeFo = document.getElementById('timeFo'); //время 4ой пары
    var timeFi = document.getElementById('timeFi'); //время 5ой пары
/*================================================================*/
/*============================Получение ID названий пар============================*/
    var lessonNameF = document.getElementById('lessonNameF'); //название 1ой пары
    var lessonNameS = document.getElementById('lessonNameS'); //название 2ой пары
    var lessonNameT = document.getElementById('lessonNameT'); //название 3ей пары
    var lessonNameFo = document.getElementById('lessonNameFo'); //название 4ой пары
    var lessonNameFi = document.getElementById('lessonNameFi'); //название 5ой пары
/*=================================================================================*/
/*=========================Получение ID кабинетов=========================*/
    var cabinetF = document.getElementById('cabinetF'); //кабинет 1ой пары
    var cabinetS = document.getElementById('cabinetS'); //кабинет 2ой пары
    var cabinetT = document.getElementById('cabinetT'); //кабинет 3ей пары
    var cabinetFo = document.getElementById('cabinetFo'); //кабинет 4ой пары
    var cabinetFi = document.getElementById('cabinetFi'); //кабинет 5ой пары
/*========================================================================*/
/*===========================Получение ID типов пар===========================*/
    var typeLessonF = document.getElementById('typeLessonF'); //тип 1ой пары
    var typeLessonS = document.getElementById('typeLessonS'); //тип 2ой пары
    var typeLessonT = document.getElementById('typeLessonT'); //тип 3ей пары
    var typeLessonFo = document.getElementById('typeLessonFo'); //тип 4ой пары
    var typeLessonFi = document.getElementById('typeLessonFi'); //тип 5ой пары
/*============================================================================*/
/*==============================Получение ID имени учителя==============================*/
    var nameTeacherF = document.getElementById('nameTeacherF'); //имя учителя 1ой пары
    var nameTeacherS = document.getElementById('nameTeacherS'); //имя учителя 2ой пары
    var nameTeacherT = document.getElementById('nameTeacherT'); //имя учителя 3ей пары
    var nameTeacherFo = document.getElementById('nameTeacherFo'); //имя учителя 4ой пары
    var nameTeacherFi = document.getElementById('nameTeacherFi'); //имя учителя 5ой пары
/*======================================================================================*/
/*==================================ID элементов текущей пары==================================*/
    var currentLesson = document.getElementById('currentLesson'); //текущая пара
    var typeCurrentLesson = document.getElementById('typeCurrentLesson'); //тип текущей пары
    var cabCurrentLesson = document.getElementById('cabCurrentLesson'); //кабинет текущей пары
    var nameTeacher = document.getElementById('nameTeacher'); //ФИО учителя текущей пары
/*=============================================================================================*/
/*========================Получение ID блоков пар========================*/
    var FLesson = document.getElementById('FLesson'); //блок 1ой пары
    var SLesson = document.getElementById('SLesson'); //блок 2ой пары
    var TLesson = document.getElementById('TLesson'); //блок 3ей пары
    var FoLesson = document.getElementById('FoLesson'); //блок 4ой пары
    var FiLesson = document.getElementById('FiLesson'); //блок 5ой пары
/*=======================================================================*/
    var noLesson = document.getElementById('noLesson'); //нет пар
    var leftTime = document.getElementById('leftTime'); //осталось времени
    var progressBarBody = document.getElementById('progressBarBody');
    //прогресс бар
    var endLine = document.getElementById('endLine');

/*===========================Автозаполнение блока текущего предмета(ну и жопа здесь творится)===========================*/
var dayOfWeek = date.getDay();

/*======================================================================================================================*/
var clt = 'T' + new Date().toLocaleDateString('en-US', {weekday: 'long'});
(clt == 'TSunday') ? clt = 'TMonday' : clt;
var year = date.getFullYear();
var month = date.getMonth();
var today = new Date(year, month, 0).getTime();
var now = new Date().getTime();
var week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7)); //вычисление недели: вехняя или нижняя
//========ОТОБРАЖЕНИЕ УРОКОВ НА СЛЕДУЮЩИЙ ДЕНЬ/НЕДЕЛЮ(ПЛОХО РАБОТАЕТ)=========//
if (week % 2 == 0) {
    clt = (clt[0] = 'U') + clt.slice(1);
    
} else {
    clt = (clt[0] = 'D') + clt.slice(1);
}

var cltLength = eval(clt).length;
//console.log(clt);

if ((new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(clt)[cltLength - 1][2], eval(clt)[cltLength - 1][3], date.getSeconds()) <= date)) {
    dayOfWeek++;
    if (dayOfWeek >= 5) {
        dayOfWeek = 0;
        if (week % 2 == 0) {
            downWeekFiller();
            //alert("Четная"); //ЧЁТНАЯ, Т.Е. !НИЖНЯЯ!
        } else {
            upWeekFiller();
            //alert("Не четная"); //НЕЧЁТНАЯ, Т.Е. !ВЕРХНЯЯ!
        }
    }
}
//============================================================================//
if (week % 2 != 0) {
    downWeekFiller();
    //alert("Четная"); //ЧЁТНАЯ, Т.Е. !НИЖНЯЯ!
} else {
    upWeekFiller();
    //alert("Не четная"); //НЕЧЁТНАЯ, Т.Е. !ВЕРХНЯЯ!
}
//console.log(dayOfWeek);

function downWeekFiller() {
        if (dayOfWeek == 1) { //ПОНЕДЕЛЬНИК        
            newFiller(dayOfWeek, 1);
        } else if (dayOfWeek == 2) { //ВТОРНИК
            newFiller(dayOfWeek, 1);
        } else if (dayOfWeek == 3) { //СРЕДА
            newFiller(dayOfWeek, 1);
        } else if (dayOfWeek == 4) { //ЧЕТВЕРГ
            newFiller(dayOfWeek, 1);
        } else if (dayOfWeek == 5) { //ПЯТНИЦА
            newFiller(dayOfWeek, 1);
        } else if (dayOfWeek == 6) { //СУББОТА
            newFiller(dayOfWeek, 1);
        } else if (dayOfWeek == 0) { //ВОСКРЕСЕНЬЕ
            newFiller(dayOfWeek, 1);
        }
}
function upWeekFiller() {
        if (dayOfWeek == 1) { //ПОНЕДЕЛЬНИК
            newFiller(dayOfWeek, 0);
        } else if (dayOfWeek == 2) { //ВТОРНИК
            newFiller(dayOfWeek, 0);
        } else if (dayOfWeek == 3) { //СРЕДА
            newFiller(dayOfWeek, 0);
        } else if (dayOfWeek == 4) { //ЧЕТВЕРГ
            newFiller(dayOfWeek, 0);
        } else if (dayOfWeek == 5) { //ПЯТНИЦА
            newFiller(dayOfWeek, 0);
        } else if (dayOfWeek == 6) { //СУББОТА
            newFiller(dayOfWeek, 0);
        } else if (dayOfWeek == 0) { //ВОСКРЕСЕНЬЕ
            newFiller(dayOfWeek, 0);
        }
    }
}
setInterval(tableFiller, 1000);

function currentFiller(orderCount) { //заполнитель "текущего" блока
    var LLO = ['F', 'S', 'T', 'Fo', 'Fi'];
    for (var i = 0; i < orderCount; i++) {
        eval((eval('time' + LLO[i]).parentElement.id)).hidden = true;
        currentLesson.innerHTML = eval('lessonName' + LLO[i]).innerHTML;
        cabCurrentLesson.innerHTML = eval('cabinet' + LLO[i]).innerHTML;
        nameTeacher.innerHTML = eval('nameTeacher' + LLO[i]).innerHTML;
        typeCurrentLesson.innerHTML = eval('typeLesson' + LLO[i]).innerHTML;
    }
}

function newFiller(key, updown) {
    var jumper;
    switch (key){
        case 0: jumper = "TMonday"; break;
        case 1: jumper = "TMonday"; break;
        case 2: jumper = "TTuesday"; break;
        case 3: jumper = "TWednesday"; break;
        case 4: jumper = "TThursday"; break;
        case 5: jumper = "TFriday"; break;
        case 6: jumper = "TSaturday"; break;
    }
    if (updown == 1) {
        jumper = (jumper[0] = 'D') + jumper.slice(1);
    } else {
        jumper = (jumper[0] = 'U') + jumper.slice(1);
    }
    //console.log(jumper + ' jumper'); //дебаг
    
    var clt = eval(jumper).length;

    //console.log(clt);
    for (var i = 0; i <= eval(jumper).length - 1; i++) {
        /*===формирование переменных элементов таблицы===*/
        var RTime = 'time' + lessonOrder[i];
        var RLessonName = 'lessonName' + lessonOrder[i];
        var RTypeLesson = 'typeLesson' + lessonOrder[i];
        var RCabinet = 'cabinet' + lessonOrder[i];
        var RNameTecaher = 'nameTeacher' + lessonOrder[i];
        /*================================================*/
        /*=========================заполнение таблицы(данные беруться из storage.js)=========================*/
        eval(RTime).innerText = (eval(jumper)[i][0] < 10 ? '0' + eval(jumper)[i][0] : eval(jumper)[i][0]) + ':'
        + (eval(jumper)[i][1] < 10 ? '0' + eval(jumper)[i][1] : eval(jumper)[i][1]);
        eval(RLessonName).innerText = eval(jumper)[i][4][1];
        eval(RNameTecaher).innerText = eval(jumper)[i][4][0];
        eval(RTypeLesson).innerText = ' ' + eval(jumper)[i][5];
        eval(RCabinet).innerText = eval(jumper)[i][6];
        /*====================================================================================================*/
    }

    for (var o = 0; o <= 4; o++) {
        eval(jumper)[o] == null ? (eval(lessonOrder[o] + 'Lesson')).style.display = 'none' :
        eval(lessonOrder[o] + 'Lesson').style.display = '';
    }

    var localFix;
    for (var i = 0; i <= clt - 1; i++) {
        if ((new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[clt - 1][2], eval(jumper)[clt - 1][3], date.getSeconds())
        <= date)) {
            localFix = 0;
            //console.log('LF '+ 0);
            //console.log((new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[clt - 1][2], eval(jumper)[clt - 1][3], date.getSeconds())
            //<= date));
            
            
        } else {
            localFix = 1;
            //console.log('LF '+ 1);
            //console.log((new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[clt - 1][2], eval(jumper)[clt - 1][3], date.getSeconds())
            //<= date));
        }

        if ((new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[i][0], eval(jumper)[i][1], date.getSeconds())
        <= date && date <=
        new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[i][2], eval(jumper)[i][3], date.getSeconds()))
        && eval('time' + lessonOrder[i]).innerText != '' && new Date().getDay() != 0)
        {
            currentFiller(i + 1);
            progressBar(i + 1);
            currentLessonBlock.hidden = false;
            //console.log('check 1');
            break;
        } else if (new Date().getDay() == 0) {
            currentFiller(i + 1);
            currentLessonBlock.hidden = true;
            //console.log('check 2');
            break;
        } 
        else if ((new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[i][2], eval(jumper)[i][3], date.getSeconds())
        <= date && date <=
        new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[i + localFix][0], eval(jumper)[i + localFix][1], date.getSeconds()))) {
            currentFiller(i + localFix);
            progressBar(i + 1);
            currentLessonBlock.hidden = true;
            //console.log('check 4 COND: ');
            break;
        }
        else if ((new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[i][2], eval(jumper)[i][3], date.getSeconds())
        <= date)) {
            currentFiller(0);
            currentLessonBlock.hidden = true;
            //console.log('check 3 localFix: ' + localFix);
        }
    }

    function progressBar(key) {

        var remain;

        if (key == 1) {

        remain = (new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[0][2], eval(jumper)[0][3], date.getSeconds()) -
        new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())) / 1000 / 60;

        } else if (key == 2) {

        remain = (new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[1][2], eval(jumper)[1][3], date.getSeconds()) -
        new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())) / 1000 / 60;

        } else if (key == 3) {

        remain = (new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[2][2], eval(jumper)[2][3], date.getSeconds()) -
        new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())) / 1000 / 60;

        } else if (key == 4) {

        remain = (new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[3][2], eval(jumper)[3][3], date.getSeconds()) -
        new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())) / 1000 / 60;

        } else if (key == 5) {

        remain = (new Date(date.getFullYear(), date.getMonth(), date.getDate(), eval(jumper)[4][2], eval(jumper)[4][3], date.getSeconds()) -
        new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())) / 1000 / 60;

        }

        progressBarBody.style.width = (100 - Math.round(100 * remain / 90)) + '%';

        if ((remain - 59) <= 0) {
        leftTime.innerText = 'осталось 0:' + ((remain < 10) ? '0' + remain : remain);
        } else {
        leftTime.innerText = 'осталось 1:' + (((remain - 60) < 10) ? '0' + (remain - 60) : remain - 60);
        }
    }
}