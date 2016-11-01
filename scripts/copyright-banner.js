var fs = require('fs');

var files = ['./dist/css/app.css', './dist/js/app.js'];

var banner = '/* Copyright Information */' + "\r\n";

console.log('=> Adding Copyright Information');

for (file in files) {
  file = files[file]
  var data = fs.readFileSync(file, 'utf8');
  data = banner + data;

  fs.writeFile(file, data, function(err) {
    if (err) throw err;
  });

  console.log('=> Completed:', file);
}


