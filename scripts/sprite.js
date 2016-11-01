var path = require('path');
var fs = require('fs');
var glob = require('glob').glob;
var mkdirp = require('mkdirp');
var SVGSpriter = require('svg-sprite');
const util = require('util');

// Configure the sprite
var sprite = new SVGSpriter({
  dest: './dist/img', // output directory
  mode: {
    css: {
      dest: '.', // relative to the output directory (defaults to 'css')
      render: {
        scss: true
      },
      // example: true,
      example: { dest: 'sprite.html' }, // html demo filename, relative to the output directory
      common: '-YYYYY-', // a shared class to set the background
      prefix: '.svg-%s', // the prefix of each class name
      dimensions: '-dims', // '-dims': suffix for a separate class with dimensions, 'true': include dimensions into each class
      sprite: 'sprite.svg', // sprite filename, relative to the output directory
      bust: true, // force cache busting
      layout: 'packed' // "vertical", "horizontal", "diagonal", "packed"
    }
  }
});

// Source directory
var cwd = path.resolve('./src/img');

process.stdout.write("=> Creating the svg sprite... ");

// Find SVG files recursively via `glob`
glob('**/*.svg', { cwd: cwd }, function(err, files) {
  files.forEach(function(file) {
    sprite.add(
      path.resolve(path.join(cwd, file)),
      file,
      fs.readFileSync(path.join(cwd, file), { encoding: 'utf-8' })
    );
  });

  sprite.compile(function(error, result, data) {
    for (var t in result.css) {
      mkdirp.sync(path.dirname(result.css[t].path));
      fs.writeFileSync(result.css[t].path, result.css[t].contents);
    }
  });

  console.log('done!');
});
