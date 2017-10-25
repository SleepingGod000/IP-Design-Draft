$(document).ready(function(){

	$('#myCarousel').on('slide.bs.carousel', function () {
	$('.zoomContainer').remove();
	$('.zoomImage').removeData('elevateZoom');
	});
	
	$('#myCarousel').on('slid.bs.carousel', function () {
		$('.zoomImage').elevateZoom({
			zoomType: "window",
			cursor: "crosshair",
			zoomWindowFadeIn: 500,
			zoomWindowFadeOut: 750,
			zoomWindowWidth:300,
			zoomWindowHeight:300,
			scrollZoom : true
		});
	});
	
	$('.zoomImage').elevateZoom({
	zoomType: "window",
	cursor: "crosshair",
	zoomWindowFadeIn: 500,
	zoomWindowFadeOut: 750,
	zoomWindowWidth:300,
    zoomWindowHeight:300,
	scrollZoom : true
   }); 
});