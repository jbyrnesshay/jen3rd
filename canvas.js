$(document).ready(function() {
	//jQuery.noConflict();
	$('#button1').click( function() {
	$('#canvas1').drawRect({
		fillStyle: 'red',
		x: 0, y: 0,
		width: 25,
		height: 25, 
		layer: true,
		name: 'one',
		draggable: true,
		fromCenter: false,
		click: function(layer){
			alert("you clicked the red square");
		}


	}).drawArc({
		strokeStyle: '#909',
		strokeWidth: 5,
		x: 100,
		y: 100,
		radius: 50,
		fillStyle: '#f0f',
		layer: true,
		name: 'two',
		draggable: true
	}).drawArc({
		fillStyle: '#4a0',
		x: 200,
		y: 200,
		radius: 50,
		layer: true,
		name: 'three',
		draggable: true,
		click: function(layer){
			alert('you clicked the green circle');
		}

	}).drawArc({
		fillStyle: '#345677',
		x: 300,
		y: 150,
		radius: 100,
		layer: true,
		name: 'four',
		draggable: true,
		click: function(layer){
			alert('you click over the bluegrey circle');
		}
	});//end drawing
		});//end draw button listener

	 $('#clear1').click(function(){
	 	 /*avoid bug associated with clearCanvas()*/
	 	 $('#canvas1').removeLayers().drawLayers();
	 	 
	 	 

	 });//end clear buttonlistener

   $('#button2').click(function(){
   	   $('#canvas2').drawRect({
   	   	  fillStyle: '#fc9',
   	   	  strokeStyle: '#963',
   	   	  strokeWidth: 5,
   	   	  x:100,
   	   	  y:60,
   	   	  width: 100,
   	   	  height: 60,
   	   	  layer: true,
   	   	  name: 'box',
   	   	  draggable: true
   	   	});
   
  	 $('#canvas2').animateLayer('box', {
   		x: 220,
   		y: 150
   	},  2500, 'bounce');
	});//end button2 click

   $('#button3').click(function(){
   		$('#canvas3').drawText({
   			fillStyle: '#9cf',
   			strokeStyle: '#25a',
   			strokeWidth: 2,
   			x: 200,
   			y: 100,
   			fontSize:  '32px',
   			fontFamily: 'Verdana, sans-serif',
   			text: 'Click to zoom',
   			draggable: true,
   			layer: true,
   			click: function() {
   				$(this).animateLayer(0, {
   					//increase scale by 25%
   					scale: '+=0.25',
   					//rotate by 10%
   					rotate: '+=10'
   				}, 1000, 'swing');
   			}

   			});
   });//endclick button3

   /*$('#image').change(function(){
   	var imager= $('#image').val();

   		});*/

   
	 
   //end creatememe*/
});//end document ready

