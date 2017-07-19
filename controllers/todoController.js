
var data = [
    { item: 'get milk'},
    { item: 'walk dog'},
    { item: 'kick some coding ass'}
];

var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds129030.mlab.com:29030/todosadik');

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('todo', todoSchema);

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection Error! ', error);
});


module.exports = function(app){

    app.get('/todo', function(req, res){
            // get data from mongodb and pass data to the view
            Todo.find({}, function(err, data){
                    if (err) throw err;
                    res.render('todo', { todos: data });
            });

    });

    app.post('/todo', urlencodedParser, function(req, res){
            // get data from the view and add it to mongodb
            var newTodo = Todo(req.body).save(function(err, data){
                if (err) throw err;
                res.json(data);
                // res.render('todo', { todos: data });
            });
    });

    app.delete('/todo/:item', function(req, res){
            // delete the request from mongodb
            Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
                if (err) throw err;
                res.json(data);
            });
    });
};
