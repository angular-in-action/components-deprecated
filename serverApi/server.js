'use strict';

var express = require('express');
var path = require('path');
var yahooFinance = require('yahoo-finance');
var faker = require('faker');
// var AlchemyNewsAPI = require('alchemy-news-api');
// var alchemyNewsAPI = new AlchemyNewsAPI('<fill in>');

var minimist = require('minimist');

// Express App
var app = express();
var args = minimist(process.argv.slice(2), {default: {port: process.env.port || '8080'}});

var PORT = args.port;
var DIST_DIR = path.join(__dirname, '..', 'dist');

// Needed to allow request
// Change the access if running the client from somewhere else
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Send static files from these directories
app.use('/lib', express.static(DIST_DIR + '/lib'));
app.use('/fonts', express.static(DIST_DIR + '/client/css/fonts'));
app.use('/client', express.static(DIST_DIR + '/client'));
app.use('/', express.static(DIST_DIR + '/client'));

var router = express.Router();

// Endpoint to load snapshot data from yahoo finance
router.get('/api/snapshot', function(req, res) {
  if (req.query.symbols) {
    var symbols = req.query.symbols.split(',');
    symbols.map(function(symbol) {
      return symbol.toUpperCase();
    });

    yahooFinance.snapshot({
      symbols: symbols
    }, function(err, snapshot) {
      if (err) {
        res.status(401).send(err);
      }

      res.status(200).send(snapshot);
    });
  } else {
    res.status(400).send({message: 'The request requires at least one symbol. Try adding "?symbols=appl" to the request.'});
  }
});

// Endpoint to load historical data from yahoo finance.
router.get('/api/historical/:symbol', function(req, res) {
  var today = new Date();
  var yearAgo = new Date(today.getTime() - 1000 * 60 * 60 * 24 * 365);
  var yearAgoWeek = new Date(yearAgo.getTime() + 1000 * 60 * 60 * 24 * 7);
  yahooFinance.historical({
    symbol: req.params.symbol,
    from: yearAgo.toString(),
    to: yearAgoWeek.toString()
  }, function(err, quotes) {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(quotes);
  });
});

// Simple endpoint to generate fake articles
router.get('/api/fetchArticles', function(req, res) {
  var symbol = req.query.symbol || 'CRM'

  var verbs = ['announces', 'claims', 'discloses', 'develops', 'releases', 'prevents', 'opens', 'closes', 'hires', 'fires'];
  var ret = []

  for ( var i=0; i<3; i++){
    var par = faker.Lorem.paragraph() + '.'
    par = par.charAt(0).toUpperCase() + par.slice(1);
    ret.push( {
      id: i, 
      title: symbol + ' ' + verbs[Math.round((Math.random()*10))] + ' ' + faker.random.catch_phrase_descriptor() + ' ' + faker.Lorem.sentence(), 
      body: par
    })

  }
  res.status(200).send(ret);
});


// Endpoint to load snapshot data from yahoo finance
// router.get('/api/fetchAlchemyArticles', function(req, res) {
//   var symbol = req.query.symbol || 'CRM;'

//   var entityQuery = {
//       'entity_text': symbol,
//       'entity_type': 'company',
//       'return': ['url', 'title'],
//       'count': 3
//   };
//   alchemyNewsAPI.getNewsByEntity(entityQuery, function (error, response) {
//       if (error) {
//           console.log("**** Error in fetch", error);
//       } else {
//         res.status(200).send(response);
//       }
//   });

// });

// router.get('/index2.html', function(req, res) {
//   res.sendFile(DIST_DIR + '/client/index2.html');
// });

// // Send any other urls to the client app to load.
// router.get('*', function(req, res) {
//   res.sendFile(DIST_DIR + '/client/index.html');
// });

app.use('/', router);

app.listen(PORT, function() {
  console.log('Server started at http://localhost:' + PORT);
});

