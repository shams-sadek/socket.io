var http = require('http');

var fs = require('fs');


// myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){

    console.log(req.url);

    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html'});

        fs.createReadStream(__dirname + '/index.html').pipe(res);

    }else if(req.url === '/contact-us'){
        res.writeHead(200, { 'Content-Type' : 'text/html'});

        fs.createReadStream(__dirname + '/contact_us.html').pipe(res);
    }else if(req.url === '/api/ninjas'){

        var ninjas = [
                {
                    name: 'Shams Sadek Roman',
                    age: 33,
                    job: 'Programmer',
                },
                {
                    name: 'Talha Ekhlas',
                    age: 25,
                    job: 'Developer',
                },

        ];

        res.writeHead(200, { 'Content-Type' : 'application/json'});

        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(200, { 'Content-Type' : 'text/html'});

        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }



});

server.listen(3000);

console.log('listening port 3000');

// myReadStream.on('data', function(chunk){
//     console.log('New Chunk Received:');
//
//     myWriteStream.write(chunk);
//
// });
