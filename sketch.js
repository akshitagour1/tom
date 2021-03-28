
function preload() {
    //load the images here
    gardenImg=loadImage("garden.png");
    catImg1=loadImage("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadImage("cat4.png");
    mouseImg1=loadImage("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadImage("mouse4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
   garden=createSprite(400,400,800,800);
   garden.addImage(gardenImg);
   cat=createSprite(700,650,20,20);
   cat.addImage(catImg1);
   cat.scale=0.1;
   mouse=createSprite(200,650,20,20);
   mouse.addImage(mouseImg1);
   mouse.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.addImage(catImg3);
      cat.velocityX=0;
      mouse.addImage(mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     cat.addAnimation("catImg2",catImg2);
     cat.velocityX=-2;
     mouse.addAnimation("mouseImg2",mouseImg2);
 }

}
