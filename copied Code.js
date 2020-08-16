//https://www.kirupa.com/canvas/follow_mouse_cursor.htm (tutorial gevolgd)
//by Kirupa geraadpleegd op 16/08/2020
//in eigen code pas ik kleur en grote aan van de cirkel


var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
 
canvas.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}

update();
function update() {
    
   
    context.beginPath();
    context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
    context.fillStyle = "#FF6A6A";
    context.fill();
   
    requestAnimationFrame(update);
  } 
  function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }   


function drawBasicHeader() {
    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)
}