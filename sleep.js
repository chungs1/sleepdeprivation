$(document).ready(function () {
	$("#chair").fadeOut();

	$(".brainConText").hover(function() {
		console.log("asdfgasdfasdf");
		$(".braintext").fadeIn(450);
	}, function() {
		$(".braintext").fadeOut(450);
	});

	$(".bodyConText").hover(function() {
		console.log("asdfgasdfasdf");
		$(".bodytext").fadeIn(450);
	}, function() {
		$(".bodytext").fadeOut(450);
	});


	var controller = new ScrollMagic.Controller();

	function hidePerson(e) {
		if (e.type == "enter") {
			console.log('hideperson');
			$("#wow").html("");
		} else {
			console.log('revealPerson');
			$("#wow").html("<img src=\"standingPerson.png\" class=\"replace\"></img>");
		}
	}

	function animateWalking(e) {
		if (e.type == "enter") {
			$("#wow").html("<img src=\"standingPerson.png\" class=\"replace\"></img>");
		} else {
			$("#wow").html("<img src=\"thisisyou.png\"></img>");
		}
	}

	function unpinHack(e) {
		if (e.type == "enter") {
			$("#chair").fadeIn();
			$("#wow").fadeOut();
		} else {
			$("#chair").fadeOut();
			$("#wow").fadeIn();
		}
	}

	function nightTime(e) {
		if (e.type == "enter") {
			console.log("go to night");
			$(".scrollable").addClass("colorTrans");
		} else {
			$(".scrollable").removeClass("colorTrans");
			console.log("removing colorTrans");
		}
	}


	// person starts walking
	var scene1 = new ScrollMagic.Scene({
		triggerHook: .33,
		reverse: true,
		triggerElement: ".person",
	})
	.on("enter leave", animateWalking)
	.setPin(".person")
	.addTo(controller);

	// Scene2 is hackathon desk and sitting at the desk
	// TODO: Add duration btw scene2 and scene4 (after transition to nighttime)
	var scene2 = new ScrollMagic.Scene({
		triggerHook: .25,
		reverse: true,
		triggerElement: ".hackathons",
	})
	.on("enter leave", unpinHack)
	.setPin(".hackathons")
	.addTo(controller);

	// Story about how the thing transitions and whatnot
	// TODO: Add duration btw scene3 and scene4 (after transition to nighttime)
	var scene3 = new ScrollMagic.Scene({
		triggerHook: .33,
		reverse: true,
		triggerElement: ".text2",
	})
	.on("enter leave", nightTime)
	.setPin(".text2")
	.addTo(controller);


	var scene5 = new ScrollMagic.Scene({
		triggerHook: .75,
		reverse: true,
		triggerElement: ".text4"
	})
	.on("enter leave", hidePerson)
	.addTo(controller);
	
	scene3.duration(scene5.scrollOffset()-scene3.scrollOffset()+400);
	scene2.duration(scene5.scrollOffset()-scene2.scrollOffset()+100);

	var scene6 = new ScrollMagic.Scene({
		triggerHook: .33,
		reverse: true,
		triggerElement: ".bed"
	})
	.setPin(".bed")
	.on("enter leave", nightTime)
	.addTo(controller);

});
