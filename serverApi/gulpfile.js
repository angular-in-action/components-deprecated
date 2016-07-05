'use strict';

var childProcess = require('child_process');
var gulp = require('gulp');

var minimist = require('minimist');

// var packageJson = require('./package.json');

var spawn = childProcess.spawn;
var server;


gulp.task('server:restart', function(done) {
  var started = false;
  if (server) {
    server.kill();
  }
  var args = minimist(process.argv.slice(2), {default: {port: '8080'}});
  server = spawn('node', ['./server.js', '--port', args.port]);
  server.stdout.on('data', function(data) {
    console.log(data.toString());
    if (started === false) {
      started = true;
      done();
    }
  });
  server.stderr.on('data', function(data) {
    console.error(data.toString());
  });
});

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (server) {
    server.kill();
  }
});



gulp.task('default', ['server:restart']);


