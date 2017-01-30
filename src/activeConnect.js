
export default  sortLessons();//отдаём weekData всем желающим

// получаем данные из базы в массив lessons
function getLessons(){
    var lessons=[];
    var ourRequest = new XMLHttpRequest();
    //ourRequest.open('GET', "php/getcar.php", false);
    //ourRequest.open('GET', "php/hello.php", false);
    ourRequest.open('GET', "php/getlessons.php", false);
    ourRequest.onload = function(){
    lessons = JSON.parse(ourRequest.responseText);
    //hello = ourRequest.responseText;
    };
    ourRequest.send(null);
    return lessons;
}

// сортируем lessons и кладём данные в массив weekData
function sortLessons(lessons=getLessons()){
    var weekData=[[],[],[],[],[]];
    lessons.map(function(value){

        if(value.day == 'понедельник'){
            weekData[0].push(value);
        }

        if(value.day == 'вторник'){
            weekData[1].push(value);
        }
        if(value.day == 'среда'){
            weekData[2].push(value);
        }
        if(value.day == 'четверг'){
            weekData[3].push(value);
        }
        if(value.day == 'пятница'){
            weekData[4].push(value);
        }

    });
  
    return weekData;
}
