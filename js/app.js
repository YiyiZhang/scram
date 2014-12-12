$(function(){

//ANIMATED BOXES
	$(".animatedcontainer").hover(
		function(){//mousein
			$(".animatedpanel").animate(
				{height: "30%"},600)
			},
		function(){//mouseout
			$(".animatedpanel").animate(
				{height: "5%"},600)
		});

});