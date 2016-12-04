//jquery javascript file for 
//assignment 3, dgmd
//canvas scripts
//joachim byrnes-shay
//all code by joachim byrnes-shay

$(document).ready(function(){
		//sets animateable character figure variable
		var figure = '';
		
		//stores jcanvas layer
		var ty = '';

		//y and x positions of character are stored here,
		//to facilitate character interacting with the canvas environment
		var posy='';
		var posx='';
		
		// is a character shape selected from the canvas page dropdown
		$('#character').change(function() {
			 	//make start button visible
				$('#startfun').css("visibility", "visible");
				//is the game start button clicked
				$('#startfun').click(function(){
					figure = $('#character').val();
			 	
					//when the start button has been clicked
					//the placeCharacter and placeSetting functions (defined below)
					//will populate the canvas
				 	placeCharacter();
				 	placeSetting();

				 	//when start button is clicked the canvas header changes 
				 	//to display a restart (clear) button and to otherwise 
				 	//make the presentation appropriate
			 		$('#selectmessage').text('click restart to clear canvas');
			  		$('#startfun, #yourname, label[for="yourname"]').css("visibility", "hidden");
			 		$('#restart').css("visibility", "visible");

				});
				//restart button functioning
				//when restart button is clicked, more css and display changes in options
				$('#restart').click(function() {
					$('#character').removeClass('disable');
					$('#anim').removeLayers().drawLayers();
					$('#character').val('default');
					$('body').css("background", "white");
					$('#selectmessage').text('select a character shape');
			 		$('#yourname, label[for="yourname"]').css("visibility", "visible");
			  		$('#restart').css("visibility", "hidden");
				});
		});//end of #character select listener
		 
		//keeps a (email form) hidden, away from some jquery quirks that
		//were causing it to flicker on page load.  it is called into view when character
		//is inside email target on canvas
		$('#right').hide();


	 
		//keydown listener, processed to allow and control character motion with 
		//keyboard arrow keys, using the keycodes 37-40 for the 4 directional arrow keys
		//using $('body') because $(document) was causing problems with firefox
		 $('body').keydown(function(e) {
				var keypress = e.which;
				switch(keypress){
				  	case 38:
				 		if (posy-25 >=25){
				 			 
					 		$('#anim').animateLayer(figure, {
					 			y: '-=25'
					 			}, 50);
					 		posy = posy - 25;
					 	}
						break;
					case 40:
						if (posy + 25 <=375){
							$('#anim').animateLayer(figure, {
							y: '+=25'
							}, 50);
							posy = posy +25;
						}
						break;
					case 37:
						if ((posx-25 >= 25)) {
							$('#anim').animateLayer(figure, {
								x: '-=25'
							}, 50);
							posx = posx - 25;
						}
						break;
					case 39: 
						if ((posx+25 <=775)) {
							$('#anim').animateLayer(figure, {
								x: '+=25'
							}, 50);
							posx =  posx + 25;
						}
						break;
					default:
					break;
				}//end switch

		 
		 	//instance of email form open function below depends on character position as controlled above
		 	//is x, y position of character at target
			if ((posy <=225 && posy>=175) && (posx >=725 && posx <=775)) {

				//if character is fully within the EMAIL target on the canvas an email window will open
			 	 showemail();

			}
	    	else {
				$('#right').slideUp();
	     	}

		 	//if character moves inside of 'change background', background color is changed to blue
		 	if (posy <=25 && posx >=500 && posx <=700) {
		 		setTimeout(function() {
				 		$('body').css(
		 		 		"background", "blue" 
		 				);
				 	}, 100);
		 	}
		 	//if character moves inside of 'photo', background image of canvas is set
		 	else if (posy ==375 && posx >= 325 && posx <= 375)
		 		$('canvas').css({"background-image": "url('images/weather2.jpg", "background-size": "800px 400px"});
		 	//if character has moved to x:250, character says "I'm [name]" 
		 	else if (posx == 250) {
		 		characterspeaks();
		 	}
		 	else {
			 	$('body').css("background", "white");
			 	$('canvas').css({"background-image": "none", "background-size": "800px 400px"});
			}//end if else
		 });//end of keydown listener function for character control

 

	//functions 

	 	//draws text on targets in the canvas
	 	function walltext() {
				$('#anim').drawText({
			  		fillStyle: '#fff',
		   			x: 600,
		   			y: 25,
		   			fontSize:  '1.4em',
		   			fontFamily: 'arial, sans-serif',
			  	 	layer:true,
			  	 	text: 'change background'
	  			}).
	  			//chaning here
	  			drawText({
			  		fillStyle: '#fff',
		   			x: 750,
		   			y: 200,
		   			fontSize:  '1.4em',
		   			fontFamily: 'arial, sans-serif',
			  	 	layer:true,
			  	 	text: 'email'
	  			}).
	  			drawText({
			  		fillStyle: '#fff',
		   			x: 350,
		   			y: 375,
		   			fontSize:  '1.4em',
		   			fontFamily: 'arial, sans-serif',
			  	 	layer:true,
			  	 	text: 'photo'
	  			});
	  		}
	  	//end place text on canvas



		//based upon the user selection from the form select box, draw and display animatable character
		function placeCharacter() {
			//disable select box once character is selected
			$('#character').addClass('disable');
			var color = "blue";
			switch(figure) {
				case 'circle':
					$('#anim').drawArc({
						strokeStyle: '#909',
						strokeWidth: 5,
						x: 100,
						y: 100,
						radius: 25,
						fillStyle: color,
						layer: true,
						name: 'circle',
						 
						text: 'what'
					});
					ty = $('#anim').getLayer('circle');
					//keep track of x and y in order to implement movement boundaries in keydown function below
					posx= ty.x;
					posy=ty.y;
				break;
				case 'square':
					$('#anim').drawRect({
						strokeStyle: '#909',
						strokeWidth: 5,
						fillStyle: color,
						x: 100, y: 100,
						width: 50,
						height: 50, 
						layer: true,
						name: 'square',
						 
					});
					ty = $('#anim').getLayer('square');
					posx= ty.x;
					posy=ty.y;
				break;
				case 'pie':
					$('#anim').drawSlice({
						strokeStyle: '#909',
						strokeWidth: 5,
						x: 25,
						y: 50,
						radius: 50,
						start: 0,
						end: 90,
						fillStyle: color,
						layer: true,
						name: 'pie',
						 
						fromCenter: false
					});
					ty = $('#anim').getLayer('pie');
					//make adjustments in perceived x, y location for pieslice due to asymmetry
					posx= ty.x +75;
					posy=ty.y +25;
				break;
				default:
					//alert('you did not select');
					break;
			}//end switch figure
		}//end placeCharacter

	
	
		//draw non-character graphics (targets) on canvas
		function placeSetting() {
			 	$('#anim').drawRect({
					strokeStyle: '#909',
					strokeWidth: 5,
					fillStyle: 'turquoise',
					x:600 , y: 25,
					width: 250,
					height: 50, 
					layer: true,
					name: 'changebgplace'
				}).
				//chaining here
			 	drawRect({
			 		  strokeStyle: '#909',
			 		  strokeWidth: 5,
			 		  fillStyle: 'red',
			 		  x: 750, 
			 		  y: 200,
			 		  width: 100,
			 		  height: 100,
			 		  layer: true,
			 		  name: 'emailto',
			 		  
			 		 }).
			 	drawRect({
			 		 strokeStyle: '#909',
			 		  strokeWidth: 5,
			 		  fillStyle: 'purple',
			 		  x: 350, 
			 		  y: 375,
			 		  width: 100,
			 		  height: 50,
			 		  layer: true,
			 		  name: 'see photo',
			 		});
			 	//add text 
			 	walltext();
		}//end set non-character display on canvas


		//based upon user input in name form field
		//when passing x:250, character will say name
		//or will use a default name
		function characterspeaks() {
			var myname = $('#yourname').val();
			if (myname == '') {
				myname= "the Unknown Runner";
			}
			var speak ="I'm "+myname+"!";
			speak = speak.toUpperCase();

			//bubble to hold character words
			$('#anim').drawEllipse({
				strokeStyle: '#909',
				strokeWidth: 5,
				fillStyle: 'orange',
				x: 450, y: 200,
		   		width: 350, height: 100,
		  		layer:  true,
		  		groups: ['speech'],
		  		name: 'speechcontainer'
			}).drawText({
			  		fillStyle: 'black',
		   			x: 450,
		   			y: 200,
		   			fontSize:  '1.3em',
		   			fontStyle: 'bolder',
		   			fontFamily: 'arial, sans-serif',
			  	 	layer:true,
			  	 	text: speak,
			  	 	groups: ['speech'],
			  	 	name: 'speechwords'
		  			}).delayLayerGroup('speech', 1100).animateLayerGroup('speech',{
						x: '-=600',}, 3000, function() {
						$(this).removeLayerGroup('speech');
			}); }



	 	//show the right column email window and animate it
	 	function showemail() {
			$('#right').show(600).animate({
			 right: "130", height: "450px", top: "160"
			},1000
		);//endanimate
			handleemail();
		}

 
		function handleemail() {
			 	$('#emailsend').click(function(submit){
					if ($('#emailrecipient').val().length == 0) {
				$('label[for="emailrecipient"]').html('Enter address.').addClass('error');
					submit.preventDefault();
				}
				else if ($('#emailsubject').val().length == 0) {
					$('label[for="emailsubject"]').html('Enter subject.').addClass('error');
					submit.preventDefault();  
				}
				else if (!($("#emailmessage").val()) ) {

					$('label[for="emailmessage"]').html('Enter message.').addClass('error');
					//return false;
					submit.preventDefault();
				}
				else {
					var recipient = $('#emailrecipient').val();
					var subject = $('#emailsubject').val();
					var message = $('#emailmessage').val();
					var mailhref = "mailto:"+recipient+"?subject="+subject+"&body="+message;
					submit.preventDefault();
					$(location).attr('href', mailhref);
				}
			});//end emailsend submit  
		 }//end handleemail

 
 });//end document ready