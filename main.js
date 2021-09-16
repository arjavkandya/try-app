noseX=0;
noseY=0;
function preload(){
    mustache=loadImage("9-92091_mustache-with-no-background-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
       poseNet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,80,50);
}
function take_snapshot(){
    save('student_name.png');
}
function modelLoaded(){
    console.log("model is initialized ");
}
function gotPoses(results){
    if(results.length>0){
     console.log(results);
     console.log("x="+noseX);
     noseX=results[0].pose.nose.x-40;
     console.log("y="+noseY);
     noseY=results[0].pose.nose.y;
    }

}