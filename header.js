'use strict';
import context from "../../context/context.js";
import * as Utils from "../../context/utils.js";


canvas.height = window.innerHeight;
canvas.height = 500;
let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

//gradient from W3schools

var gradient = context.createRadialGradient(centerX,centerY -200,150 ,centerX,centerY-200,800);
gradient.addColorStop(0.1,"red")
gradient.addColorStop(0.9,"black")

let x = [];
let y = [];
let n = 50;

document.onmousemove = onMouse;
drawName();
drawBasicHeader();
drawForm(600, 500);
goStupid();
goWild();

// code from Kirupa (more in "copied Code.js")

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
    context.fillStyle='red'
    context.arc(mouseX, mouseY, 30, 0, 2 * Math.PI, true);

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
//code inspirerd by seminar 7 ghosts.js

function goStupid() {
    for (let i = 0; i < n; i++) {
        x[i] = Math.floor((Math.random() * width));
        y[i] = Math.floor((Math.random() * height));

    }
}

function goWild() {

    for (let i = 0; i < n; i++) {
        drawForm(x[i], y[i]);
        x[i] += Utils.randomNumber(-5,5);
        y[i] += Utils.randomNumber(-5,5);
    }
    requestAnimationFrame(goWild);
}



function drawForm(x, y) {
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(x, y);
    context.lineWidth = 50;
    context.ellipse(x, y, 30, 30, 0, Math.PI, Math.PI *4);
    context.stroke();
    context.fillStyle = gradient;
    Utils.fillCircle(x, y,20, 5);
    context.fill();
    drawName();
    
}

function drawName() {
    context.fillStyle = "white";
    context.font = "bold 88pt Arial";
    context.fillText("Tom Wouters", centerX - 400, centerY);
}

function onMouse(e) {
    
    for (let i = 5; i < n; i++) {
        drawForm();
        Utils.randomNumber(2, 2);
        Utils.randomNumber(2,2);
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);
      
        
        
    }
    requestAnimationFrame(goWild);
}


