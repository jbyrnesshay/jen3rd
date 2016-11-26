$(document).ready(function() {

	 
	var figure = '';
	$('#startfun').click(function(){
	 	 
		figure = $('#character').val();
		//alert(figure)
		 stickit();
	 
	});
	$('#restart').click(function() {
		$('#character').removeClass('disable');
		$('#anim').removeLayers().drawLayers();
		$('#character').val('default');
		$('body').css("background", "white");
	})
	function stickit() {
		//alert('in');
		$('#character').addClass('disable');
		switch(figure) {
			case 'circle':
				$('#anim').drawArc({
					strokeStyle: '#909',
					strokeWidth: 5,
					x: 50,
					y: 50,
					radius: 25,
					fillStyle: '#f0f',
					layer: true,
					name: 'circle',
					draggable: true
				});
				var ty = $('#anim').getLayer('circle');
				posx= ty.x;
				posy=ty.y;
			break;
			case 'square':
				$('#anim').drawRect({
					strokeStyle: '#909',
					strokeWidth: 5,
					fillStyle: '#f0f',
					x: 100, y: 100,
					width: 100,
					height: 100, 
					layer: true,
					name: 'square',
					draggable: true,
				});
				var ty = $('#anim').getLayer('square');
				posx= ty.x;
				posy=ty.y;
			break;
			case 'pie':
				$('#anim').drawSlice({
					strokeStyle: '#909',
					strokeWidth: 5,
					x: 50,
					y: 100,
					radius: 50,
					start: 0,
					end: 45,
					fillStyle: '#f0f',
					layer: true,
					name: 'pie',
					draggable: true,
					fromCenter: false
				});
				var ty = $('#anim').getLayer('pie');
				posx= ty.x;
				posy=ty.y;
			break;
			default:

				alert('you did not select');
				break;
		}//end switch figure*/
		//var fun = $('#anim').getLayer(0).name;
		//return fun;
	}//end stickit

	 
 
	$(document).keydown(function(event) {
		 var keypress=event.which;
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
					if (posy + 25 <=275){
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
					)
					
					break;
		 	}

		 	if (posy <=50) {
		 		setTimeout(function() {
				 		$('body').css(
		 		 		"background", "blue" 
		 				);
				 	}, 100);
		 	}
		 	else if (posy >=250) {
		 		setTimeout(function() {
		 			$('body').css(
		 				"background", "red");
		 		}, 100);

		 		}
		 	
		 else if (posy >50 && posy <250) {
		 			$('body').css(
		 			"background", "white"
		 			);
		 		}
		 });
});




 
 
 