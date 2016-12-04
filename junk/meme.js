
$(document).ready(function() {

		$('#creatememe').click(function(){
		   		 var imgsrc= $('#image').val();
		   		line1text = $('#line1').val().toUpperCase();
		   		line2text = $('#line2').val().toUpperCase();
				switch(imgsrc) {
					case 'duck':
						imgsrc='images/kittenduck.jpg';

						break;
					case 'picard':
						imgsrc='images/picard.jpg';

						break;
					case 'kid':
						imgsrc='images/kid.jpg';

						break;
					default:
						imgsrc='images/sealion.jpg';

						break;
					}//endswitch
 			
			 
					function texter() {
						$('#memecanvas').drawText({
					  		fillStyle: '#fff',
				   			strokeStyle: '#000',
				   			strokeWidth: 2,
				   			x: 200,
				   			y: 150,
				   			fontSize:  '3.5em',
				   			fontFamily: 'Impact, sans-serif',
					  	 	layer:true,
					  	 	text: line1text
			  	 
			  			});
			  			$('#memecanvas').drawText({
					  		fillStyle: '#fff',
				   			strokeStyle: '#000',
				   			strokeWidth: 2,
				   			x: 200,
				   			y: 225,
				   			fontSize:  '3.5em',
				   			fontFamily: 'Impact, sans-serif',
					  	 	layer:true,
					  	 	text: line2text
			  	 
			  			});
			  			
					}//end texter function

					//as part of the image we are loading the text, which is the right wawy to go
					$('#memecanvas').drawImage({
			  		source: imgsrc,
			  		/*sourc= imgsrec,*/
			  		height: 300,
			  		width: 400,
			  		x: 200,
			  		y: 150,
			  		layer:true,
			  		load: texter
		  		 
			  	});//enddraw image
				//endfunctdion2
				 

					
		});//end click
		
});