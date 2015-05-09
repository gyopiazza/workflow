# Workflow

Workflow is a starting point for any webapp, which includes a SASS preprocessor, CSS minification, CSS autoprefixer, combine media queries, Javascript concatenation and minification, images optimization, server-side and client-side tests (PHPUnit and DalekJS) and system notifications.

<br/>

## Getting started

<br/>

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

<br/>

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

**Build for production**
Production ready files are placed inside the 'build' folder

```
grunt build
```

<br/>

**Build for development**
Production ready and dev files are placed inside the 'build' folder

```
grunt build-dev
```
