//app.js
//Express View Engine for Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Establish your public folder
app.use('/public', express.static('public'));

$(document).ready( () => {
    //Connect to the socket.io server
    const socket = io.connect();
});