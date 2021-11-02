const http = require('http');
const { isPalindrome } = require('./revString');

const requestListener = function (req, res) {
  const q = 'mam';
  if (q && isPalindrome(q)) {
    res.writeHead(201);
    res.end('Yes! it is.');
  } else {
    res.writeHead(200);
    res.end('No, it is not.');
  }
}
admin.get('/users/:userId', function (req, res) {
    
})
  
const server = http.createServer(requestListener);
server.listen(9090);
