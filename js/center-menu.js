$(document).ready(function(){
	$("#center-menu").on("click","a", function (event) {		
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		    func = $(id).click();
		$('body,html').animate({scrollTop: top}, 1200);


	});
	$(function func(){
			id.click().setTimeout("func", 2000);
		});
});