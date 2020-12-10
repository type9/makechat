//app.js
//Express View Engine for Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Establish your public folder
app.use('/public', express.static('public'));

$(document).ready(() => {

    const socket = io.connect();
  
    $('#create-user-btn').click((e) => {
      e.preventDefault();
      let username = $('#username-input').val();
      if(username.length > 0){
        //Emit to the server the new user
        socket.emit('new user', username);
        $('.username-form').remove();
      }
    });
  
    //socket listeners
    socket.on('new user', (username) => {
      console.log(`✋ ${username} has joined the chat! ✋`);
    })
  
  })