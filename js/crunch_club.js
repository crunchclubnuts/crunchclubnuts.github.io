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
        
        $('#white-subscribe-button').on('click', this.fn_tap_subscribe.bind(this));
        $('#subscribe-button').on('click', this.fn_tap_subscribe.bind(this));
        $('#header-text').on('click', this.fn_tap_subscribe.bind(this));
        
        $('#white-juicy-button').on('click', this.fn_tap_juicy.bind(this));
        $('#juicy-button').on('click', this.fn_tap_juicy.bind(this));
        
    	this.fn_convert_emoji();
		
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
       
    };
    
	Muench.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
       	fn_convert_emoji: function() {
			
			$(".emoji").each(function() {
    			emojione.imageType = 'svg';
    			var input = $(this).html();
    			var output = emojione.shortnameToImage(input);
    			$(this).html(output);
			});
		},
        
        fn_tap_subscribe: function() {
        	
        	/*$('#outer-container1').fadeIn(0);
    		$('#container1').fadeIn(0);
    		$('#container1').addClass('animated zoomIn');*/
    		$('.content-container').fadeOut(0);
    		$('.mission-container').fadeIn(0);
				
        }, 
		
		fn_tap_juicy: function() {
			$('#container1').fadeOut(300);
		},
		
	};

	return Muench;

})(window, document);	
