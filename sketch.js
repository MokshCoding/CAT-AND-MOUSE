var bgImage
var cat
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")

    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")

    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(700,600,30,30)
    cat.addAnimation("sitting",catImg1)
    cat.scale=0.1
    mouse=createSprite(300,600,30,30)
    mouse.addAnimation("standing",mouseImg1)
    mouse.scale=0.1
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("stand",catImg3)
        cat.changeAnimation("stand")
        cat.velocityX=0
        mouse.addAnimation("scared",mouseImg3)
        mouse.changeAnimation("scared")

    }
    drawSprites();
}


function keyPressed(){
if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("tessing",mouseImg2)
    mouse.changeAnimation("tessing")
    mouse.frameDelay=25
}
  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.addAnimation("walking",catImg2)
    cat.changeAnimation("walking")
    cat.velocityX=-2

}
}
