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
	it('repeat from array', function () {
		test(
			'<div repeat=["Text1","Text2"]>{{value}}</div>',
			'<div>Text1</div><div>Text2</div>',
			{}
		);
	});
	it('repeat from object', function () {
		test(
			'<div repeat={"first":"Text1","last":"Text2"}>{{key}}: {{value}}</div>',
			'<div>first: Text1</div><div>last: Text2</div>',
			{}
		);
	});
});
