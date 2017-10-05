const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');
app.set('bill', 'my name is not bill');

console.log('locals', app.locals.settings);

// app.get('/monkey', (req, res, next) => {
//  res.sendFile(__dirname + './public/monkey.html')
// });
const names = ['bill', 'moe', 'joe']
app.get('/', (req, res, next) => {
  res.render('index', {
    subtitle: 'THis is from JS data',
    names,
    loggedIn: false,
    url: '{req.url}'
  });
});

app.get('/article', (req, res, next) => {
  res.render('article', {
  subtitle: "this came for article",
  names,
  loggedIn: true
});
});

app.use(express.static(__dirname + '/public'));

app.listen(1177, () => {
  console.log('listening on port 3000');
}) 