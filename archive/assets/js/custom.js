$(document).ready(function() {


var waypoint = new Waypoint({
	  element: document.getElementById('section1'),
	  handler: function() {
  	
	  	$("#section1 .cc-title").removeClass("hidden");
	    $("#section1 .cc-title").addClass("fadeInRight animated");
	    setTimeout( function(){ 
    		$("#section1 .button1").removeClass("hidden");
	    	$("#section1 .button1").addClass("fadeIn animated");
  		}  , 700 );
	    
	  }
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('section2'),
	  handler: function() {
	  	$("#section2 img").removeClass("hidden");
	    $("#section2 img").addClass("zoomIn  animated");

	     setTimeout( function(){ 
    		$("#section2 .cc-title").removeClass("hidden");
	    	$("#section2 .cc-title").addClass("fadeIn animated");
  		}  , 10 );

	      setTimeout( function(){ 
    		$("#section2 .cc-desc").removeClass("hidden");
	    	$("#section2 .cc-desc").addClass("fadeIn animated");
  		}  , 300 );
	  }
	})


	var waypoint = new Waypoint({
	  element: document.getElementById('section3'),
	  handler: function() {
	  	$("#section3 img").removeClass("hidden");
	    $("#section3 img").addClass("fadeIn  animated");

	     setTimeout( function(){ 
    		$("#section3 .cc-title").removeClass("hidden");
	    	$("#section3 .cc-title").addClass("fadeInUp animated");
  		}  , 50 );

	      setTimeout( function(){ 
    		$("#section3 .cc-desc").removeClass("hidden");
	    	$("#section3 .cc-desc").addClass("fadeInUp animated");
  		}  , 300 );
	  }
	})

		var waypoint = new Waypoint({
	  element: document.getElementById('section4'),
	  handler: function() {
	  	$("#section4 img").removeClass("hidden");
	    $("#section4 img").addClass("zoomIn  animated");

	     setTimeout( function(){ 
    		$("#section4 .cc-title").removeClass("hidden");
	    	$("#section4 .cc-title").addClass("fadeInDown animated");
  		}  , 50 );

	      setTimeout( function(){ 
    		$("#section4 .cc-desc").removeClass("hidden");
	    	$("#section4 .cc-desc").addClass("fadeIn animated");
  		}  , 300 );
	  }
	})
	
});