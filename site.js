$(document).ready(function() {

	 
	//display range slider value with realtime changes
	$('#range').on("input", function(){
			var testit = $('#range').val();
			$('#rangefill').html(testit);
	});
	//end display range slider value with realtime changes

	//animate nav links 

	 $("#viewtable").click(function() {
		 
		$('#position').css("position", "absolute");
		//$("body").css({ "visibility": "hidden", "background":"black"});
		

		$('body').toggleClass('tableBackground');
		$('#tableblock').toggleClass('fullTable');
		$('#tableblock button').animate({width: '+=40%', fontSize:'+=40%'}, 1000, 
				//callback
				function(){$(this).animate({width:'-=40%',fontSize:'-=40%'}, 1000, function(){$(this).stop();
			}
		);});

		

		//$('image').toggleClass('tableimage');
		//$('#tableblock').css({"visibility": "visible","position": "absolute", "z-index": "10", "top": "7em", "height": "50%"});
		
		
			if(!($("#tableblock img").length)) {
		$('#tableblock').append("<img src='images/yak.png'></img>");
		$("#tableblock #viewtable").html('click to return');
		}
	else {$('#tableblock img').remove();
	$('#position').css("position", "initial");
	 
	$("#tableblock #viewtable").html('click to view fullpage table');
}
	}
			);
		
		
			/*$("#heading").click(function() {
					$("h1").toggleClass("change");
					$("nav ul, nav a, nav li, nav").css("z-index", "4");
					$("#pg1maincontent").animate({
						height: "-=860",
					}, 1600, function() {
						$("#pg1maincontent").animate({
							height: "+=860",
					"	}, 4000)
			});
			$("nav a").css({
				background:  "red",
				color: "white",
				border: "red"

			});
			$("ul").animate({
				 
				left: "-=750",
				top: "-=50"

			}, 1500, 'swing')
			$("ul").animate({
				top:"+=250"
			})
			$("ul").animate({
				left: "+=750",
				top: "-=200"
			}, 1500)
			$("ul").animate({
				fontSize: "+=3em"
				
			}, 2000, function () {
				$("ul").animate({
					fontSize: "-=3em"
				}, function() {
					$("nav a").css({
				
				color: "midnightblue",
				background: "#fae1d1",
				border: "solid 1px white"
			});}
				)
			});
	});//end animate nav links
	*/
	$("#jokhang").mouseenter(function() {
		 	
		  $("#jokhang").fadeOut(1000).fadeIn(500);

  		 }
  	); 

  	//dealing with form
   $('#userinfo').submit(function(a) {
   	   	var filler = $('#name:input:text').val();
   		var gender = $(':radio:checked', '#userinfo').val();
   		var when = $('input[type=date]').val();
   		var clr = $('input[type=color]').val();
   		
   		//alert(filler);
   		filler= $.trim(filler)

   		$('body').css("background", clr);

   		
   		//if not that name and gender fields are not empty, alert
   	    if (!(filler !='' && gender != null && when !='')){
   	    	alert('bad');

               
               	shake();
               
               function shake() {
               	$('aside').animate({right: "-=10"}, 100, function() {
               		$(this).animate({right: "+=20"}, 100, function(){
               			$(this).animate({right: "-=20"}, 100, function(){
               				$(this).animate({right: "+=20"}, 100, function() {
               					$(this).animate({right: "-=10"}, 100);
               				});
               			
               		});
               	});
               });
               }
               
            
   	    var htmlfill = '<br>';

   		// form error display block		 
   		 
   			if (filler == ''){
   			
	   		$('#nameerror').addClass("error");
	   		$('#nameerror').html('you must enter name');
	   		$('#nameerror').animate({opacity: "0"}, 6000, fade_error);
	   		//setTimeout(fade_error, 3000);

			
	   		
	   		//a.preventDefault();
         }
         if ($.trim(filler) == null){
         	$('#nameerror').addClass("error");
	   		$('#nameerror').html('you must enter name');
	   		$('#nameerror').animate({opacity: "0"}, 6000, fade_error);
         }
	   	if (gender == null){
	   		$('#gendererror').addClass("error");
	   		$('#gendererror').html('you must select gender');
	   		
	   		$('#gendererror').animate({opacity: "0"}, 6000, fade_error);
	   		
	   		//setTimeout(fade_error, 3000);
    		a.preventDefault();
	   	}
	   	if (when == ''){
	   		$('#dateerror').addClass("error");
	   		$('#dateerror').html('you must enter date');
	   		//setTimeout(fade_error, 3000);
	   		$('#dateerror').animate({opacity: "0"}, 6000, fade_error);
	   		a.preventDefault();
	   	}
	   	
	   		return false;
	   	}
   		function fade_error() {
		  $("#nameerror").html(htmlfill);
		  $("#nameerror").removeClass("error");
		  $("#nameerror").css("opacity", "1");
		  $("#gendererror").html(htmlfill);
		  $("#gendererror").removeClass("error");
		  $("#gendererror").css("opacity", "1");
		  $("#dateerror").removeClass("error");
		  $("#dateerror").html(htmlfill);
		  $("#dateerror").css("opacity", "1");
}
   		
   		

   		/*$("#jokhang").mouseenter(function() {
		 	
		  $("#jokhang").fadeOut(1000).fadeIn(500);

  		 }
  	); */


   		//var gender = $('input[name=gender]:checked', '#userinfo').val();
   		
   		var gen = '';
   		if (gender == 'male'){
   			gen = 'he';
   		}
   		else if (gender == 'female'){ 
   			gen = 'she';
   		}
   		else gen = filler;
   		var days = $('input[type=range]').val();

   		//$('input[name=radioName]:checked', '#myForm').val()
   		//alert(filler);
   		$("h1").css({width:"60%", background: "green", color: "orange"});
   		$("h1").html(filler+' wishes '+gen+' could go to Tibet for '+days+' days starting ' + when + '!');
   		$("h1").animate(
   				{height: "+=400", fontSize: "+=1.75em", borderRadius: "+=300px", paddingTop: "+=4em"}, 3000, function(){
   					$(this).animate({height: "-=400", fontSize: "-=1.75em", borderRadius: "-=300px", paddingTop: "-=4em"}, 2000, function(){
   						$("h1").css({background: "yellow", color: "brown"});
					}
					);});
   		
   		 
   		 
   		
   		a.preventDefault();

   });

  	/*.hide(1000), 
  	.show(1000)*/
			 //try goodtime tip
   		$('#goodtime').hover(function(){
   			$('#timemessage').css("visibility", "visible");
   		}, function(){
   			$('#timemessage').css("visibility", "hidden");
   		});

   		$('#name').focusin(function(){
   			$('#titlelab').css("visibility", "visible");
   		});
	 

});//end doc ready

 