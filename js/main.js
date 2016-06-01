 $(document).on("ready", function(){
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

// if (rightHeight3 > leftHeight3) {
// 	$("#left3").css("height", rightHeight3 + "px");
// }
// else {
// 	$("#right3").css("height", leftHeight3 + "px");
// }
});

// var setHeight = function(){
// 		var divHeight = $(".authorPic").innerHeight();

// 		$("#leftFirstBox").css({transform: setHeight(divHeight)});
// 	}

// $(document).on("ready", function(){
// 	var rightHeight = document.getElementById('right1').clientHeight;
// 	var leftHeight = document.getElementById('left1').clientHeight;
// if (leftHeight > rightHeight) {
// 	document.getElementById('right1').style.height=leftHeight+'px';
// } else {
// 	document.getElementById('left1').style.height=rightHeight+'px';
// }

// var rightHeight2 = document.getElementById('right2').clientHeight;
// 	var leftHeight2 = document.getElementById('left2').clientHeight;
// if (leftHeight2 > rightHeight2) {
// 	document.getElementById('right2').style.height=leftHeight2+'px';
// } else {
// 	document.getElementById('left2').style.height=rightHeight2+'px';
// }

// var rightHeight3 = document.getElementById('right3').clientHeight;
// 	var leftHeight3 = document.getElementById('left3').clientHeight;
// if (leftHeight3 > rightHeight3) {
// 	document.getElementById('right3').style.height=leftHeight3+'px';
// } else {
// 	document.getElementById('left3').style.height=rightHeight3+'px';
// }

// });


//YOU ALMOST HAVE THE JQUERY VERSION FIGURED OUT BELOW:

//

// 	//Center the logo when the browser resizes
// 	$(window).resize(setHeight);

// 	//Center the logo when the document is ready
// 	$(window).load(setHeight);
// });

// 	$(function() {
//     $("#leftFirstBox").matchHeight({
//         target: $(".authorPic")
//     });
// });
// });



	//Center Logo Function
// 	var divSize = function(){
// 		var imageHeight = $.innerHeight();
// 	$("#leftFirstBox").on("customevent", function(){
// 		$("#leftFirstBox")=imageHeight
// 	});
// 	$("#leftFirstBox").trigger("customevent");
// });
		

// $(".crazyLlama").delay(2000).trigger("customevent");
// });

// 		$().css({transform: "translate(" + (imageHeight/2-130) + "px, " + (logoImageHeight/2-18) + "px)"}).animate({opacity: '1'}, 4000);
// 	}

// 	//Center the logo when the browser resizes
// 	$(window).resize(centerLogo);

// 	//Center the logo when the document is ready
// 	$(window).load(centerLogo);

// });

// // Divs to resize according to corresponding image
// #leftFirstBox
// #leftThirdBox
// #rightSecondBox

// //Corresponding images
// #rightFirstBox
// #rightThirdBox
// #leftSecondBox

// //First I set up what I want my custom event to do, which in this case is to explode the llama photo upon document ready.
// 	$(".crazyLlama").on("customevent", function(){
// 		  $(".crazyLlama" ).effect("explode", function(){
// 		  	$(".angryLlama").show();
// 		  });
// 	});
// 	//Then, I actually call the function. It won't do anything if I don't call it.
// 	//I added a delay of two seconds here so that users could actually see the crazy llama before he explodes.
// 	$(".crazyLlama").delay(2000).trigger("customevent");
// });



// // $(document).on("ready", function(){
// // 	//Center Logo Function
// // 	var centerLogo = function(){
// // 		var logoImageWidth = $('#logo_image').innerWidth();
// // 		var logoImageHeight = $('#logo_image').innerHeight();

// // 		$('#logo_text').css({transform: "translate(" + (logoImageWidth/2-130) + "px, " + (logoImageHeight/2-18) + "px)"}).animate({opacity: '1'}, 4000);
// // 	}

// // 	//Center the logo when the browser resizes
// // 	$(window).resize(centerLogo);

// // 	//Center the logo when the document is ready
// // 	$(window).load(centerLogo);

// // });