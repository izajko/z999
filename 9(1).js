window.onload = function () { 
let drawingCanvas = document.getElementById('picture'); 
if (drawingCanvas && drawingCanvas.getContext) { 
let context = drawingCanvas.getContext('2d'); 
    
//стена
context.strokeStyle = "black"; 
context.fillStyle = "#EE6B9C"; 
context.beginPath(); 
context.fillRect(100, 200, 300, 200); 
context.closePath(); 
context.stroke(); 
context.fill(); 

//окно 
context.strokeStyle = "black"; 
context.fillStyle = "#9B6AD6"; 
context.beginPath(); 
context.fillRect(140, 256, 60, 60); 
context.closePath(); 
context.stroke(); 
context.fill(); 

//крыша 
context.strokeStyle = "black"; 
context.fillStyle = "#801124";
context.beginPath(); 
context.moveTo(100, 200); 
context.lineTo(250, 100); 
context.lineTo(400, 200); 
context.lineTo(100, 200); 
context.closePath(); 
context.stroke(); 
context.fill(); 

//дверь 
context.strokeStyle = "black"; 
context.fillStyle = "black"; 
context.beginPath(); 
context.fillRect(280, 256, 80, 144); 
context.closePath(); 
context.stroke(); 
context.fill(); 
} 

}