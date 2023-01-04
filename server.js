const http = require('http');
const server = http.createServer((req, res)=> {
  res.write('hello world');
  res.end();
});

const port = process.env.PORT || 3000;
server.listen(3000, ()=> {
  console.log(`listening on port ${port}`);
})