var database;
var ball, pos;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPos = database.ref('ball/position');
    ballPos.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

 function readPosition(data){

    pos = data.val();
    console.log(pos);

    ball.x = pos.x;
    ball.y = pos.y;

 }

function writePosition(x,y){

    database.ref('ball/position').set({
        x : pos.x + x,
        y : pos.y + y
        
    })
}

function showError(){
    console.log("Error in Database - Read values");
}
