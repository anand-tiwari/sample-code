var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {

	$scope.data = [
		{
			"img1":"p1.jpg",
			"img2":"r1.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"1800"
		},
		{
			"img1":"g2.jpg",
			"img2":"g3.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"600"
		},
		{
			"img1":"n2.jpg",
			"img2":"n3.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"1500"
		},
		{
			"img1":"b1.jpg",
			"img2":"b2.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"0"
		},
		{
			"img1":"r2.jpg",
			"img2":"r3.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"2100"
		},
		{
			"img1":"b3.jpg",
			"img2":"g1.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"300"
		},
		{
			"img1":"h1.jpg",
			"img2":"h2.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"900"
		},
		{
			"img1":"h3.jpg",
			"img2":"n1.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"1200"
		}
	];

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
});


