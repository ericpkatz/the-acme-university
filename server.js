const http = require('http');
const server = http.createServer((req, res)=> {
  if(req.url === '/'){
    res.write('Hello world');
    res.end();
  }
  else if(req.url === '/foo'){
    res.write('TBD foo page');
    res.end();
  }
  else if(req.url === '/bar'){
    res.write('TBD bar page');
    res.end();
  }
  else if(req.url === '/bazz'){
    res.write('TBD bazz page');
    res.end();
  }
  else {
    res.statusCode = 404;
    res.write('This page doesnt exist!');
    res.end();
  }
});

const port = process.env.PORT || 3000;
server.listen(port, ()=> {
  console.log(`listening on port ${port}`);
})