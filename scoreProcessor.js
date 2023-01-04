const fs = require('fs');
const processFunctions = require('./processFunctions');

fs.readFile('data.txt', (err, result)=> {
  if(err){
    console.log(err);
  }
  else {
    console.log(processFunctions.processScores(result.toString()));
  }
});
processFunctions.hi();
