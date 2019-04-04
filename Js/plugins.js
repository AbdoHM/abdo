$(document).ready(function()
{
	/* Start Cover */
	
//	$('.square h1 , .tlt').textillate({
//			in: {effect:'bounceInUp' , minDisplayTime: 2000 , loop:true , autostart:true},
//		    out: {effect:'fadeOut' , minDisplayTime: 2000 , loop:true , autostart:true}
//		})
	/* End Cover
	
	/* Start Nav List */
	$('.list-logo-div').click(function navMenu(){
		$('.nav-list').animate({"right":'0px'},500)
		$('body').animate({"background-color":'rgba(0,0,0,0.6)' ,"z-index":'999' },500)
		$('.n-list a').textillate({
			in: {effect:'bounceInUp' , minDisplayTime: 100000}
		})
		$('.out-nav-list').fadeIn(500)
		
	})
	
	$('.nav-list i , .out-nav-list ').click(function(){
		$('.nav-list').animate({"right":'-300px'},500)
		$('.out-nav-list').fadeOut(500)
		
	})
	
	$('.to-home').click(function(){
		$('html , body').animate({
			scrollTop : $('#home').offset().top
		} , 500)
	})
	$('.to-about').click(function(){
		$('html , body').animate({
			scrollTop : $('#about-id').offset().top
		} , 500)
	})
	$('.to-work').click(function(){
		$('html , body').animate({
			scrollTop : $('#work').offset().top
		} , 500)
	})
	$('.to-services').click(function(){
		$('html , body').animate({
			scrollTop : $('#service').offset().top - 50
		} , 500)
	})
	$('.to-employ').click(function(){
		$('html , body').animate({
			scrollTop : $('#employ').offset().top
		} , 500)
	})
	$('.to-skills').click(function(){
		$('html , body').animate({
			scrollTop : $('#skills').offset().top - 50
		} , 500)
	})
	$('.to-educate').click(function(){
		$('html , body').animate({
			scrollTop : $('#educate').offset().top
		} , 500)
	})
	$('.to-testimonial').click(function(){
		$('html , body').animate({
			scrollTop : $('#testimonial').offset().top
		} , 500)
	})
	$('.to-blog').click(function(){
		$('html , body').animate({
			scrollTop : $('#blog').offset().top + 50
		} , 500)
	})
	$('.to-contact').click(function(){
		$('html , body').animate({
			scrollTop : $('#contact').offset().top
			
		} , 500 , function(){
			$('to-contact').css("text-decoration","line-through")
		})
	})
	
	$(".siteheader").hover(function(){
		$(this).css({background: "rgba(0,0,0,0)",border:'none', transition : 'all 2s ease-in-out'})
	})
	$(".square").hover(function(){
		$(this).css({background: "rgba(0,0,0,0)",border:'none', transition : 'all 2s ease-in-out'}),
		$('.tlt , .square h1').css({color:'white', transition : 'all 2s ease-in-out'})	
	})
	$(".square-border").hover(function(){
		$(this).css({background: "rgba(0,0,0,0)",border:'rgba(0,0,0,0) double 0px', transition : 'all 2s ease-in-out'})
	})
	
	$(".siteheader").mouseleave(function(){
		$(this).css("background","rgba(255,255,255,0.6)")
	})
	
	$('.about-img img').hover(function(){
		$(this).css({filter:"hue-rotate(360deg)" , transition : 'all 5s ease-in-out'})
	})
	$('.about-img img').mouseleave(function(){
		$(this).css({filter:"none"})
	})
	$('.volume').click(function(){
		$("audio").removeAttr('autoplay')
		
	})
	$(".square").mouseleave(function(){
		$(this).css({background:'rgba(255,255,255,0.8)', transition : 'all 2s ease-in-out'}),
			$('.tlt , .square h1').css({color:'black', transition : 'all 2s ease-in-out'})
	})
	$(".square-border").mouseleave(function(){
		$(this).css({background: "rgba(0,0,0,0)",border:'rgba(255,255,255,0.8) double 5px', transition : 'all 2s'})
	})
	
	/* End Nav List*/
	
	/* Start work */
 	$('.box-1').mouseover(function()
 {
	$('.over-img-1').fadeIn().css({"background-color":'rgba(255,255,255,0.9)' } )
	$('.my-img-1').css({"-webkit-transform" : 'scale(1.1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'none' } )	
		
 })
	 	$('.box-1').mouseleave(function()
 {
	$('.over-img-1').fadeOut()
	$('.my-img-1').css({"-webkit-transform" : 'scale(1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'grayscale(100%)' } )	
		
 })
	 	$('.box-2').mouseover(function()
 {
	$('.over-img-2').fadeIn().css({"background-color":'rgba(255,255,255,0.9)' } )
	$('.my-img-2').css({"-webkit-transform" : 'scale(1.1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'none' } )	
		
 })
	 	$('.box-2').mouseleave(function()
 {
	$('.over-img-2').fadeOut()
	$('.my-img-2').css({"-webkit-transform" : 'scale(1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'grayscale(100%)' } )	
		
 })
	 	$('.box-3').mouseover(function()
 {
	$('.over-img-3').fadeIn().css({"background-color":'rgba(255,255,255,0.9)' } )
	$('.my-img-3').css({"-webkit-transform" : 'scale(1.1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'none' } )	
		
 })
	 	$('.box-3').mouseleave(function()
 {
	$('.over-img-3').fadeOut()
	$('.my-img-3').css({"-webkit-transform" : 'scale(1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'grayscale(100%)' } )	
		
 })
	 	$('.box-4').mouseover(function()
 {
	$('.over-img-4').fadeIn().css({"background-color":'rgba(255,255,255,0.9)' } )
	$('.my-img-4').css({"-webkit-transform" : 'scale(1.1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'none' } )	
		
 })
	 	$('.box-4').mouseleave(function()
 {
	$('.over-img-4').fadeOut()
	$('.my-img-4').css({"-webkit-transform" : 'scale(1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'grayscale(100%)' } )	
		
 })
	 	$('.box-5').mouseover(function()
 {
	$('.over-img-5').fadeIn().css({"background-color":'rgba(255,255,255,0.9)' } )
	$('.my-img-5').css({"-webkit-transform" : 'scale(1.1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'none' } )	
		
 })
	 	$('.box-5').mouseleave(function()
 {
	$('.over-img-5').fadeOut()
	$('.my-img-5').css({"-webkit-transform" : 'scale(1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'grayscale(100%)' } )	
		
 })
	 	$('.box-6').mouseover(function()
 {
	$('.over-img-6').fadeIn().css({"background-color":'rgba(255,255,255,0.9)' } )
	$('.my-img-6').css({"-webkit-transform" : 'scale(1.1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'none' } )	
		
 })
	 	$('.box-6').mouseleave(function()
 {
	$('.over-img-6').fadeOut()
	$('.my-img-6').css({"-webkit-transform" : 'scale(1)', "-webkit-transition": 'transform 0.4s' ,"-webkit-filter":'grayscale(100%)' } )	
		
 })
	/* End Work */
	
	/* Start Employment */
	
		 	   $('#e-b-1 .e-box').mouseover(function()
 {
		    $('#e-b-1 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#e-b-1 .border-right').animate({"height":'100%'},200)})		
			$('#e-b-1 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#e-b-1 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#e-b-1 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#e-b-1 .e-box ').mouseleave(function()
 {
			$('#e-b-1 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#e-b-1 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#e-b-1 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#e-b-1 .border-top').animate({"width":'0.000001%'},200 , function(){			 
			$('#e-b-1 .border-right').animate({"height":'0.000001%'},200)})
})

			 	   $('#e-b-2 .e-box ').mouseover(function()
 {
		    $('#e-b-2 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#e-b-2 .border-right').animate({"height":'100%'},200)})		
			$('#e-b-2 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#e-b-2 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#e-b-2 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#e-b-2 .e-box ').mouseleave(function()
 {
			$('#e-b-2 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#e-b-2 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#e-b-2 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#e-b-2 .border-top').animate({"width":'0.000001%'},200 , function(){			 
			$('#e-b-2 .border-right').animate({"height":'0.000001%'},200)})
})
			 	   $('#e-b-3 .e-box ').mouseover(function()
 {
		    $('#e-b-3 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#e-b-3 .border-right').animate({"height":'100%'},200)})		
			$('#e-b-3 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#e-b-3 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#e-b-3 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#e-b-3 .e-box ').mouseleave(function()
 {
			$('#e-b-3 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#e-b-3 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#e-b-3 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#e-b-3 .border-top').animate({"width":'0.000001%'},200 , function(){			 
			$('#e-b-3 .border-right').animate({"height":'0.000001%'},200)})
})
			 	   $('#e-b-4 .e-box ').mouseover(function()
 {
		    $('#e-b-4 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#e-b-4 .border-right').animate({"height":'100%'},200)})		
			$('#e-b-4 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#e-b-4 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#e-b-4 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#e-b-4 .e-box ').mouseleave(function()
 {
			$('#e-b-4 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#e-b-4 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#e-b-4 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#e-b-4 .border-top').animate({"width":'0.000001%'},200 , function(){			 
			$('#e-b-4 .border-right').animate({"height":'0.000001%'},200)})
})
	
	/* End Employment */
	
    /* Start Education */
	
		 	   $('#ed-b-1 .e-box').mouseover(function()
 {
		    $('#ed-b-1 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#ed-b-1 .border-right').animate({"height":'100%'},200)})		
			$('#ed-b-1 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#ed-b-1 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#ed-b-1 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#ed-b-1 .e-box ').mouseleave(function()
 {
			$('#ed-b-1 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#ed-b-1 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#ed-b-1 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#ed-b-1 .border-top').animate({"width":'0.000001%'},200 ,function(){			 
			$('#ed-b-1 .border-right').animate({"height":'0.000001%'},200)})
})

			 	   $('#ed-b-2 .e-box ').mouseover(function()
 {
		    $('#ed-b-2 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#ed-b-2 .border-right').animate({"height":'100%'},200)})		
			$('#ed-b-2 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#ed-b-2 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#ed-b-2 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#ed-b-2 .e-box ').mouseleave(function()
 {
			$('#ed-b-2 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#ed-b-2 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#ed-b-2 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#ed-b-2 .border-top').animate({"width":'0.000001%'},200, function(){			 
			$('#ed-b-2 .border-right').animate({"height":'0.000001%'},200)})
})
			 	   $('#ed-b-3 .e-box ').mouseover(function()
 {
		    $('#ed-b-3 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#ed-b-3 .border-right').animate({"height":'100%'},200)})		
			$('#ed-b-3 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#ed-b-3 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#ed-b-3 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#ed-b-3 .e-box ').mouseleave(function()
 {
			$('#ed-b-3 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#ed-b-3 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#ed-b-3 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#ed-b-3 .border-top').animate({"width":'0.000001%'},200, function(){			 
			$('#ed-b-3 .border-right').animate({"height":'0.000001%'},200)})
})
			 	   $('#ed-b-4 .e-box ').mouseover(function()
 {
		    $('#ed-b-4 .border-top').animate({"width":'100%'},200 , function(){			 
		    $('#ed-b-4 .border-right').animate({"height":'100%'},200)})		
			$('#ed-b-4 .border-bottom-2').animate({"width":'0.0003%'},200 ,function(){
			$('#ed-b-4 .border-left-2').animate({"height":'0.0001%'},200 ,function(){		 
			$('#ed-b-4 .shadow-collect').animate({"margin":'0px'},300)}) })	
})
			   $('#ed-b-4 .e-box ').mouseleave(function()
 {
			$('#ed-b-4 .border-bottom-2').animate({"width":'100%'},200 ,function(){			 
			$('#ed-b-4 .border-left-2').animate({"height":'100%'},200 ,function(){			 
			$('#ed-b-4 .shadow-collect').animate({"margin-top":'20px',"margin-left":'20px'},300)})})	
			$('#ed-b-4 .border-top').animate({"width":'0.000001%'},200, function(){			 
			$('#ed-b-4 .border-right').animate({"height":'0.000001%'},200)})
})
	
	/* End Education */
	
	
	/* Start Contact */
	  
	$('.facebook').hover(function(){
		$('.facebook-1').animate({"margin-top": '0px'} ,{ duration: 200, easing:'linear' })
	})
//	
	$('.facebook').mouseleave(function(){
		$('.facebook-1').animate({"margin-top": '-70px'} ,{ duration: 200, easing:'linear' })
	})
//	
	$('.twitter').hover(function(){
		$('.twitter-1').animate({"margin-top": '0px'} ,{ duration: 200, easing:'linear' })
	})
//	
	$('.twitter').mouseleave(function(){
		$('.twitter-1').animate({"margin-top": '-70px'} ,{ duration: 200, easing:'linear' })
	})
	$('.google-plus').hover(function(){
		$('.google-plus-1').animate({"margin-top": '0px'} ,{ duration: 200, easing:'linear' })
	})
//	
	$('.google-plus').mouseleave(function(){
		$('.google-plus-1').animate({"margin-top": '-70px'} ,{ duration: 200, easing:'linear' })
	})
	
	/* End Contact */
	
    /* Start Footer */ 
	$('.card span').hover(function(){
		$(".card span , .card p , .card bold ").css({ color:"rgba(0,0,0,0.9)", transition : 'all 2s ease-in-out'})
	})
	
	$('.card span').mouseleave(function(){
		$(".card span , .card p , .card bold ").css("color","rgba(225,225,225,0.5)")
	})
	
	
	
	
	/* End Footer*/



		
var $win = $('window');

	$win.on('scroll', function(){
		'use strict';
		console.log('Scrolling!');
	})
	
//		$('.bxslider').bxSlider();
	
	/* Start Tests */
	
//	var test = $('.click-test').click()
//	
//	if (test){
//		$('.button-test').()
//	}
	
	/* End Tests */
		
});

var skills = document.getElementById('skills');

//if (window.scrollY <= 4100) {
//	'use strict';
//	skills.style.display = 'none';
//	console.log('4000');
//}
//if (window.scrollY > 4100) {
//	'use strict';
//	skills.style.display = 'block';
//	console.log('4000');
//}

console.log(window.scrollY);