# postxml-repeat
[![npm version][npm-image]][npm-url]

> [PostXML] plugin for repeating elemetns.

## Installation
`npm i postxml-repeat --save-dev`

## Usage
[Postxml]

## Example

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

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-repeat
[npm-image]: http://img.shields.io/npm/v/postxml-repeat.svg?style=flat-square
