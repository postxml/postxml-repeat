var _ = require('lodash');

module.exports = function (options) {
	
	options = options || {};
	options.selector = options.selector || '[repeat]';
	options.attr = options.attr || 'repeat';
	
	return function ($) {
		while ($(options.selector).length != 0) {
			$(options.selector).each(function () {
				var data = JSON.parse($(this).attr(options.attr)),
					repeated = '';
				
				$(this).removeAttr(options.attr);
				var html = $.html(this);
				
				if (typeof data === 'number') {
					for (var i = 0; i < data; i++){
						repeated += $.html(this);
					}
				} else if (typeof data === 'object') {
					_.each(data, function (element, key) {
						repeated += html
										.replace('{{value}}', element)
										.replace('{{key}}', key);;
					});
				}
				
				$(this).replaceWith(repeated);
			});
		}
	}
};
