var http = require('http');
var fs   = require('fs');

http.createServer(function(request, response) {
  checkFile(request, response);
}).listen(3000);

function checkFile(request, response) {
  fs.stat('file.txt', function(err, stats) {
    if (stats.mtime.getTime() > request.socket._idleStart) {
      fs.readFile('file.txt', 'utf8', function(err, data) {
        response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        });

        response.write(data, 'utf8');
        response.end();

        return false;
      });
    }
  });

  setTimeout(function() {
		checkFile(request, response);
	}, 5000);
};