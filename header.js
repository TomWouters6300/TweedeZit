'use strict';
import context from "../../context/context.js";
import * as Utils from "../../context/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

let x = [];
let y = [];
let n = 100;

document.onmousemove = onMouse;
drawName();
drawBasicHeader();
drawForm(600, 500);
setup();
update();




function drawBasicHeader() {
    context.fillStyle = 'black'
    context.fillRect(0, 0, width, height)
}

function setup() {
    for (let i = 0; i < n; i++) {
        x[i] = Math.floor((Math.random() * width));
        y[i] = Math.floor((Math.random() * height));

    }
}

function update() {

    for (let i = 0; i < n; i++) {
        drawForm(x[i], y[i]);
        x[i] += Utils.randomNumber(-2, 2);
        y[i] += Utils.randomNumber(-2, 2);
    }
    requestAnimationFrame(update);
}



function drawForm(x, y, hue) {
    context.fillStyle = 'red';
    context.beginPath();
    context.moveTo(x, y);
    context.ellipse(x, y, 20, 20, 0, Math.PI, Math.PI * 4);
    context.fill();
    context.fillStyle = "black";
    Utils.fillCircle(x - 8, y - 8, 5, 5);
    Utils.fillCircle(x + 8, y + 8, 5, 5);
    drawName();
}

function drawName() {
    context.fillStyle = "white";
    context.font = "bold 88pt Arial";
    context.fillText("Tom Wouters", centerX - 400, centerY);
}

function onMouse() {
    context.fillStyle = 'grey'
    context.fillRect(0, 0, width, height)


    for (let i = 5; i < n; i++) {
        drawForm(x[i], y[i]);
        x[i] += Utils.randomNumber(-5, 0);
        y[i] += Utils.randomNumber(-5, 0);
    }
    requestAnimationFrame(update);
}