const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    const reqUrl = req.url;
    const type = req.method;

    if(reqUrl === '/'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello My First Node.Js Application</body>')
    res.write('</html>');
    res.end();
    }

    if(reqUrl === '/methord'){
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Hello My First Node.Js Application for post</body>')
        res.write('</html>');
        res.end();
        }
});

server.listen(5656);