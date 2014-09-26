
var titleDiv = document.getElementById('event-title')
var hipChatButton = document.createElement("BUTTON"); 
var newContent = document.createTextNode("Send to HipChat"); 
hipChatButton.appendChild(newContent)
hipChatButton.addEventListener('click', sendToChat);


function sendToChat() {
  var time = $('#event-when-display').find( "time" ).text();
  var title =  '<a href="'+$(location).attr('href')+ '">'+$('#event-title').find('h1').text() + '</a>';
  var where = '<a href="'+$('#event-where-display').find( "h3" ).find('a').attr('href') + '">'+$('#event-where-display').find( "h3" ).find('a').text() + '</a><br/> ' + $('#event-where-display').find( "p" ).text();
  where = where.replace('(map)', '');

  var params = {
      room_id: 808429, // Found in the JSON response from the call above
      from: 'From MeetUps',
      message: '<b>Event: </b><br/> ' + title + '<br/><br/><b>Time: <br/></b>' + time + "<br/><br/><b>Address: </b><br/>" + where
    };

  $.post( "https://www.hipchat.com/v1/rooms/message?format=json&auth_token=4e9f38bc09830a798a3e091c13fa20", params);
}

titleDiv.appendChild(hipChatButton)