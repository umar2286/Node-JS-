let http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>Aslam O Alikum my name is umar</h1>');
    res.end;

}).listen(4000);