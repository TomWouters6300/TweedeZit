'use strict';
import context from "../../context/context.js";
import * as Utils from "../../context/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

drawBasicHeader();

function drawBasicHeader() {
    context.fillStyle = 'black'
    context.fillRect(centerX-475, centerY-225,800,300)
    context.fillStyle = "red";
    context.font = "bold 55pt Arial";
    context.fillText("Tom Wouters",centerX-300,centerY-50);
}