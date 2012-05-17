(function ($) {
	// Browser core methods
	var trim = String.prototype.trim,
		indexOf = Array.prototype.indexOf,
		trimLeft = /^\s+/, 
		trimRight = /\s+$/;
		
	$.trim = (function () {
		// Use native String.trim function wherever possible
		return trim ? function (text) {
				return text == null ? "" : trim.call (text);
			} :
			// Otherwise use our own trimming functionality
			function (text) {
				return text == null ? "" : text.toString ().replace (trimLeft, "").replace (trimRight, "");
			}
	})();

	$.getScript = function (url, callback) {
		var script = document.createElement ('script');
		script.async = "async";
		script.onload = callback;
		script.src = url;

		document.head.appendChild (script);
	};

	$.inArray = function (elem, array, i) {
		var len;

		if (array) {
			if (indexOf) {
				return indexOf.call (array, elem, i);
			}
			len = array.length;
			i = i ? i < 0 ? Math.max (0, len + i) : i : 0;

			for (; i < len; i++) {
				// Skip accessing in sparse arrays
				if ( i in array && array [i] === elem) {
					return i;
				}
			}
		}

		return -1;
	};
	
	$.fn.scrollTop = function(scrollTop) {
		this.each(function() {
			this.scrollTop = scrollTop;
		});
		return this;
	};
	
	var hide = $.fn.hide;
	$.fn.hide = function(dur, cb) {
		hide.call(this);	
		if (typeof cb == 'function') cb();
		return this;
	};
	
	var show = $.fn.show;
	$.fn.show = function(dur, cb) {
		show.call(this);	
		if (typeof cb == 'function') cb();
		return this;
	};
	
	$.fn.slideUp = $.fn.hide;/*function(dur, cb){
		console.log("slideup");
		this.css({"transform":"scale(1,1)", "display":"block"});
		this.anim({scaleY:'0'},dur,cb);
	};*/
	
	$.fn.slideDown = $.fn.show;
	/*function(dur, cb){
		console.log("slidedown"); 
		this.css({"transform":"scale(1,0)", "display":"block"});
		this.css("height",this.height()+"px");
		this.anim({scaleY:'1'},dur,cb);
		//this.show();	
	};*/
	
	// allow zepto click to fire as well as bind to the event
	var click = $.fn.click;
	$.fn.click = function(event, callback) {
		if(! event) {
			return this.trigger('click');
		} else {
			return click.apply(this, arguments)
		}
	}
	
	// using existing functions for missing Zepto functions
	$.fn.outerHeight = $.fn.height;
	$.fn.outerWidth = $.fn.weight;
		
	$.fn.fadeIn = $.fn.show;
	$.fn.fadeOut = $.fn.hide;
	
	$.parseJSON = JSON.parse;
	$.fn.hover = $.fn.toggle;

	$.noop = function () {};
	
	// shouldn't use feature detection with zepto as it's mobile specific
	$.support = {};
	
	// list of plugins not supported with Zepto
	// plugins should always return Zepto object 
	// to prevent chaining from failing
	$.fn.expandingTextArea = 
	$.fn.cycle = 
	function() { 
		return this; 
	};

}) (window.Zepto);
