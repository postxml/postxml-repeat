var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

	var processed = postxml([plugin(opts)]).process(input);

	expect(processed).to.eql(output);
};

describe('postxml-repeat', function () {
	it('repeat twice', function () {
		test(
			'<div repeat="2"></div>',
			'<div></div><div></div>',
			{}
		);
	});
	it('repeat 2 elements', function () {
		test(
			'<div repeat="2"></div><span repeat="2"></span>',
			'<div></div><div></div><span></span><span></span>',
			{}
		);
	});
	it('nested repeats', function () {
		test(
			'<div repeat="2"><span repeat="2"></span></div>',
			'<div><span></span><span></span></div><div><span></span><span></span></div>',
			{}
		);
	});
	it('repeat array', function () {
		test(
			'<div repeat=["TextA","TextB"]>${value + key*3}</div>',
			'<div>TextA0</div><div>TextB3</div>',
			{}
		);
	});
	it('repeat object keys', function () {
		test(
			'<div repeat={"first":"Text1","last":"Text2"}>${key}: ${value}</div>',
			'<div>first: Text1</div><div>last: Text2</div>',
			{}
		);
	});
	it('repeat object', function () {
		test(
			'<div repeat=[{"first":"Jack","last":"Brown"},{"first":"John","last":"White"}]>${value.first}: ${value.last}</div>',
			'<div>Jack: Brown</div><div>John: White</div>',
			{}
		);
	});
});
