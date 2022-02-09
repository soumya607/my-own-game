var mili;
var mili1,mili2,mili3;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,
maze8,maze9,maze10,maze11,maze12,maze13,maze14,
maze15,maze16,maze17,maze18,maze19,maze20,maze21,maze22,invisible ;
var enemy = [];
var trex1,trex2,trex3,trex4,trex5;
var rand;
var gameState = "start";

function preload (){
 
mili1 = loadAnimation("mili1.png", "mili2.png", "mili3.png");
mili2 = loadImage("mili1.png");
trex0 = loadImage("trex1.jpg");
//trex10 = loadImage("trex1.png");

}

function setup() {
  createCanvas(1520,700);
  //line
  maze1 = new Maze(30 ,350, 10, 630);
  maze2 = new Maze(760, 670, 1470, 10);
  maze3 = new Maze(1490, 350, 10, 630);
  maze4 = new Maze(760, 30, 1470, 10);
  
  // new lines added right
  maze40 = new Maze(1170 ,150, 270, 20);
  maze41 = new Maze(1160 ,90, 20, 125);
  maze42 = new Maze(1170 ,550, 250, 20);
  maze43 = new Maze(1160 ,610, 20, 125);
  maze44 = new Maze(1405, 350, 20, 220);
  maze45 = new Maze(1450 ,350, 80, 20);

  // fat box right
  maze46 = new Maze(1480 ,510, 25, 130);
  maze47 = new Maze(1470 ,190, 40, 150);
  maze48 = new Maze(1290 ,650, 150, 40);
  maze49 = new Maze(1290 ,45, 150, 20);

  // new lines added left 
  maze50 = new Maze(350 ,150, 270, 20);
  maze51 = new Maze(360 ,90, 20, 125);
  maze52 = new Maze(365 ,550, 200, 20);
  maze53 = new Maze(360 ,610, 20, 125);
  maze54 = new Maze(105, 350, 20, 220);
  maze55 = new Maze(70 ,350, 80, 20);

  // fat box left
  maze56 = new Maze(45 ,510, 25, 120);
  maze57 = new Maze(50 ,190, 30, 150);
  maze58 = new Maze(230 ,650, 150, 30);
  //maze59 = new Maze(230 ,50, 150, 30);
  
  // line btw the "U" || "M" |||"Y"
  maze60 = new Maze(530 ,350, 20, 320);
  maze61 = new Maze(1000 ,350, 20, 280);
 
  // fat box btw the 'U' || "M"
  maze62 = new Maze(490 ,650, 150, 30);
  maze63 = new Maze(490 ,50, 150, 30);
  maze64 = new Maze(1020 ,45, 150, 20);
  maze65 = new Maze(1020 ,650, 150, 30);
  maze66 = new Maze(770 ,550, 350, 30);
  maze67 = new Maze(770 ,610, 30, 130);
  maze68 = new Maze(770 ,150, 350, 30);
  maze69 = new Maze(770 ,90, 30, 130);


  //box
  maze5 = new Maze(140, 140, 50, 50);
  maze6 = new Maze(140, 550, 50, 50);
  maze7 = new Maze(1380, 140, 50, 50);
  maze8 = new Maze(1380, 550, 50, 45);
  
    

  //letter 'S'
  maze9 = new Maze(250, 250, 100, 20);
  maze10 = new Maze(200, 290, 20, 100);
  maze11 = new Maze(240, 350, 100, 20);
  maze12 = new Maze(300, 395, 20, 110);
  maze13 = new Maze(250, 455, 120, 20);

  //letter 'O'
  maze14 = new Maze(360, 390, 20, 150);
  maze15 = new Maze(400, 250, 100, 20);
  maze16 = new Maze(410, 455, 90, 20);
  maze17 = new Maze(450, 310, 20, 140);

  //letter 'U'
  maze18 = new Maze(600, 340, 20, 210);
  maze19 = new Maze(650, 450, 120, 20);
  maze20 = new Maze(700, 300, 20, 130);
  
  // new added in 'U'
  maze36 = new Maze(630, 245, 40, 20);

  //letter 'M'
  maze21 = new Maze(765, 350, 20, 220);
  maze22 = new Maze(930, 350, 20, 220);
  maze23 = new Maze(790, 255, 30, 30);
  maze24 = new Maze(820, 285, 30, 30);
  maze25 = new Maze(850, 315, 30, 30);
  maze26 = new Maze(880, 285, 30, 30);
  maze27 = new Maze(910, 255, 30, 30);

  //new added in 'M'
  maze37 = new Maze(850, 430, 40, 60);

  //letter 'Y'
  maze28 = new Maze(1050, 280, 20, 70);
  maze29 = new Maze(1160, 280, 20, 70);
  maze30 = new Maze(1105, 320, 130, 20);
  maze31 = new Maze(1105, 395, 20, 140);

  //new added in 'Y'
  maze38 = new Maze(1170, 420, 20, 30);

  //letter 'A'
  maze32 = new Maze(1230, 350, 20, 220);
  maze33 = new Maze(1340, 350, 20, 220);
  maze34 = new Maze(1285, 280, 15, 30);
  maze35 = new Maze(1290, 370, 100, 20);

  //mili
  mili = createSprite( 100, 630, 20 ,20 )
  mili.addAnimation("miliwalk",mili1)
  mili.addImage("milistanding",mili2);
  mili.scale = 0.25;
  mili.debug = true;
  mili.setCollider("circle",0,0,35)

  trex1 = createSprite(90,80,20,20)
  trex1.addImage("trexstanding",trex0);
  trex1.scale = 0.45;

  trex2 = createSprite(1060,370,20,20)
  trex2.addImage("trexstanding",trex0);
  trex2.scale = 0.45;

  trex3 = createSprite(720,600,20,20)
  trex3.addImage("trexstanding",trex0);
  trex3.scale = 0.45;

  trex4 = createSprite(720,80,20,20)
  trex4.addImage("trexstanding",trex0);
  trex4.scale = 0.45;

  trex5 = createSprite(1440,630,20,20)
  trex5.addImage("trexstanding",trex0);
  trex5.scale = 0.45;

  invisible = createSprite(1430,70,50,50)
  invisible.visible= false
}



function draw() {
  background(0,0,0); 
  fill(0,0,255) 
 
  if(gameState === "start"){

    textSize (21);
    stroke(255,0,0);
    strokeWeight(2);
    text( "TO START THE GAME PRESS SPACE BAR" , 68 ,190)
    
  }
    textSize (21);
    stroke(0,255,0);
    strokeWeight(2);
    text("FINISH",1400,70);

    
    if(keyDown (32)&& gameState==="start"){
      gameState = "play";
      trex1.velocityX = -2
      trex2.velocityY = 2
      trex4.velocityX = -2
      trex5.velocityY = -2
      trex3.velocityX = -2
 

     }

     

     

  if(gameState === "play"){
   // enemies();
   
   if (mili.isTouching(invisible)){
     text("Kudos ! YOU WON" ,700,210)

     
   }
 

 if(keyIsDown (UP_ARROW) && gameState === "play"){
   mili.y = mili.y - 2;
   mili.changeAnimation("miliwalk",mili1)
   }

 if(keyIsDown (DOWN_ARROW) && gameState === "play"){
   mili.y = mili.y + 2;
   mili.changeAnimation("miliwalk",mili1)
   }

 if(keyIsDown (LEFT_ARROW) && gameState === "play"){
   mili.x = mili.x - 2;
   mili.changeAnimation("miliwalk",mili1)
   }
 
  if(keyIsDown (RIGHT_ARROW) && gameState === "play"){
    mili.x = mili.x + 2;
    mili.changeAnimation("miliwalk",mili1)
    }

    if (
      mili.isTouching(trex1) ||
      mili.isTouching(trex2) ||
      mili.isTouching(trex3) ||
      mili.isTouching(trex4) ||
      mili.isTouching(trex5) ||
      mili.isTouching(maze1.body) ||
      mili.isTouching(maze2.body) ||
      mili.isTouching(maze3.body) ||
      mili.isTouching(maze4.body) ||
      mili.isTouching(maze5.body) ||
      mili.isTouching(maze5.body) ||
      mili.isTouching(maze6.body) ||
      mili.isTouching(maze7.body) ||
      mili.isTouching(maze8.body) ||
      mili.isTouching(maze9.body) ||
      mili.isTouching(maze10.body) ||
      mili.isTouching(maze11.body) ||
      mili.isTouching(maze12.body) ||
      mili.isTouching(maze13.body) ||
      mili.isTouching(maze14.body) ||
      mili.isTouching(maze15.body) ||
      mili.isTouching(maze16.body) ||
      mili.isTouching(maze17.body) ||
      mili.isTouching(maze18.body) ||
      mili.isTouching(maze19.body) ||
      mili.isTouching(maze20.body) ||
      mili.isTouching(maze21.body) ||
      mili.isTouching(maze22.body) ||
      mili.isTouching(maze23.body) ||
      mili.isTouching(maze24.body) ||
      mili.isTouching(maze25.body) ||
      mili.isTouching(maze26.body) ||
      mili.isTouching(maze27.body) ||
      mili.isTouching(maze28.body) ||
      mili.isTouching(maze29.body) ||
      mili.isTouching(maze30.body) ||
      mili.isTouching(maze31.body) ||
      mili.isTouching(maze32.body) ||
      mili.isTouching(maze33.body) ||
      mili.isTouching(maze34.body) ||
      mili.isTouching(maze35.body) ||
      mili.isTouching(maze36.body) ||
      mili.isTouching(maze37.body) ||
      mili.isTouching(maze38.body) ||
     // mili.isTouching(maze39.body) ||
      mili.isTouching(maze40.body) ||
      mili.isTouching(maze41.body) ||
      mili.isTouching(maze42.body) ||
      mili.isTouching(maze43.body) ||
      mili.isTouching(maze44.body) ||
      mili.isTouching(maze45.body) ||
      mili.isTouching(maze46.body) ||
      mili.isTouching(maze47.body) ||
      mili.isTouching(maze48.body) ||
      mili.isTouching(maze49.body) ||
      mili.isTouching(maze50.body) ||
      mili.isTouching(maze51.body) ||
      mili.isTouching(maze52.body) ||
      mili.isTouching(maze53.body) ||
      mili.isTouching(maze54.body) ||
      mili.isTouching(maze55.body) ||
      mili.isTouching(maze56.body) ||
      mili.isTouching(maze57.body) ||
      mili.isTouching(maze58.body) ||
     // mili.isTouching(maze59.body) ||
      mili.isTouching(maze60.body) ||
      mili.isTouching(maze61.body) ||
      mili.isTouching(maze62.body) ||
      mili.isTouching(maze63.body) ||
      mili.isTouching(maze64.body) ||
      mili.isTouching(maze65.body) ||
      mili.isTouching(maze66.body) ||
      mili.isTouching(maze67.body) ||
      mili.isTouching(maze68.body) ||
      mili.isTouching(maze69.body) 
 
 
   )
     {
      mili.velocityX = 0;
      mili.velocityY = 0;
     
      gameState = "end"
    }

// movement for trex1  
if (trex1.isTouching(maze1.body)) {
  trex1.y += 20;
  trex1.velocityX = 2;
  trex1.velocityY = 0;
}
if (trex1.isTouching(maze51.body)) {
  trex1.velocityX = -2;
  trex1.velocityY = 0;
}
if (trex1.isTouching(maze4.body)) {
  trex1.y += 40;
  trex1.velocityX = 2;
  trex1.velocityY = 0;
}
if (trex1.x >= 200 && trex1.y >= 80) {
  trex1.velocityX = 0;
  trex1.velocityY = 2;
}
if (trex1.x >= 199 && trex1.y >= 223) {
  trex1.x -= 1;
  trex1.velocityX = 0;
  trex1.velocityY = -2;
}

// movement for trex2
if (trex2.y >= 504 && trex2.x >= 1050) {
  trex2.velocityY = 0;
  trex2.velocityX = 2;
}
if (trex2.isTouching(maze46.body)) {
  console.log("hello");
  trex2.y -= 1;
  trex2.velocityX = -2;
  trex2.velocityY = 0;
}
if (trex2.isTouching(maze61.body)) {
  trex2.x += 2;
  trex2.velocityY = -2;
  trex2.velocityX = 0;
}
if (trex2.isTouching(maze30.body)) {
  trex2.x += 30;
  trex2.velocityY = 2;
  trex2.velocityX = 0;
}
 
// movement for trex3 
if (trex3.x <= 478 && trex3.y >= 599) {
  trex3.velocityY = -2;
  trex3.velocityX = 0;
}
if (trex3.x <= 483 && trex3.y <= 506) {
  trex3.velocityY = 0;
  trex3.velocityX = -2;
}
if (trex3.isTouching(maze56.body)) {
  trex3.velocityY = 0;
  trex3.velocityX = 2;
  trex3.y += 2;
}
if (trex3.isTouching(maze60.body)) {
  trex3.velocityY = 2;
  trex3.velocityX = 0;
}
if (trex3.isTouching(maze62.body)) {
  trex3.velocityY = 0;
  trex3.velocityX = 2;
}
if (trex3.isTouching(maze67.body)) {
  trex3.y -= 2;
  trex3.velocityY = 0;
  trex3.velocityX = -2;
}
 
   // movement for trex4 
 if (trex4.isTouching(maze51.body)) {
   trex4.velocityX = 2;
   trex4.velocityY = 0;
 }
 if (trex4.isTouching(maze69.body)) {
   trex4.velocityY = 0;
   trex4.velocityX = -2;
   trex4.y -= 2;
 }
 if (trex4.isTouching(maze60.body)) {
   trex4.velocityY = -2;
   trex4.velocityX = 0;
   trex4.x -= 20;
 }
 if (trex4.x <= 540 && trex4.y === 80) {
   trex4.velocityX = 0;
   trex4.velocityY = 2;
 }
 if (trex4.x <= 520 && trex4.x > 380 && trex4.y <= 80) {
   trex4.velocityX = -2;
   trex4.velocityY = 0;
 }

 

  // movement fpr trex5 
  if(trex5.isTouching(maze5.body)){
    trex5.velocityX = 2;
    trex5.velocityY = 0;

  }
  if (trex5.isTouching(maze45.body)) {
    trex5.velocityY = 2;
    trex5.velocityX = 0;
    //trex5.y -= 2;
  }
  
    if (trex5.x <= 1450 && trex5.y === 350) {
      trex5.velocityX = 0;
      trex5.velocityY = -2;
    }
    //if (trex5.x <= 1290 && trex5.x > 1170 && trex5.y <= 550) {
      //trex5.velocityX = -2;
      //trex5.velocityY = 0;
    //}
  

}
  console.log(gameState)
  if (gameState === "end"){
    trex1.velocityX = 0;
    trex1.velocityY = 0;
    trex2.velocityX = 0;
    trex2.velocityY = 0;
    trex4.velocityX = 0;
    trex4.velocityY = 0;
    text("YOU LOST", 700,210)
  }


  drawSprites();
  //text(mouseX + "," + mouseY,mouseX ,mouseY);
}

 

   






function enemies(){
  /*if(frameCount % 100 === 0){
    enemycreated = frameCount
    for(var i = 0; i<5 ; i++ ){
      enemy.push(createSprite(random((mili.x-50),(mili.x+50)),random((mili.y-50),(mili.y+50)),20,20))
    
    if(enemycreated + 50 === frameCount){
      enemy[i].remove();
      enemy.pop()
    
    }
  }
  }*/
}