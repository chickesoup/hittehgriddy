function setup(){
    video=createCapture(VIDEO);
    video.size(550,450);
    

    canvas= createCanvas(550,430);
    canvas.position(650,80)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}

function draw(){
    background("#009B77")
}