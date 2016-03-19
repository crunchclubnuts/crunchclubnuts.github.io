var first_page_bool = false;
var second_page_bool = false;

var Muench = (function (window, document) {

    that = this;
	
	// endEvent = hasTouch ? 'touchend' : 'mouseup',
	
	Muench = function (opts) {
	
	    that = this;
		
	    // ********************************************************
		// ************* Skimmin-specific variables ****************
		// ********************************************************
		
		this.current_slide = '1';
		
		// ---------------------------------------------------------
		// Muench launch
		// ---------------------------------------------------------
				
		// Options from user
		for (i in opts) this.options[i] = opts[i];
		
		// ---------------------------------------------------------
		// Skimmin launch
		// ---------------------------------------------------------
        
        this.fn_check_if_first_visit();
    	this.fn_convert_emoji();
       
    };
    
	Muench.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
		fn_check_if_first_visit: function() {

			// home page
			if ($(".content-container")[0]) {
				var first = this.fn_read_cookie('crunchclubfirst');
				if (first) {
					first_page_bool = true;
				}
				else {
					this.fn_create_cookie('crunchclubfirst', 'test', 7);
				}
			} 

			// sign up page
			else {
				var second = this.fn_read_cookie('crunchclubsecondary');
				if (second) {
					second_page_bool = true;
				}
				else {
					this.fn_create_cookie('crunchclubsecondary', 'testagain', 7);
				}
			}

		},

		fn_create_cookie: function(name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},

		fn_read_cookie: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},

       	fn_convert_emoji: function() {
			
			$(".emoji").each(function() {
    			emojione.imageType = 'svg';
    			var input = $(this).html();
    			var output = emojione.shortnameToImage(input);
    			$(this).html(output);
			});
		},
		
	};

	return Muench;

})(window, document);
