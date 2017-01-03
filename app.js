var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {

	$scope.data = [
		{
			"img1":"b1.jpg",
			"img2":"b2.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"0"
		},
		{
			"img1":"b3.jpg",
			"img2":"g1.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"300"
		},
		{
			"img1":"g2.jpg",
			"img2":"g3.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"600"
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
		},
		{
			"img1":"n2.jpg",
			"img2":"n3.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"1500"
		},
		{
			"img1":"p1.jpg",
			"img2":"r1.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"1800"
		},
		{
			"img1":"r2.jpg",
			"img2":"r3.jpg",
			"type":"Are you looking for 'White dresses' ",
			"specification":"Cotton White Dresses",
			"top":"2100"
		}
	];

	$(document).ready(function(){
	  	$(".panel").animate({ 
	        right:'0px'
	    },1000);

	  	$('.img-box').each(function() {
	    //set size
		    var th = $(this).height(),//box height
		        tw = $(this).width(),//box width
		        im = $(this).children('img'),//image
		        ih = im.height(),//inital image height
		        iw = im.width();//initial image width
		    if (ih>iw) {//if portrait
		        im.addClass('ww').removeClass('wh');//set width 100%
		    } else {//if landscape
		        im.addClass('wh').removeClass('ww');//set height 100%
		    }
		    //set offset
		    var nh = im.height(),//new image height
		        nw = im.width(),//new image width
		        hd = (nh-th)/2,//half dif img/box height
		        wd = (nw-tw)/2;//half dif img/box width
		    if (nh<nw) {//if portrait
		        im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
		    } else {//if landscape
		        im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
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
