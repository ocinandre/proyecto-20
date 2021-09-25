var bgImg;
var cat;



function preload() {
    //Cargar aqui las imagenes
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("tomOne");
    mouseImg1 = loadImage("jerryOne.png");
    catImg2 = loadImage("tomTwo.png");
    mouseImg2 = loadImage("jerryTwo.png");
    catImg3 = loadImage("tomFour.png")
}

function setup(){
    createCanvas(1000,800);
    



    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado",catImg1);
    cat.scale = 0.2;

    
}

function draw() {

    background(255);
   
    if(cat.x - mouse.x < (cat.width - mouse.width)){
    cat.velocityX=0;
    cat.addAnimation("tomFour", catImg3);
    cat.changeAnimation("tomFour");
    cat.x=300;
    cat,scale = 0.2;
    }
    
    drawSprites();
}

function keyPressed(){
    //escribe aqui el código para la animación del movimiento y cambio
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("ratonMolestando",mouseImg2);
    mouse.changeAnimation("ratonMolestando");
    mouse.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    
}
}