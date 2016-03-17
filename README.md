# postxml-repeat
[![npm version][npm-image]][npm-url]

> [PostXML] plugin for repeating elemetns.

## Installation
`npm i postxml-repeat --save-dev`

## Usage
[Postxml]

## Example 1

### Input
```html
<div class="component">
	<div class="component__element" repeat="3">Hi!</div>
</div>
```

### Output
```html
<div class="component">
	<div class="component__element">Hi!</div>
	<div class="component__element">Hi!</div>
	<div class="component__element">Hi!</div>
</div>
```

## Example 2 (Array)
You can use template string syntax when repeat array (value, key).

### Input
```html
<div class="component">
	<div class="component__element" repeat="['A', 'B', 'C']">${value}</div>
</div>
```

### Output
```html
<div class="component">
	<div class="component__element">A</div>
	<div class="component__element">B</div>
	<div class="component__element">C</div>
</div>
```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-repeat
[npm-image]: http://img.shields.io/npm/v/postxml-repeat.svg?style=flat-square
