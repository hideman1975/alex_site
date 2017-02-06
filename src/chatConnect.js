/**
 * Created by andrey.manaenko on 06.02.2017.
 */
export default getMessages();

function getMessages(){
    var messages;
    var ourRequest = new XMLHttpRequest();

    
    ourRequest.open('GET', "php/getMessages.php", false);
    ourRequest.onload = function(){
        messages = JSON.parse(ourRequest.responseText);

    };
    ourRequest.send(null);
    return messages;
}