 $(document).on("ready", function(){
	var matchBoxes = function(){
		var rightHeight = $("#right1").outerHeight(true);
		var leftHeight = $("#left1").outerHeight(true);
		var rightHeight2 = $("#right2").outerHeight(true);
		var leftHeight2 = $("#left2").outerHeight(true);
		var rightHeight3 = $("#right3").outerHeight(true);
		var leftHeight3 = $("#left3").outerHeight(true);

if (rightHeight > leftHeight) {
	$("#left1").css("height", rightHeight + "px");
	}
else {
	$("#right1").css("height", leftHeight + "px");
	}

if (leftHeight2 > rightHeight2) {
	$("#right2").css("height", leftHeight2 + "px");
	}
else {
	$("#left2").css("height", rightHeight2 + "px");
	}
}
	$(window).resize(matchBoxes);

	$(window).load(matchBoxes);

$("#arrowDown").on("click", function(){   
	$.scrollTo("#left1", 800); 
	});

$("#arrowDown2").on("click", function(){   
	$.scrollTo("#fourthSection", 800); 
	});

 	var offset = $(".nav-wrapper").outerHeight(true);
	console.log(offset);
	$("body").css("margin-top", offset);

	$(".nav-secondary a.jump").on("click", function(event){
		
		var pageToScrollTo = $(this).attr("href");
		event.preventDefault();
		$(window).scrollTo(pageToScrollTo, 3000, {offset:-offset});
	});

	$(".nav-main a").on("click", function(event){
		event.preventDefault();
		var pageToScrollTo = $(this).attr("href");
		$(window).scrollTo(pageToScrollTo, 3000, {offset:-offset});
	});

	$(".page").hover(
	    function(){
	       	$(".overlay").fadeIn()
	   },
	   function(){
	   		$(".overlay").fadeOut() 
	   }
	);

	$(".js-nav").on("click", function(){
		$("nav").slideToggle();
	});

}); // closes doc.ready

// $(".poem").hover(
//        function(){ $("body").addClass("wholePageDarken")
//    },
//        function(){ $("body").removeClass("wholePageDarken") 
//    }
// )




