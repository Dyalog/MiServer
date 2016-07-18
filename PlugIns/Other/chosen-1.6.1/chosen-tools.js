/* chosen-tools.js
 * Michael Baas, 2016
 * code inspired by ktusznio @ http://stackoverflow.com/questions/1801499/how-to-change-options-of-select-with-jquery
 ***/

(function($, window) {

  
  /* replace Options: options is 
  a) array of Strings containing option-texts (which are also used as values) 
  b) array of arrays(Text,id)
  c) array of arrays(Text,id,disabled)
  d) array of arrays(Text,id,disabled,selected)
  */
  $.fn.replaceOptions = function(options) {
    var self, $option;
    self = this;
console.log("self.len=" + self.length);    
console.log(self);
    for (i=0;i<self.length;i++)
    {//*** Keep first option (=prompt) 
			var firstOption = $(self[i]).find( ">:first-child");    	
			$(self[i]).empty().append(firstOption);    
    }

    $.each(options, function(index, opt) {
      $option = $("<option></option>");
      if (Array.isArray(opt))
      {
      	switch (opt.length) {
		        case 1: $option.attr("value", opt[0]).text(opt[0]);
		        case 2: $option.attr("value", opt[1]).text(opt[0]);
		        case 3: $option.attr("value", opt[1]).text(opt[0]).prop('disabled',opt[2]==0);
		        case 4: $option.attr("value", opt[1]).text(opt[0]).prop('disabled',opt[2]==0).prop('selected',opt[3]==1);
      	}
      } else {
      
        $option.attr("value", opt).text(opt);
      }
    for (i=0;i<self.length;i++)
    {
    	console.log("append to " + i);
			$(self[i]).append($option);
    }
      
    });
    
  };  
  
})(jQuery, window);