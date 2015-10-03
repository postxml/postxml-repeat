module.exports = function (options) {
	
	options = options || {};
	options.selector = options.selector || '[repeat]';
	options.attr = options.attr || 'repeat';
	
	return function ($) {
		
		$.prototype.repeat = function () {
			var numb = parseInt($(this).attr(options.attr)),
				element = '';
			
			$(this).removeAttr(options.attr);
			
			for (var i = 0; i < numb; i++){
				element += $.html(this);
			}
			$(this).replaceWith(element);
		};
		
		while ($(options.selector).length != 0) {
			$(options.selector).repeat();
		}
	}
};
