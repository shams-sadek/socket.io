
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mean');


var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});


module.exports =  function(app){


    var User = mongoose.model('User', UserSchema);

    var user1 = new User({ firstName: 'Shams', lastName: 'Sadek'});
    user1.save(function(err){
        if (err) throw err;

        console.log(user1);
    });
}
