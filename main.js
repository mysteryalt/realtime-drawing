NoseX = 0;
NoseY = 0;
RightWristX=0;
RightWristY=0;
LeftWristX=0;
LeftWristY=0;
difference = 0;


function setup() {
 video =  createCapture(VIDEO);
 video.size(550,500);

 canvas = createCanvas(700,500);
 canvas.position(600 ,100 );

 poseNet = ml5.poseNet(video , modelLoaded );
 
 poseNet.on("pose" , gotPoses);


}

function draw() {
background("grey");
document.getElementById("sqare_side").innerHTML = "Width and height of the square will be = " + difference + "px"
fill('green')
stroke('black')
square(NoseX , NoseY , difference)



}

function preload() {
    
    
}


function modelLoaded() {
console.log("Model has been loaded.")
}

function gotPoses(results) {

if (results.length > 0) {
    console.log(results);


NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;

    RightWristX = results[0].pose.rightWrist.x;
    RightWristY = results[0].pose.rightWrist.y;
    LeftWristX = results[0].pose.leftWrist.x;
    LeftWristY = results[0].pose.leftWrist.y;
    console.log("Right wrist x and y= " + RightWristX + RightWristY + 
    " Left wrist x and y = " + LeftWristX + LeftWristY )

    difference = Math.floor(LeftWristX - RightWristX);
}
}
