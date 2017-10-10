// Callback example is hard to read
var fs = require('fs');

var myFile = 'test.txt';
fs.readFile(myFile, 'utf8', function (err, txt) {
  if (err) 
    return console.log(err);
  
  txt = txt + '\nAppended something!';
  fs.writeFile(myFile, txt, function (err) {
    if (err) 
      return console.log(err);
    console.log('Appended text!');
  });
});

// name callback function to make it more readable

function notifyUser(err) {  
    if(err) return console.log(err);
    console.log('Appended text with callback!');
};

function appendText(err, txt) {  
    if (err) return console.log(err);

    txt = txt + '\nAppended something!';
    fs.writeFile(myFile, txt, notifyUser);
}

var myFile = 'test.txt';  
fs.readFile(myFile, 'utf8', appendText);  

// ==== PROMISE ==== 
// var Promise = require('bluebird');  
// var fs = require('fs');  
// Promise.promisifyAll(fs);

// var myFile = 'test';  
// fs.readFileAsync(myFile, 'utf8').then(function(txt) {  
//     txt = txt + '\nAppended something!';
//     fs.writeFile(myFile, txt);
// }).then(function() {
//     console.log('Appended text!');
// }).catch(function(err) {
//     console.log(err);
// });