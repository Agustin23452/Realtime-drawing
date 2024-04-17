noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

 function setup() {
    video = creatCapture(VIDEO)
    video.size(550, 500);

    canvas = creatCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose, gotPoses');
 }

  function modelLoaded() 
 {
    console.log('PoseNet se inicio!!');
 }

 function gotPoses(results)
 {
    if(results.leght > 0)
    {
        console.log(results);
    }
 }

