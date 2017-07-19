var express = require('express');

var todoController = require('./controllers/todoController');

var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })




/**
 | -----------------------------------------------------------------------------
 | mongodb
 | -----------------------------------------------------------------------------
 */
// var mongoose = require('mongoose');




//Connect to the mongodb
// mongoose.connect('mongodb://localhost/testaroo');
// mongoose.connect('mongodb://127.0.0.1:27017/demo');


// var itemOne = Todo({ item: 'buy flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('Saved Item');
// });



// mongoose.model('users', { name: String });
//
// app.use('/users', function(req, res){
//     mongoose.model('users').find(function(err, users){
//         res.send(users);
//     });
// });



// fire controllers
todoController(app);

/**
 | ----------------------------------------------------------
 | css file middleware
 | ----------------------------------------------------------
 */
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
    // res.end('This is homePage');
    res.render('index');
});



/**
 | ------------------------------------------------------------
 | login part
 | ------------------------------------------------------------
 */
app.get('/login', function(req, res){
    res.render('login');
});

app.post('/login', urlencodedParser, function(req, res){
    console.log(req.body)
    res.render('login');
});



app.get('/profile', function(req, res){
    res.render('profile',
        {
            name: 'Shams Sadek',
            age: 33,
            hobbies: ['eating', 'fighting', 'fishing']
        }
    );
});

app.get('/contact', function(req, res){
    res.render('contact_us', { qs: req.query });
});

app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.listen(3000);
