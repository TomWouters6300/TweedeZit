'use strict';
import context from "../../context/context.js";
import * as Utils from "../../context/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

let x = [];
let y = [];
let n = 50;

document.onmousemove = onMouse;
drawName();
drawBasicHeader();
drawForm(600, 500);
setup();
goWild();






function drawBasicHeader() {
    context.fillStyle = 'grey'
    context.fillRect(0, 0, width, height)
}

function setup() {
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
    context.fillStyle = 'red';
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
        drawForm(x[i], y[i]);
        x[i] += Utils.randomNumber(-2, 2);
        y[i] += Utils.randomNumber(-2, 2);
        context.fillStyle = 'black'
        context.fillRect(0, 0, width, height)
       
    }
    requestAnimationFrame(goWild);
}
