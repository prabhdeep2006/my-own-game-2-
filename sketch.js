var mario,mario_image; 
var monster,monster_image; 
var ob,ob_image,obGroup;
var princess,princess_img; 
var bg,bg_image,bg2,bg2_img,bg4,bg4_img,bg3,bg3_img; 
var bubble,bubble_image
var chat,chat_image; 
var h1,h2,h3,h1_img,h2_img,h3_img; 
var pipe, pipe_image; 
var ground; 
var start; 
var wall, wall_image; 
var coin, coin_image; 
var next; 
var plant,plant_image; 
var level, level_image; 
var gm5, gm5_image; 
var advance; 

var count = 0; 
var flag = 0; 
var score =0; 

var gameState= 0 ; 

function preload(){
mario_image = loadAnimation("images/mario 2.png","images/mario.png"); 
bg_image = loadImage("images/bg.png"); 
monster_image = loadImage("images/wario the monster.png"); 
princess_img = loadImage("images/peach crying.png");
bubble_image = loadImage("images/bubble.png"); 
chat_image = loadImage("images/text.png"); 
ob_image = loadImage("images/mushroom is evil.png"); 
h1_img = loadImage("images/heart.png"); 
h2_img = loadImage("images/heart.png"); 
h3_img = loadImage("images/heart.png"); 
pipe_image = loadImage("images/pipe.png"); 
bg2_img = loadImage("images/bg2.png")
gm5_image = loadImage("images/gm5.png"); 
bg3_img = loadImage("images/bg 3.png"); 
bg4_img = loadImage("images/bg 4.png"); 
plant_image = loadImage("images/evil.png"); 
level_image = loadImage("images/level 1.png"); 
wall_image = loadImage("images/wall.png"); 
coin_image = loadImage("images/=coin.png"); 
}

function setup(){
createCanvas(displayWidth,700); 
 

bg = createSprite(displayWidth/2,300,displayWidth,800); 
bg.addImage(bg_image); 
bg.scale = 3.2; 
bg2 = createSprite(displayWidth/2,250,displayWidth,700); 
bg2.addImage(bg2_img); 
bg4 = createSprite(displayWidth/2,300,displayWidth,800); 
bg4.addImage(bg4_img); 
bg3 = createSprite(displayWidth/2,350,displayWidth,displayHeight); 
bg3.addImage(bg3_img); 


h1 = createSprite(100,50); 
h2 = createSprite(200,50); 
h3 = createSprite(300,50);

        h1.addImage(h1_img); 
        h2.addImage(h2_img);
        h3.addImage(h3_img); 
        h1.scale = 0.1; 
        h2.scale = 0.1; 
        h3.scale = 0.1;  
 

mario = createSprite(50,630); 
mario.addAnimation("mario running",mario_image); 
mario.scale = 0.2; 

ground = createSprite(displayWidth/2,650,displayWidth+100,10);
ground.visible = false; 

monster = createSprite(350,550); 
princess = createSprite(700,510); 
bubble = createSprite(400,200); 
chat = createSprite(950,250); 
level = createSprite(950,250); 
level.addImage(level_image); 
gm5 = createSprite(400,200); 
gm5.addImage(gm5_image); 



 start= createButton("Start"); 
 next = createButton("Press to move on to next level");
 advance = createButton("Press to move on"); 
 

 
 obGroup = new Group(); 
 obGroup2 = new Group(); 
 coinGroup = new Group(); 
 pipeGroup = new Group(); 
 
 
 


}



function draw(){
    
    background(0); 
    mario.collide(ground); 
    //monster.collide(ground); 
    //princess.collide(ground); 
    
    bg.velocityX = -5; 
    if(bg.x<100){
        bg.x = displayWidth/2; 
    }
    if(bg3.x<100){
        bg3.x = displayWidth/2; 
    }
    bg3.scale = 2;
    bg3.velocityX = -5; 
    if(gameState===0){
        bg.velocityX = 0; 
        mario.visible=false; 
        level.visible = false; 
        monster.addImage(monster_image); 
        princess.addImage(princess_img); 
        h1.visible = false; 
        h2.visible = false; 
        h3.visible = false; 
        bg2.visible = false; 
        bg3.visible = false; 
        bg4.visible = false; 
        //next.hide(); 
        
        
       
        princess.scale=0.15; 
        monster.scale = 0.15; 
        bubble.scale = 0.8; 
        bubble.addImage(bubble_image); 
        chat.addImage(chat_image); 
        start.position(displayWidth-200,displayHeight/2);         
        start.mousePressed(()=>{
        gameState = 1; 
        }); 


    }
    if(gameState===1){
        monster.visible=false; 
        level.visible = false; 
        gm5.visible = false; 
        princess.visible = false; 
        bubble.visible = false; 
        chat.visible = false; 
        bg3.visibe = false; 
        start.hide();  
        //next.hide(); 
        mario.visible = true;
        score = score+Math.round(frameRate()/30); 
        if(count===0){
            h1.visible = true; 
            h2.visible = true; 
            h3.visible = true; 
        }
        if(count===10){
            h1.visible = false;
        }
        if(count===20){
            h1.visible = false; 
            h2.visible = false; 
        }
        if(count===30){
            h1.visible = false; 
            h2.visible = false; 
            h3.visible = false; 
            
        }
        
        bg.velocityX = -5; 
        obstacles(); 
        pipes(); 
        if(keyDown("space")&& mario.y>590){
            mario.velocityY = -12; 
            

        }
        mario.velocityY = mario.velocityY+0.5; 
        //console.log(mario.y);
        flag = 0; 
    if(obGroup.isTouching(mario)&& flag===0){
        flag = 1; 
        
        console.log(count);  
        
        
        
    }
    if(flag===1){
        flag = 0; 
        count = count+1; 
       
    }

if(score===100){
    gameState = 3; 
}
    }
    if(gameState===3){
        bg.visible = true; 
        gm5.visible = false; 
        level.visible = true; 
        bubble.visible = false; 
        chat.visible = false; 
        bg2.visible = false; 
        bg3.visible = false; 
        bg4.visible = false; 
        h1.visible = false; 
        h2.visible = false; 
        h3.visible = false;
        bg.velocityX = 0; 
        mario.visible = false; 
        obGroup.setVisibleEach(false); 
        
        next.position(displayWidth-400,200); 
        next.mousePressed(()=>{
            gameState = 4; 
            
        });  
       

    }
    if(gameState===4){
        
        
        bg.visible = false;  
        bg2.visible = true; 
        gm5.visible = false;  
        bg3.visible = false; 
        bg4.visible = false; 
        mario.visible = true; 
        ground.y = 680; 
        //mario.y = 665; 
        mario.collide(ground); 
       // console.log(mario.y); 
        if(keyDown("space")&& mario.y>620){
            mario.velocityY = -17; 
        }
        mario.velocityY = mario.velocityY+0.5; 
        if(count===0){
            h1.visible = true; 
            h2.visible = true; 
            h3.visible = true; 
        }
        if(count===10){
            h1.visible = true;
            h2.visible = true; 
            h3.visible = false; 
        }
        if(count===20){
            h1.visible = true; 
            h2.visible = false; 
            h3.visible = false;  
        }
        if(count===30){
            h1.visible = false; 
            h2.visible = false; 
            h3.visible = false; 
            
        }
        if(obGroup2.isTouching(mario)&& flag===0){
            flag = 1; 
        
            
            console.log(count);  
            
            
            
        }
        if(flag===1){
            flag = 0; 
            count = count+1; 
           
        }
        bg2.velocityX = -5;
        if(bg2.x<100){
            bg2.x = displayWidth/2;
        }
        
        
        level.visible = false; 
        next.hide(); 
        
        obGroup.destroyEach(); 
        plants(); 
        calls(); 
        if(coinGroup.isTouching(mario)){
            score = score+15; 
            coinGroup.destroyEach(); 
            obGroup2.destroyEach(); 
            

        }
        if(score===130){
            gameState = 5; 
        }
        
    }
    if(gameState==5){
        bg.visible = true; 
        bg2.visible = false; 
        bg.velocityX=0;  
        bg3.visible = false; 
        mario.visible = false; 
        obGroup2.destroyEach(); 
        coinGroup.destroyEach(); 
        //h1.visible = false; 
        //h2.visible = false; 
        //h3.visible = false; 
        bg4.visible = false;
        gm5.visible = true; 
        advance.position(displayWidth-200,displayHeight/2);         
        advance.mousePressed(()=>{
            count = 0; 
            flag=0; 
            h1.visible = true; 
            h2.visible = true; 
            h3.visible = true; 
        gameState = 6;
    });
}
    if(gameState===6){
        bg.visible = false; 
        bg2.visible = false; 
        bg3.visible = true; 
         
        bg4.visible = false; 
        mario.visible = true; 
        advance.visible = false; 
        
        ground.y = 680; 
       
        pipes(); 
        if(keyDown("space")&& mario.y>620){
            mario.velocityY = -17; 
        }
        mario.velocityY = mario.velocityY+0.5; 
        if(flag===1){
        if(count===0 ){
            h1.visible = true; 
            
            h2.visible = true; 
            h3.visible = true; 
        }
        if(count>10 && count<20){
            h1.visible = true;
            h1.changeImage(coin_image); 
            h2.changeImage(coin_image); 
            h2.chaneImage(coin_image); 
            h2.visible = true; 
            h3.visible = false; 
        }
        if(count>20 && count<30){
            h1.visible = true; 
            h2.visible = false; 
            h3.visible = false;  
        }
        if(count>30 && count<40){
            h1.visible = false; 
            h2.visible = false; 
            h3.visible = false; 
        }
        }
        if(pipeGroup.isTouching(mario) && flag===0){
            flag = 1; 
            
            
            console.log(count);  
            console.log(flag); 
            
            
            
        }
        if(flag===1){
            count = count+1; 
            flag=0; 
           
        }
        }

    
        

    
    
    drawSprites();
    textSize(25); 
    text("Score "+score,displayWidth-200,50); 
}

     
   
    
    

function obstacles(){
    if(frameCount%100===0){
    ob = createSprite(displayWidth+20,670); 
    ob.addImage(ob_image);
    //ob.collide(ground);  
    ob.velocityX = -10;
    ob.scale = 0.3;  
    ob.lifetime = 375;
    obGroup.add(ob);  
    }
}
function pipes(){
    if(frameCount%250===0){
        pipe = createSprite(displayWidth+20,670); 
        pipe.addImage(pipe_image); 
        //pipe.collide(ground); 
        pipe.velocityX = -10; 
        pipe.scale = 0.1; 
        pipe.lifetime = 375; 
        pipeGroup.add(pipe); 
        
    }
}
function plants(){
    if(frameCount%200===0){
    plant = createSprite(displayWidth+200,670); 
    plant.addImage(plant_image); 
    plant.velocityX = -10; 
    plant.scale = 0.1; 
    obGroup2.add(plant); 
    plant.lifetime = 375; 

    }
}
function calls(){
    if(frameCount%350===0){
        wall = createSprite(displayWidth+200,500); 
        coin = createSprite(displayWidth+200,420); 
        wall.addImage(wall_image); 
        coin.addImage(coin_image); 
        wall.scale = 1.2; 
        coin.scale = 0.3; 
        wall.velocityX = -10; 
        coin.velocityX = -10; 
        wall.lifetime = 375;
        coin.lifetime = 375; 
        mario.collide(wall); 
        obGroup2.add(wall);
        coinGroup.add(coin); 
    }
}


    



    
    
    
