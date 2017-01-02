$(document).ready(function(){
	// Initial code 
  	$(".panel").animate({ 
        right:'0px'
    },1000);

  	// close icon code 
    $(".close").on('click',function(){
    	$('.panel').animate({
    		right:'-354px'
    	},1000);
    	$('.open').animate({
    		height:"18px",
    		padding:"2px 13px"
    	});
    });

    // open button click event
    $(".open").on('click', function(){
    	$(".panel").animate({ 
        	right:'0px'
    	},1000);
    	$('.open').animate({
    		height:"0",
    		padding:"0"
    	});
    });
    
});
