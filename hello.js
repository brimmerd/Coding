var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res) {
    var q = url.parse(req.url,true); // parsing or adding filname to url
    var filename = '.' + q.pathname;
    
    if (filename == './'){          //if parsing is deleted it will rename filename to mathFlash.html
        filename = './index.html';
    }
    //filename = filename + '.html';  // to remove .html from url. But THIS EFFECTS CSS and JS
    console.log(filename);

    fs.readFile(filename, function(err,data){
        
        if (err) {
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        console.log('...Incoming Request: ' + req.url);
        return res.end();
    })
}).listen(8080);

console.log('Server Listening to port 8080...');

