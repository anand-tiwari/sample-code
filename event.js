$(document).ready(function(){
  	$(".panel").animate({ 
        right:'0px'
    },1000);

    $('.img-box').each(function(){
    	//set size
	    var containerHeight = $(this).height(),//box height
	        containerWidth = $(this).width(),//box width
	        image = $(this).children('img'),//image
	        imageHeight = image.height(),//inital image height
	        imageWidth = image.width();//initial image width
	    if (imageHeight>imageWidth) {//if portrait
	        image.addClass('ww').removeClass('wh');//set width 100%
	    } else {//if landscape
	        image.addClass('wh').removeClass('ww');//set height 100%
	    }
	    //set offset
	    var newimageHeight = image.height(),//new image height
	        newimageWidth = image.width(),//new image width
	        heightDiff = (newimageHeight-containerHeight)/2,//half dif img/box height
	        widthDiff = (newimageWidth-containerWidth)/2;//half dif img/box width

	    if (newimageHeight<newimageWidth) {//if portrait
	        image.css({marginLeft: '-'+widthDiff+'px', marginTop: 0});//offset left
	    } else {//if landscape
	        image.css({marginTop: '-'+heightDiff+'px', marginLeft: 0});//offset top
	    }
	});
	
  	// close icon code 
    $(".close").on('click',function(){
    	$(this).closest('.panel').animate({
    		right:'-354px'
    	},1000);
    	$(this).siblings('.open').animate({
    		height:"18px",
    		padding:"2px 13px"
    	});
    });

    // open button click event
    $(".open").on('click', function(){
    	$(this).closest(".panel").animate({ 
        	right:'0px'
    	},1000);
    	$(this).animate({
    		height:"0",
    		padding:"0"
    	});
    });
});