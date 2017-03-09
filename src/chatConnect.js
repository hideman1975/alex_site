/**
 * Created by andrey.manaenko on 06.02.2017.
 */
export default getMessages

// function getMessages(){
//     var messages;
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', "php/getMessages.php", false);
//     ourRequest.onload = function(){
//     messages = JSON.parse(ourRequest.responseText);
//     };
//     ourRequest.send(null);
//     return messages;
// }

// function getMessages() {
//     var messages;
//     var xmlhttp = new XMLHttpRequest();
//
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
//             if (xmlhttp.status == 200) {
//                 //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//                 messages = JSON.parse(xmlhttp.responseText);
//             }
//             else if (xmlhttp.status == 400) {
//                 alert('There was an error 400');
//             }
//             else {
//                 alert('something else other than 200 was returned');
//             }
//         }
//     };
//
//     xmlhttp.open("GET", "php/getMessages.php", true);
//     xmlhttp.send();
//     return messages;
// }

function createXMLHttp() {
    console.log("из createXMLHttp()");
    if (typeof XMLHttpRequest != "undefined") { // для браузеров аля Mozilla
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { // для Internet Explorer (all versions)
        var aVersions = [
            "MSXML2.XMLHttp.5.0",
            "MSXML2.XMLHttp.4.0",
            "MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp",
            "Microsoft.XMLHttp"
        ];
        for (var i = 0; i < aVersions.length; i++) {
            try {
                var oXmlHttp = new ActiveXObject(aVersions[i]);
                return oXmlHttp;
            } catch (oError) {}
        }
        throw new Error("Невозможно создать объект XMLHttp.");
    }
}

// функция Ajax POST
function getMessages() {

    var messages;
    var oXmlHttp = createXMLHttp();
    var url = "php/getMessages.php";
    oXmlHttp.open("POST", url, false);
    oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {
        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {

            messages = JSON.parse(oXmlHttp.responseText);

        }
    };

    // отправка запроса, sBody - строка данных с формы
    oXmlHttp.send();
    return messages;
}