var express = require('express');

var app = express();

app.set('view engine', 'ejs');

/**
 | ----------------------------------------------------------
 | css file middleware
 | ----------------------------------------------------------
 */
app.use('/assets', express.static('assets'));
// app.use(express.static('assets'));
// app.use('/assets', function(req, res, next){
//     console.log(req.url);
//     next();
// });


app.get('/', function(req, res){
    // res.end('This is homePage');
    res.render('index');
});

app.get('/login', function(req, res){
        res.render('login');
});

app.post('/login', function(req, res){
    console.log(res)
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
