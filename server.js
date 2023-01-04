const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send('<a href=/foo>foo</a> <a href=/bazz>bar</a> <a href=/bazz>bazz</a> hello world');
});

app.get('/foo', (req, res)=> {
  res.send('<a href=/>home</a> TBD foo page goes here');
});

app.get('/bar', (req, res)=> {
  res.send('<a href=/>Home</a> TBD bar page goes here');
});

app.get('/bazz', (req, res)=> {
  res.send('<a href=/>Home</a> TBD bazz page goes here');
});
/*
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
*/

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
})