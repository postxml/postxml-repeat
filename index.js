'use strict';

module.exports = function (options) {
	
	options = options || {};
	options.selector = options.selector || '[repeat]';
	options.attr = options.attr || 'repeat';
	
	return function ($) {
		while ($(options.selector).length != 0) {
			$(options.selector).each(function () {
				let data = JSON.parse($(this).attr(options.attr)),
					repeated = '';
				
				$(this).removeAttr(options.attr);
				let html = $.html(this);
				
				if (typeof data === 'number') {
                    repeated += html.repeat(data);
				} else if (typeof data === 'object') {
                    for (let key in data) {
                        let value = data[key];
                        repeated += eval(`\`${html}\``);
                    }
				}
				
				$(this).replaceWith(repeated);
			});
		}
	}
};
