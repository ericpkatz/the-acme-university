const express = require('express');
const app = express();

const students = [
  {
    name: 'moe',
    bio: 'this is moes bio'
  },
  {
    name: 'lucy',
    bio: 'this is lucys bio'
  },
  {
    name: 'ethyl',
    bio: 'this is ethyls bio'
  }
];

app.get('/', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>The Acme University</title>
        <style>
          body {
            font-family: verdana;
          }
          nav {
            display: flex;
            justify-content: space-around;
          }

          nav a.selected {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <nav>
          <a href='/' class='selected'>Home</a>
          <a href='/students'>Students</a>
        </nav>
        <div>
          Welcome to Acme University!
        </div>
      </body>
    </html>
  `);
});

app.get('/students', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>The Acme University</title>
        <style>
          body {
            font-family: verdana;
          }
          nav {
            display: flex;
            justify-content: space-around;
          }

          nav a.selected {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <nav>
          <a href='/'>Home</a>
          <a href='/students' class='selected'>Students</a>
        </nav>
        <div>
          <ul>
            ${
              students.map( student => {
                return `<li><a href='/students/${student.name}'>${ student.name}</a></li>`;
              }).join('')
            }
          </ul>
        </div>
      </body>
    </html>
  `);
});

app.get('/students/:name', (req, res)=> {
  const student = students.find(student => student.name === req.params.name)
  res.send(`
    <html>
      <head>
        <title>The Acme University</title>
        <style>
          body {
            font-family: verdana;
          }
          nav {
            display: flex;
            justify-content: space-around;
          }

          nav a.selected {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <nav>
          <a href='/'>Home</a>
          <a href='/students' class='selected'>Students</a>
        </nav>
        <div>
          <h1>${student.name}</h1>
          <div>
            ${student.bio}
          </div>
        </div>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
})