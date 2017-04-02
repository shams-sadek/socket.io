const mongoose = require('mongoose');


//Connect to the mongodb
// mongoose.connect('mongodb://localhost/testaroo');
mongoose.connect('mongodb://127.0.0.1:27017/mean');


mongoose.connection.once('open', function(){

    console.log('Connection has been made, now make fireworks...');

}).on('error', function(error){

    console.log('Connection Error! ', error);

});
