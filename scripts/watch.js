// const fs = require('fs');
const stdin = process.openStdin();
const exec = require('child_process').exec;
var cmd = 'npm-run-all -p serve watch:css watch:js watch:images';

var result = exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  // console.log('Executed?')
  stdout.write(stdout)
});

result.stdout.on('data', data => {
    // process.stdout.write(data.toString('utf8'))
});

result.stderr.on('data', data => {
    console.log(data.toString('utf8'))
});


// fs.watch('./src/scss', (eventType, filename) => {
//   console.log(`event type is: ${eventType}`);
//   if (filename) {
//     console.log(`filename provided: ${filename}`);
//   } else {
//     console.log('filename not provided');
//   }
// });


// Accept input
stdin.addListener('data', function(d) {
  // note:  d is an object, and when converted to a string it will
  // end with a linefeed.  so we (rather crudely) account for that
  // with toString() and then trim()
  console.log('you entered: [' +
    d.toString().trim() + ']');
});
