$(document).ready(function(){
		//sets animateable character figure variable
		var figure = '';
		var status = '';
		var ty = '';
		var posy='';
		var posx='';
		var test='';
		//is the game start button clicked
		$('#startfun').click(function(){
		 	 figure = $('#character').val();
			 placeCharacter();
			 placeSetting();
			 $('#selectmessage').html('click restart when ready to try again');
		});
		//restart button functioning
		$('#restart').click(function() {
			$('#character').removeClass('disable');
			$('#anim').removeLayers().drawLayers();
			$('#character').val('default');
			$('body').css("background", "white");
			$('#selectmessage').html('select your character shape');
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
		 	
		 	
			else {
			 		$('body').css(
			 			"background", "white"
			 		);
			 		$('canvas').css({"background-image": "none", "background-size": "800px 400px"});
			}//end if else
		 });//end keydown

});//enddocment ready
 
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
  			});}
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
		 
		right: "150", height: "300px", top: "100"
		},1000
	);//endanimate
	handleemail();
	}



  //end doc ready