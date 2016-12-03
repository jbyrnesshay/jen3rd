$(document).ready(function(){
		//sets animateable character figure variable
		var figure = '';
		var status = '';
		var ty = '';
		var posy='';
		var posx='';
		var test='';
		var speakinstance = 0;
		//is the game start button clicked

		$('#character').change(function() {
				$('#startfun').css({"background": "orange", "fontStyle":"bolder", "fontSize":"1.4em"});
			});
		$('#startfun').click(function(){
			
			 
		 	 figure = $('#character').val();
			 placeCharacter();
			 placeSetting();
			 $('#selectmessage').text('click restart to clear canvas');
			 $('#startfun').css({"background": "antiquewhite", "fontStyle":"normal", "fontSize":"1.2em"});

		});
		//restart button functioning
		$('#restart').click(function() {
			$('#character').removeClass('disable');
			$('#anim').removeLayers().drawLayers();
			$('#character').val('default');
			$('body').css("background", "white");
			$('#selectmessage').text('select your character shape')
			

		});
		 
		 $('#right').hide();
	 
		//keydown listenere to control character motion
		//using body  because document causes problems with firefox
		 $('body').keydown(function(e) {


			//var keypress=event.which;
			var keypress = e.which;
			 
		 
			switch(keypress){
			  	    
				case 38:
				 		if (posy-25 >=25){
				 			test = $('#anim').getLayer(figure);
					 		$('#anim').animateLayer(test, {
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
				$('#anim').stopLayer('myBox');
						$('body').css(
							"background", "white"
						);
					break;
			 }//end switch

			 //inspect and display x and y position
		 	var contents = posx + '&nbsp;&nbsp;&nbsp;' +posy +'&nbsp;&nbsp;&nbsp;' +status;
		 	$('#fill').html(contents);
		 	//instance of email form open function below depends on character position as controlled above
		 	email();

		 	//if character moves inside of change backgroundbox, background color is changed
		 	if (posy <=25 && posx >=500 && posx <=700) {
		 		setTimeout(function() {
				 		$('body').css(
		 		 		"background", "blue" 
		 				);
				 	}, 100);
		 	}
		 	else if (posy ==375 && posx >= 325 && posx <= 375)
		 		$('canvas').css({"background-image": "url('images/weather2.jpg", "background-size": "800px 400px"});
		 	else if (posx == 250) {
		 		characterspeaks();
		 	}
		 	
		 	
			else {
			 		$('body').css(
			 			"background", "white"
			 		);
			 		$('canvas').css({"background-image": "none", "background-size": "800px 400px"});
			}//end if else
		 });//end keydown

 

//functions 


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
  			})
;}
	//end place text on canvas

//display animatable character
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
					draggable: true,
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
					fillStyle: 'color',
					x: 100, y: 100,
					width: 50,
					height: 50, 
					layer: true,
					name: 'square',
					draggable: true,
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
					fillStyle: '#f0f',
					layer: true,
					name: 'pie',
					draggable: true,
					fromCenter: false
				});
				ty = $('#anim').getLayer('pie');
				//make adjustments in perceived x, y location for pieslice due to asymmetry
				posx= ty.x +75;
				posy=ty.y +25;
			break;
			default:
				alert('you did not select');
				break;
		}//end switch figure
	}//end placeCharacter

	//draw non-character graphics on canvas
	
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

function characterspeaks() {
	var myname = $('#yourname').val();
	if (myname == '') {
		myname= "the Unknown runner";
	}
	
	var speak ="I'm "+myname+"!";
	speak = speak.toUpperCase();


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
	x: '-=600',
	 
}, 3000, function() {
	$(this).removeLayerGroup('speech');
}); }




	//target for opening emailto form
	function email () {
		//is x, y position of character at target
		if ((posy <=225 && posy>=175) && (posx >=725 && posx <=775)) {
			 		status = 'inside email';
			 		//$('#right').addClass("enable");
			 		//$('#emailer form').addClass("enable");
			 		showemail();
			 		
		}
	    else {
	    	//$('#emailer').removeClass("enable");
	    	//$('#emailer').removeClass("enable");
	    	$('#right').slideUp();
	    	status = 'not inside email';
		}
		 
	}//end email fucntion
 


function showemail() {
	//$('#right').show();
	//$('#right').slideDown(1500).show();
	 
	
	$('#right').show(600).animate({
		 
		right: "130", height: "450px", top: "160"
		},1000
	);//endanimate
	handleemail();
	}
});
 
function handleemail() {
	 
	//$('#emailsend').click(function() {
		$('#emailsend').click(function(submit){
		if ($('#emailrecipient').val().length == 0) {
			//console.log('you forgot the name field!');
			$('label[for="emailrecipient"]').html('Enter address.').addClass('error');
			submit.preventDefault();
		}
		else if ($('#emailsubject').val().length == 0) {
			//console.log('you forgot the subject field!');
			$('label[for="emailsubject"]').html('Enter subject.').addClass('error');
			submit.preventDefault();  
		}
		//else if ($('#emailmessage').val() == ''){
			
		else if (!($("#emailmessage").val()) ) {
			//console.log('you forgot the message field!');
			//alert('it is so');
			$('label[for="emailmessage"]').html('Enter message.').addClass('error');
			//return false;
			submit.preventDefault();
		}
		 else {
			 var recipient = $('#emailrecipient').val();
			var subject = $('#emailsubject').val();
			var message = $('#emailmessage').val();
			var mailhref="testit";
			var mailhref = "mailto:"+recipient+"?subject="+subject+"&body="+message;
			submit.preventDefault()
			$("#emailer").attr("href", "http://google.com");
			 
			 
			$(location).attr('href', mailhref);
			
			
		 }
			 
		
	}); //end click
		//alert(mailhref);
			
//alert(mailhref); 
			//$('#emailsend').attr("href", mailhref);
	//});
	}

/*

function handleemail() {
	$('#emailsend').click(function() {
			var recipient = $('#emailrecipient').val();
			var subject = $('#emailsubject').val();
			var message = $('#emailmessage').val();
			var mailhref = "mailto:"+recipient+"?subject="+subject+"&body="+message;
			 
			$('#emailsend').attr("href", mailhref);
	});
	 
}
*/

 