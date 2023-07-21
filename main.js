video="";
status="";
input="";

function setup(){
    canvas=createCanvas(360,360);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(360,360);
    video.hide();
}

function draw(){
   image(video,0,0,360,360);
}

function start(){
    objectDetector= ml5.objectDetector('cocussd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}