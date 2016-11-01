# workflow

An advanced workflow setup for frontend projects using `npm scripts` instead of grunt/gulp.


## Installation
`git clone https://github.com/gyopiazza/workflow`

`cd workflow`

`npm install`


## List of available tasks
Tasks can be executed with `npm run <taskname>`
### `clean`
  Delete existing `dist` files

### `autoprefixer`
  Add vendor prefixes to your CSS automatically

### `scss`
  Compile SCSS to CSS

### `lint`
  "Lint" your JavaScript to enforce a uniform style and find errors

### `uglify`
  Uglify (minify) a production ready bundle of JavaScript

### `imagemin`
  Compress all types of images

### `sprite`
  Compress separate SVG files and combine them into one SVG "sprite", along with creating the SCSS source.

### `serve`
  Start a new server and watch for CSS & JS file changes in the `dist` folder

### `copyright`
  Adds a source code comment banner (with copyright information) to the minified CSS and JS files.


### `watch:css`
  Watches for any .scss file in `src` to change, then runs the `build:css` task

### `watch:js`
  Watches for any .js file in `src` to change, then runs the `build:js` task

### `watch:images`
  Watches for any images in `src` to change, then runs the `build:images` task

### `watch:all`
  Run the following tasks simultaneously: `serve`, `watch:css` & `watch:js`. When a .scss or .js file changes in `src`, the task will compile the changes to `dist`, and the server will be notified of the change. Any browser connected to the server will then inject the new file from `dist`

### `build:css`
  Alias to run the `scss` and `autoprefixer` tasks. Compiles Scss to CSS & add vendor prefixes

### `build:js`
Lints JS, combines `src` JS files & uglifies the output

### `build:images`
  Alias to run the `sprite` and `imagemin` tasks. Compresses images, generates an SVG sprite from a folder of separate SVGs

### `build:clean`
  Clean the `dist` folder before running `build:all`

### `build:all`
  Alias to run `build:css`, `build:js` & `build:images` commands in sequence

### `build:prod`
  TODO: BUILD FOR PRODUCTION (images compression, copyright-banner, etc...)

### `test:unit`
  Runs unit tests with `mocha` on all the files in the `tests/unit` folder

### `test:integration`
  Runs integration tests with `mocha` on all the files in the `tests/integration` folder

### `test:visual`
  Runs visual tests with `backstop` following the settings in `backstop.json`

### `test:visual:ref`
  Creates the visual tests reference with `backstop` following the settings in `backstop.json` to be matched against

### `docs`
  Runs `jsdoc` to generate the Javascript documentation of the codebase.

### `postinstall`
  Runs `watch:all` after `npm install` is finished
