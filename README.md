# Workflow

Workflow is a very opinionated starting point for webapps, including many pre-configured features to let you quickly focus on your project.

<br/>

## Requirements

- [NodeJS](https://nodejs.org)
- [Grunt](http://gruntjs.com)

<br/>

## Features

- HTML5 Boilerplate
- SASS preprocessor
- CSS minification
- CSS autoprefixer
- Combine media queries
- Javascript concatenation and minification/obfuscation
- Images optimization
- BrowserSync for live reloading upon files change
- Crossbrowser client-side tests with [DalekJS](http://dalekjs.com)
- System notifications on tasks completion

<br/>

## Getting started

**Clone repository**

```
git clone https://github.com/gyopiazza/workflow.git project-name
```

<br/>

**Install Node.js dependencies**

```
npm install
```

<br/>

## Usage

**Compile CSS/JS and watch for changes**

```
grunt
```

<br/>

**Compile only**

```
grunt compile
```

<br/>

**Build for production**<br/>
Production ready files are placed inside the 'build' folder<br/>
Sass files and source maps are not included

```
grunt build
```

<br/>

**Build for development**<br/>
Production ready and dev files are placed inside the 'build' folder<br/>
Sass files and source maps are included

```
grunt build-dev
```

<br/>

**Live reload**<br/>
Launch browserSync to test simultaneously on different devices

```
grunt live
```

<br/>

## Ideas

– Change the "autoload" assets compilation so that folders inside css/js are compiled into one file.
  For example: all the js files inside js/source/somegroup will be compiled to js/somegroup.js
– Create tasks to "publish" (copy) assets to the relevant dirs.
- Include [BackstopJS](https://garris.github.io/BackstopJS)
- Dynamically append copyright for JS/CSS
