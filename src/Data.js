console.log("Подключен data 4444444.js");
var dat = [
    {
       id: 1,
       subject: "Математика",
       classroom: "415",
       teacher: "Березуцкая С.Д.",
       homework: "Задача 23, 24"

    },

    {
       id: 2,
       subject: "Литература",
       classroom: "145",
       teacher: "Ломина Р.А.",
       homework: "Стр. 223, 224"
    },

    {
        id: 3,
        subject: "Русский язык",
        classroom: "145",
        teacher: "Ломина Р.А.",
        homework: "параграф 53, 55"
    },

    {
        id: 4,
        subject: "ИЗО",
        classroom: "214",
        teacher: "Деникина К.Т.",
        homework: "Карандаши, альбом"
    },

    {
        id: 5,
        subject: "Физкультура",
        classroom: "спортзал",
        teacher: "Голунова Т.В.",
        homework: "форма"
    }

    ];


var monday = new Object();
var tuesday = dat.slice();
var wednesday = dat.slice();
var thursday = dat.slice();
var friday = dat.slice();

monday.date ="21.01.2017";
monday.name = "monday";
monday.lessons = [];
monday.lessons = dat.slice();

var week = [monday, tuesday, wednesday, thursday, friday];
//console.log(week);
//export default dat;

var lessons = [{"id":"1","lesson_name":"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430","home_work":"\u0443\u043f\u0440 42","classroom":"415","teacher":"\u041c\u0443\u0445\u0438\u043d \u041e\u043b\u0435\u0433 \u041f\u0430\u0432\u043b\u043e\u0432\u0438\u0447","day":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{"id":"2","lesson_name":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a","home_work":"\u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444 26","classroom":"213","teacher":"\u041c\u0438\u043b\u044e\u043a\u043e\u0432\u0430 \u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u0424\u0451\u0434\u043e\u0440\u043e\u0432\u043d\u0430","day":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{"id":"3","lesson_name":"\u0424\u0438\u0437\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","home_work":"\u0441\u0442\u0440 12","classroom":"241","teacher":"\u041f\u0438\u043c\u0435\u043d\u043e\u0432 \u041e\u043b\u0435\u0433 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447","day":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{"id":"4","lesson_name":"\u0424\u0438\u0437\u0438\u043a\u0430","home_work":"\u0437\u0430\u0434\u0430\u0447\u0430 54","classroom":"144","teacher":"\u041f\u0435\u0442\u0440\u043e\u0432 \u0412\u043e\u0434\u043a\u0438\u043d","day":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{"id":"6","lesson_name":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0435\u043b\u0438\u0433\u0438\u0438","home_work":"\u0440\u043e\u043c\u0430\u043d\u0441","classroom":"453","teacher":"\u041a\u0443\u0440\u0430\u0435\u0432 \u0410\u043d\u0434\u0440\u0435\u0439","day":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{"id":"7","lesson_name":"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a","home_work":"\u043b\u043e\u0432\u043b","classroom":"143","teacher":"\u0420\u043e\u0433\u043e\u0432 \u041f.\u0410.","day":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{"id":"8","lesson_name":"\u0424\u0438\u0437\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","home_work":"\u0441\u0442\u0440 98","classroom":"444","teacher":"\u041c\u0438\u0445\u0435\u043b\u044c\u0441\u043e\u043d","day":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{"id":"9","lesson_name":"\u041c\u0443\u0437\u044b\u043a\u0430","home_work":"\u0441\u0442\u0440 910","classroom":"223","teacher":"\u041e\u0440\u043b\u043e\u0432\u0430","day":"\u0447\u0435\u0442\u0432\u0435\u0440\u0433"},{"id":"10","lesson_name":"\u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a","home_work":"\u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444 87","classroom":"411","teacher":"\u041a\u0430\u043d\u0430\u0432\u0430 \u0422\u0430\u043a\u0438\u044f\u043c\u0430","day":"\u0447\u0435\u0442\u0432\u0435\u0440\u0433"},{"id":"11","lesson_name":"\u041c\u0443\u0437\u044b\u043a\u0430","home_work":"\u043f\u0435\u0441\u043d\u044f","classroom":"223","teacher":"\u041e\u0440\u043b\u043e\u0432\u0430","day":"\u043f\u044f\u0442\u043d\u0438\u0446\u0430"},{"id":"12","lesson_name":"\u0420\u0438\u0441\u043e\u0432\u0430\u043d\u0438","home_work":"\u043a\u0430\u0440\u0442\u0438\u043d\u0430","classroom":"112","teacher":"\u041c\u0438\u0440\u043e\u043d\u043e\u0432\u0430","day":"\u043f\u044f\u0442\u043d\u0438\u0446\u0430"}]

//export {dat, lessons};