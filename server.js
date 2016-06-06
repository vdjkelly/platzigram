var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
  // res.send("Hola mundo!");
  res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function(req, res) {
  res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function(req, res) {
  res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/api/pictures', function(req, res) {

    var pictures = [
      {
        user: {
          username: 'aitor',
          avatar: 'https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0.jpeg'
        },
        url: 'office.jpg',
        likes: 0,
        liked: false,
        createdAt: new Date().getTime()
      },
      {
        user: {
          username: 'aitor',
          avatar: 'https://pbs.twimg.com/profile_images/565680017737125888/ad1qqkg0.jpeg'
        },
        url: 'office.jpg',
        likes: 1,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
      }
    ];

    setTimeout(function () {
      res.send(pictures);
    }, 2000)

})

app.get('/user/platzi', function(req, res) {
  res.render('index');
})

app.listen(3000, function(err) {
  if (err) return console.log('ERROR'), process.exit(1);

  console.log('Escuchando en el puerto 3000');
})
