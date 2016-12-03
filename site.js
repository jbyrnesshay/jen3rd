$(document).ready(function() {
	//$('#container').show();
	
	
	
		
//var toLoad = $('#linkeffect').attr('href') + "='canvas.html'";
 function goahead() {
		 	//$('#linkeffect').attr('href', 'canvas.html');
		 	//$('#linkeffect')
//		 	$('#linkeffect').attr('href', 'canvas.html').mousedown();
		 }
	
	//listener and implementation of range slidtrigger('click')er values display while changing
	 
	fadeinWelcome();
	 
	var complete = false;
	maketableLarge();
	rangesliderDisplay();
	selectaTopic();
	//linktet();
	linkfunction();
	 
		 

	
	 
	
	
	function linkfunction() {
	$('#linkeffect').click(function(e){ 

		//$('#linkeffect').attr('href', 'canvas.html');
		//alert('a#linkeffect').attr('href').val();

		//from http://stackoverflow.com/questions/11510478/click-delay-before-navigating
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 

    setTimeout(function(){
         window.location = goTo;
    },1500);       
 
		/*setTimeout(function(){
  		alert("Boom!");
		}, 3000).setTimeout( function() {
			$('#linkeffect').attr("href", "canvas.html").mousedown();
		}, 1000);
	 */
			$('section').filter(':odd').slideUp(500, function () {$('section').delay(1000).filter(':even').slideUp(500, function() {
				//alert('ha');
				 
			$('header').slideUp();
			$('#linkeffect').click();
			$('#linkeffect').attr('href', 'canvas.html');
			//alert($('#leftcol').height());
			 
			
			//$('#linkeffect a').click();
		});});
		
		

				 
		 
 	
	});		
}
 
			
		
		 
	
	 


			 
	 

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
 	function selectaTopic() {
		$('#tripvibe').change(function(){
		var value = $(this).val();
		//alert(value);
		var div = '#'+value;
		var content = $(div).html();
		var limage='';

		//waiting();
		//alert(value);
		switch(value) {
			case 'weather':
			  limage = "images/weather2.jpg";
			  alt = "january day in Lhasa"
			break;
			case 'food':
			  limage = "images/momos2.jpg";
			  alt = "plate of momos";
			break;
			case 'people':
			  limage = "images/people2.jpg";
			  alt = "lhasa locals in Bharkor Squqre";
			break;
			case 'sights':
			  limage = "images/sights2.jpg";
			  alt = "lhasa sights";
			break;
			default:
			  limage = '';
			  content = '';
			//default: 
			//break;*/
		}
		 //src='"+limage+"'

		
		 
		if (limage && content){
		$('#display').html(content).show();
		$('#display').append('<img id="tripimage" src='+limage+'>');
		}
		else {
			$('#display').html('').hide();
			$('#display:image').remove();
		}	
		tripimagelistener();
		//alert(limage);
		//$('#lhasa_image').attr("src", "limage")
		//$("#display").append("<img src='limage'/>");


	})};


	function waiting() {
		$("#display").hover(function(){
    $("#display").css("background-color", "Lightyellow");
}, function() {
	$(this).css("background-color", "aqua");
});
	}

function tripimagelistener(){
	/*$('#tripimage').hover(function() {
		$(this).css({"height": "150%", "width": "150%", "position":"relative", "right":"+=10em", "top":"-10em" });
		$('.bgcontainer').css("overflow", "initial");
		}, function(){$('#tripimage').css({"top":"+10em", "height":"100%", "width":"100%", "right":"-10em"});});
*/		var left = $('#tripimage').css("left");
		var height = $('#tripimage').css("height");
		var top = $('#tripimage').css("top");
		$('#tripimage').mouseenter(function(){$(this).stop().animate({"width": "160%", "height":"70%","left":"-=9.5em", "top":"-=15em"});
			$('.bgcontainer').css("overflow", "initial");
			$('#centercol article').css("visibility", "hidden");
		 

			$('#tripimage').css("visibility", "visible")})
		.mouseleave( function(){$(this).stop().animate({"width": "100%", "height": height,"left":left, "top":top}, function(){
			$('.bgcontainer').css("overflow", "hidden");
			$('#centercol article').css("visibility", "visible")})
		});
			
	

	}

	//display range slider value with realtime changes
	function rangesliderDisplay() {
		$('#range').on("input", function(){
			var testit = $('#range').val();
			$('#rangefill').html(testit);
		});
	}

 
	function fadeinWelcome() {
		 
		 var hide = $('#container').html();
		 //$('#pg1maincontent').hide().delay(2000, function(){$('#container').html(hide);});
		$('#container').hide(function(){
			$('#welcome').fadeIn(1000).fadeOut(1000, function() {
				$('#container').fadeIn(1000);
			});
			
		});
		 
		 //$('#container').addClass('welcome').fadeIn(1000);
		 
		 //.fadeIn(2500);
		 



		//$('body').fadeIn(3000);
	}

	function maketableLarge(){
		 
		$("#viewtable").click(function() {
			$('#position').css("position", "absolute");
			$('body').toggleClass('tableBackground');
			$('#tableblock').toggleClass('fullTable');
		
			 
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