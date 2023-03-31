video = "";
function preload(){
    video = createCapture(VIDEO);
    video.hide();
}
function setup(){
    canvas = createCanvas(350,280);
    canvas.position(480,260);
}
function draw(){
    
    image(video,0,0,350,280);    
}
function start(){
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelloaded(){
    console.log("Model Loaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}