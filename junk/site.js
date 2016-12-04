$(document).ready(function() {

	//fade in and out welcome message, fade in main content of index.html
	fadeinWelcome();
	
	//listener and procedure for making the left column table full page on button click
	//return to normal and return click button
	maketableLarge();
	
	//listener and procedure for center column select box, which presents a paragraph
	// and an image when user selects.  on mouseover/mouseoff, image will toggle size 
	//and toggle the remaining content of center column
	selectaTopic();
	
	//on clicking the nav link to canvas page, an animation is run first, meanwhile 
	//the move to canvas.html is delayed so the animation can first complete
	hrefeffect();
	
	//right column form effects, on click and hover.  click name field, see information window change.
	//mouseout, content restores.  hover over '# of units' form field, see unit transations in 
	//information window
	mainformevents();

	//gives a real-time readout of the range slider value as you drag it.
	rangesliderDisplay();

});//end document ready
	

//****************************** 
//ALL FUNCTION DEFINITIONS ARE BELOW
//******************************

	
	//page load effect for index.html.  fade in and out welcome message, fade in main content
	function fadeinWelcome() {
		var hide = $('#container').html();
		$('#container').hide(function(){
			$('#welcome').fadeIn(1000).fadeOut(1000, function() {
				$('#container').fadeIn(1000);
			});
			
		});}
		 

	//make left column table full size when button is clicked, return to normal when 'return' button clicked
	//change background and hide other content at same time
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


	//function where on clicking the link to canvas page,
	//an animation is run on the page first, and the transfer to canvas.html 
	//is delayed for aesthetic purposes 
	function hrefeffect() {
	$('#linkeffect').click(function(e){ 
		e.preventDefault();                    
   		var canvaslink ="canvas.html";
    	setTimeout(function() {
    		$(location).attr('href', canvaslink);
    	}, 1500);
 		$('section').filter(':odd').slideUp(500, function () {$('section').delay(1000).filter(':even').slideUp(500, function() {
			$('header').slideUp();
			$('#linkeffect').click();
			$('#linkeffect').attr('href', 'canvas.html');
				});
 			});
		});		
	}
	//end function definition for linkfunction()


 	//function for changes on hover over food units field, and for changes on clicking in name field
	function mainformevents() {
			var ordersectionH3 = "information";
		 	$('#count, label[for="count"]').hover(function(){
				$('#rightcol h3').text('1 unit =');
				$('#unitinfo').show();
				$('#notice').hide();
			}, 
			function(){
				$('#rightcol h3').text(ordersectionH3);
				$('#unitinfo').hide();
				$('#notice').show();
			}
		);
	
	 	$('#name').click(function() {
			$('#rightcol h3').text('tell us who you are');
			$('#notice').hide();
		 });
		$('#name').mouseleave(function() {
			$('#rightcol h3').text(ordersectionH3);
			$('#notice').show();
		});
	}
	//end function definition for mainformevents()
 
			



	//listen for center column index.html select box results
	//set image and content values based upon selection
	//instantiate imagedisplay function (defined afterwards)
 	function selectaTopic() {
		$('#tripvibe').change(function(){
			$('#style2ndcolbar').css("background", "orange");
			$('#style2ndcolbar h2').text('HOVER OVER IMAGE');
			var value = $(this).val();
			var div = '#'+value;
			var content = $(div).html();
			var limage='';
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
			 	break;
			}
		if (limage && content){
			$('#display').html(content).show();
			$('#display').append('<img id="tripimage" src='+limage+'>');
		}
		else {
			$('#display').html('').hide();
			$('#display:image').remove();
		}	
		tripimagelistener();
		});
	}
	//end selectatopic function


	//image display control for center column select box results
	//function is called inside of selectaTopic function definition
	function tripimagelistener(){
		var left = $('#tripimage').css("left");
		var height = $('#tripimage').css("height");
		var top = $('#tripimage').css("top");
		var width=$('#tripimage').css('width');
	 	$('#tripimage').hover(function(){
	 		$(this).stop().animate({"width": "140%", "height":"60%","left":"-=6.5em", "top":"-=15em"});
			$('#centercol article').css("visibility", "hidden");
		 	$('#tripimage').css("visibility", "visible")},
				function(){$(this).stop().animate({"width": width, "height": height,"left":left, "top":top}, function(){
					$('#style2ndcolbar h2').text('VACATION TOPICS');
					$('#style2ndcolbar').css("background", "lightgrey");
					$('#centercol article').css("visibility", "visible")}
				);
		});
	}
	//end tripimagelistener function


	//in right column form, display range slider value with realtime changes
	function rangesliderDisplay() {
		$('#range').on("input", function(){
			var rangevalue = $('#range').val();
			$('#rangefill').html(rangevalue);
		});
	}

 
	