$(document).ready(function() {
	//$('#container').show();
	
	fadeinWelcome();
	

	//$('body').fadeIn(3000);
	 
	//$('#container'y", "block");
	
	//$('#welcome').fadeIn(1000, function(){$(this).fadeOut(1600, function(){
	//	$('body').replaceWith(bodycontents);})});

	 /*$('#welcome').fadeIn(1000, function(){
		$('body').replaceWith(bodycontents);});
		$(div:hidden).show();

	 */



		//$('body').fadeIn(1000);
		 
	
	//$('#welcome').animate({width: "500%"});
	//$('#pg1maincontent').fadeIn(3000);
	//listener for table button click and code to enlargen table on click
	maketableLarge();
	//listener and implementation of range slider values display while changing
	rangesliderDisplay();
	
	
	
			 
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

/**
**completed functions
**/
 	function maketableLarge(){
		 //get width of button in table for restoring original width after function and return to homepage view
		var test = $('#tableblock button').css('width');
		$("#viewtable").click(function() {
			$('#position').css("position", "absolute");
			$('body').toggleClass('tableBackground');
			$('#tableblock').toggleClass('fullTable');
		
			if ($('#tableblock').hasClass('fullTable')) {
				$('#tableblock button').animate({width: '+=40%', fontSize:'+=40%'}, 1000, 
						//callback
						function(){$(this).animate({width:'-=40%',fontSize:'-=40%'}, 1000)}
						);
				}
			else {
				$('#tableblock button').finish().animate();
				$('#tableblock button').css("width", test);
			}
			if (!($("#tableblock img").length)) {
				$('#tableblock').append("<img src='images/yak.png'></img>");
				$("#tableblock #viewtable").html('click to return');
			}
			else {
				$('#tableblock img').remove();
				$('#position').css("position", "initial");
				$("#tableblock #viewtable").html('click to view fullpage table');
			}//end if/else
		});//end click
	}//end maketableLarge

	//display range slider value with realtime changes
	function rangesliderDisplay() {
		$('#range').on("input", function(){
			var testit = $('#range').val();
			$('#rangefill').html(testit);
		});
	}

	function fadeinWelcome() {
		$('body').hide();
		var bodycontents = $('body').html();
	 	var welcome = '<div id="welcome">welcome</div>';
		$('body').html(welcome);
		$('body').fadeIn(3000).fadeOut(3000, function() {
		getit();
								//$(this).html(bodycontents);
							});
	//$('#container').show();
	 
	 function getit() {
	 	$('body').html(bodycontents);
	 	 $('body').show();
	 	$('#container').fadeIn(1500);
	 }
	 }