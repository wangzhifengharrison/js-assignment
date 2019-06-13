var rectWidth;
   
function setup() {
  createCanvas(windowWidth, windowHeight);

}

//the object position and speed
var b1x = 200;
var b1y = 300;
var b1xspeed = 0.5;
var b1yspeed = 1.0;

var b2x = 400;
var b2y = 1500;
var b2xspeed = 2;
var b2yspeed = 4;

var b3x = 500;
var b3y = 2000;
var b3xspeed = 0.6;
var b3yspeed = 3;

var b4x = 600;
var b4y = 1000;
var b4xspeed = 4;
var b4yspeed = 1;

var b5x = 800;
var b5y = 500;
var b5xspeed = 3;
var b5yspeed = 3;

var b6x = 1000;
var b6y = 1400;
var b6xspeed = 0.3;
var b6yspeed = 0.3;

var b7x = 1200;
var b7y = 400;
var b7xspeed = 0;
var b7yspeed = 0;

var b8x = 250;
var b8y = 0;
var b8xspeed = 1;
var b8yspeed = -2;

var b9x = 2250;
var b9y = 0;
var b9xspeed = -1;
var b9yspeed = 2;

var b10x = 750;
var b10y = 750;
var b10xspeed = 2;
var b10yspeed = 2;

var b11x = 350;
var b11y = 350;
var b11xspeed = 3;
var b11yspeed = -5;

var b12x = 450;
var b12y = 450;
var b12xspeed = -3;
var b12yspeed = 0.5;

var b13x = 1250;
var b13y = 1750;
var b13xspeed = -3;
var b13yspeed = 0.5;

var b14x = 1750;
var b14y = 1050;
var b14xspeed = -3;
var b14yspeed = 5;

var b15x = 1050;
var b15y = 750;
var b15xspeed = -0.5;
var b15yspeed = 2;

var b16x = 950;
var b16y = 350;
var b16xspeed = -3;
var b16yspeed = -7;

// if it is locked, the object will disappear 
var locked1 = false;
var locked2 = false;
var locked3 = false;
var locked4 = false;
var locked5 = false;
var locked6 = false;
var locked7 = false;
var locked8 = false;
var locked9 = false;
var locked10 = false;
var locked11 = false;
var locked12 = false;
var locked13 = false;
var locked14 = false;
var locked15 = false;
var locked16 = false;

var lastr = 40;
var lastg = 40;
var lastb = 40;

//count color
var rcounter1 = 0;
var gcounter1 = 0;
var bcounter1 = 0;

var rcounter2 = 0;
var gcounter2 = 0;
var bcounter2 = 0;

var rcounter3 = 0;
var gcounter3 = 0;
var bcounter3 = 0;

var rcounter4 = 0;
var gcounter4 = 0;
var bcounter4 = 0;

var rcounter5 = 0;
var gcounter5 = 0;
var bcounter5 = 0;

var rcounter6 = 0;
var gcounter6 = 0;
var bcounter6 = 0;

var babycounter = 0;

// plate onitial color
var jiugongge_r_1 =182;
var jiugongge_g_1 =182;
var jiugongge_b_1 =182;

var jiugongge_r_2 =53;
var jiugongge_g_2 =53;
var jiugongge_b_2 =53;

var jiugongge_r_3 =182;
var jiugongge_g_3 =182;
var jiugongge_b_3 =182;

var jiugongge_r_4 =53;
var jiugongge_g_4 =53;
var jiugongge_b_4 =53;

var jiugongge_r_5 =182;
var jiugongge_g_5 =182;
var jiugongge_b_5 =182;

var jiugongge_r_6 =53;
var jiugongge_g_6 =53;
var jiugongge_b_6 =53;

var jiugongge_r_7 =182;
var jiugongge_g_7 =182;
var jiugongge_b_7 =182;

var jiugongge_r_8 =53;
var jiugongge_g_8 =53;
var jiugongge_b_8 =53;

var jiugongge_r_9 =182;
var jiugongge_g_9 =182;
var jiugongge_b_9 =182;

var jiugongge_r_array =[];
var jiugongge_g_array =[];
var jiugongge_b_array =[];


function draw() { 
  // keep draw() here to continue looping while waiting for keys
  background(0);
  mouse();

  textSize(30);
  fill("yellow");
  text("Please fill the color to get your favourite image", 100, 100, 500, 500);
  //first
  b1x = b1x + b1xspeed;
  b1y = b1y - b1yspeed;
  fill("red");
  ellipse(b1x-10, b1y, 30, 20);
  ellipse(b1x+10, b1y, 30, 20);
  rect(b1x-10,b1y,20,70);
  ellipse(b1x-10, b1y+70, 30, 20);
  ellipse(b1x+10, b1y+70, 30, 20);
  rect()

  if(locked1 == true){
    disapear();
  }
  if(mouseX < b1x + 30 && mouseX > b1x -30 && mouseY < b1y + 30 && mouseY > b1y -30){
    locked1 = true;
    ellipse(b1x, b1y, 100, 100);
    rcounter1 = 1;
  }
//second
  b2x = b2x + b2xspeed;
  b2y = b2y - b2yspeed;
  fill("green");
  ellipse(b2x-10, b2y, 30, 20);
  ellipse(b2x+10, b2y, 30, 20);
  rect(b2x-10,b2y,20,70);
  ellipse(b2x-10, b2y+70, 30, 20);
  ellipse(b2x+10, b2y+70, 30, 20);

  if(locked2 == true){
    disapear2();
  }
  if(mouseX < b2x + 30 && mouseX > b2x -30 && mouseY < b2y + 30 && mouseY > b2y -30){
    locked2 = true;
    ellipse(b2x, b2y, 100, 100);
    gcounter1 = 1;
  }

//third
  b3x = b3x + b3xspeed;
  b3y = b3y - b3yspeed;
  fill("blue");
  ellipse(b3x-10, b3y, 30, 20);
  ellipse(b3x+10, b3y, 30, 20);
  rect(b3x-10,b3y,20,70);
  ellipse(b3x-10, b3y+70, 30, 20);
  ellipse(b3x+10, b3y+70, 30, 20);

  if(locked3 == true){
    disapear3();
  }
  if(mouseX < b3x + 30 && mouseX > b3x -30 && mouseY < b3y + 30 && mouseY > b3y -30){
    locked3 = true;
    ellipse(b3x, b3y, 100, 100);
    bcounter1 = 1;
  }

//fourth
  b4x = b4x + b4xspeed;
  b4y = b4y - b4yspeed;
  fill("red");
  ellipse(b4x-10, b4y, 30, 20);
  ellipse(b4x+10, b4y, 30, 20);
  rect(b4x-10,b4y,20,70);
  ellipse(b4x-10, b4y+70, 30, 20);
  ellipse(b4x+10, b4y+70, 30, 20);

  if(locked4 == true){
    disapear4();
  }
  if(mouseX < b4x + 30 && mouseX > b4x -30 && mouseY < b4y + 30 && mouseY > b4y -30){
    locked4 = true;
    ellipse(b4x, b4y, 100, 100);
    rcounter2 = 1;
  }

  //fifth
  b5x = b5x + b5xspeed;
  b5y = b5y - b5yspeed;
  fill("green");
  ellipse(b5x-10, b5y, 30, 20);
  ellipse(b5x+10, b5y, 30, 20);
  rect(b5x-10,b5y,20,70);
  ellipse(b5x-10, b5y+70, 30, 20);
  ellipse(b5x+10, b5y+70, 30, 20);

  if(locked5 == true){
    disapear5();
  }
  if(mouseX < b5x + 30 && mouseX > b5x -30 && mouseY < b5y + 30 && mouseY > b5y -30){
    locked5 = true;
    ellipse(b5x, b5y, 100, 100);
    gcounter2 = 1;
  }

  //sixth
  b6x = b6x + b6xspeed;
  b6y = b6y - b6yspeed;
  fill("blue");
  ellipse(b6x-10, b6y, 30, 20);
  ellipse(b6x+10, b6y, 30, 20);
  rect(b6x-10,b6y,20,70);
  ellipse(b6x-10, b6y+70, 30, 20);
  ellipse(b6x+10, b6y+70, 30, 20);

  if(locked6 == true){
    disapear6();
  }
  if(mouseX < b6x + 30 && mouseX > b6x -30 && mouseY < b6y + 30 && mouseY > b6y -30){
    locked6 = true;
    ellipse(b6x, b6y, 100, 100);
    bcounter2 = 1;
  }

  //senventh
  b7x = b7x + b7xspeed;
  b7y = b7y - b7yspeed;
  fill(200,150,100);
  rect(b7x+40,b7y-10,50,20);
  fill("red");
  ellipse(b7x, b7y, 100, 100);
  fill("white");
  ellipse(b7x-30, b7y, 40, 40);
  

  if(locked7 == true){
    disapear7();
  }
  if(mouseX < b7x + 30 && mouseX > b7x -30 && mouseY < b7y + 30 && mouseY > b7y -30){
    locked7 = true;
    ellipse(b7x, b7y, 100, 100);
    rcounter3 = 2;
  }

  //eight
  b8x = b8x + b8xspeed;
  b8y = b8y - b8yspeed;
  fill(200,150,100);
  rect(b8x+40,b8y-10,50,20);
  fill("green");
  ellipse(b8x, b8y, 100, 100);
  fill("white");
  ellipse(b8x-30, b8y, 40, 40);
  

  if(locked8 == true){
    disapear8();
  }
  if(mouseX < b8x + 30 && mouseX > b8x -30 && mouseY < b8y + 30 && mouseY > b8y -30){
    locked8 = true;
    ellipse(b8x, b8y, 100, 100);
    gcounter3 = 2;
  }

  //nineth
  b9x = b9x + b9xspeed;
  b9y = b9y - b9yspeed;
  fill(200,150,100);
  rect(b9x+40,b9y-10,50,20);
  fill("blue");
  ellipse(b9x, b9y, 100, 100);
  fill("white");
  ellipse(b9x-30, b9y, 40, 40);
  

  if(locked9 == true){
    disapear9();
  }
  if(mouseX < b9x + 30 && mouseX > b9x -30 && mouseY < b9y + 30 && mouseY > b9y -30){
    locked9 = true;
    ellipse(b9x, b9y, 100, 100);
    bcounter3 = 2;
  }

  //tenth
  if(10 <= b10x && b10x<= windowWidth-10 && 10 <= b10y && b10y <= windowHeight-10){
  b10x = b10x + b10xspeed;
  b10y = b10y - b10yspeed;
  }else{
    b10x = random(0,windowWidth);
    b10xspeed = random(-5,5);
    b10y = random(0,windowHeight);
    b10yspeed = random(-5,5);
  }

  //baby
  //ears
  fill(255,224,189);
  ellipse(b10x-50, b10y-4, 20,27 );
  ellipse(b10x+50, b10y-4, 20,27 );
  //cloth
  fill(180,235,235);
  ellipse(b10x, b10y+50, 80, 100);
  //head
  fill(255,224,189);
  ellipse(b10x, b10y, 100, 100);
  stroke("black");
  strokeWeight(1);
  //eyes
  fill("white");
  ellipse(b10x-20, b10y+5, 30, 40);
  ellipse(b10x+20, b10y+5, 30, 40);
  noStroke();
  fill(255,224,189);
  ellipse(b10x-17, b10y+18+5, 24, 10);
  ellipse(b10x-6, b10y+13+5, 8, 15);
  ellipse(b10x+17, b10y+18+5, 24, 10);
  ellipse(b10x+6, b10y+13+5, 8, 15);
  fill("white");
  ellipse(b10x+20, b10y+5, 30, 40);
  ellipse(b10x-20, b10y+5, 30, 40);
  fill("black");
  ellipse(b10x-20, b10y-3+5, 30,33 );
  ellipse(b10x+20, b10y-3+5, 30,33 );
  fill("white");
  ellipse(b10x-20, b10y-8+5, 12, 15);
  ellipse(b10x+20, b10y-8+5, 12, 15);
  //mouse
  fill("red");
  ellipse(b10x,b10y+30,3,3);
  
  

  if(locked10 == true){
    finish10();

  }
  if(mouseX < b10x + 30 && mouseX > b10x -30 && mouseY < b10y + 30 && mouseY > b10y -30){
    // locked10 = true;
    ellipse(b10x, b10y, 100, 100);
    babycounter = 1000;

  }

 //eleventh
  b11x = b11x + b11xspeed;
  b11y = b11y - b11yspeed;
  fill("red");
  ellipse(b11x-10, b11y, 30, 20);
  ellipse(b11x+10, b11y, 30, 20);
  rect(b11x-10,b11y,20,70);
  ellipse(b11x-10, b11y+70, 30, 20);
  ellipse(b11x+10, b11y+70, 30, 20);
  rect()

  if(locked1 == true){
    disapear11();
  }
  if(mouseX < b11x + 30 && mouseX > b11x -30 && mouseY < b11y + 30 && mouseY > b11y -30){
    locked1 = true;
    ellipse(b11x, b11y, 100, 100);
    rcounter4 = 1;
  }

//twelveth
b12x = b12x + b12xspeed;
b12y = b12y - b12yspeed;
fill("green");
ellipse(b12x-10, b12y, 30, 20);
ellipse(b12x+10, b12y, 30, 20);
rect(b12x-10,b12y,20,70);
ellipse(b12x-10, b12y+70, 30, 20);
ellipse(b12x+10, b12y+70, 30, 20);

if(locked12 == true){
  disapear2();
}
if(mouseX < b12x + 30 && mouseX > b12x -30 && mouseY < b12y + 30 && mouseY > b12y -30){
  locked12 = true;
  ellipse(b12x, b12y, 100, 100);
  gcounter4 = 1;
}

//thirteen
b13x = b13x + b13xspeed;
b13y = b13y - b13yspeed;
fill("blue");
ellipse(b13x-10, b13y, 30, 20);
ellipse(b13x+10, b13y, 30, 20);
rect(b13x-10,b13y,20,70);
ellipse(b13x-10, b13y+70, 30, 20);
ellipse(b13x+10, b13y+70, 30, 20);

if(locked13 == true){
  disapear13();
}
if(mouseX < b13x + 30 && mouseX > b13x -30 && mouseY < b13y + 30 && mouseY > b13y -30){
  locked13 = true;
  ellipse(b13x, b13y, 100, 100);
  bcounter4 = 1;
}

//forteenth
b14x = b14x + b14xspeed;
b14y = b14y - b14yspeed;
fill("red");
ellipse(b14x-10, b14y, 30, 20);
ellipse(b14x+10, b14y, 30, 20);
rect(b14x-10,b14y,20,70);
ellipse(b14x-10, b14y+70, 30, 20);
ellipse(b14x+10, b14y+70, 30, 20);

if(locked14 == true){
  disapear14();
}
if(mouseX < b14x + 30 && mouseX > b14x -30 && mouseY < b14y + 30 && mouseY > b14y -30){
  locked14 = true;
  ellipse(b14x, b14y, 100, 100);
  rcounter5 = 1;
}

//fifteenth
b15x = b15x + b15xspeed;
b15y = b15y - b15yspeed;
fill("green");
ellipse(b15x-10, b15y, 30, 20);
ellipse(b15x+10, b15y, 30, 20);
rect(b15x-10,b15y,20,70);
ellipse(b15x-10, b15y+70, 30, 20);
ellipse(b15x+10, b15y+70, 30, 20);

if(locked15 == true){
  disapear15();
}
if(mouseX < b15x + 30 && mouseX > b15x -30 && mouseY < b15y + 30 && mouseY > b15y -30){
  locked15 = true;
  ellipse(b15x, b15y, 100, 100);
  gcounter5 = 1;
}

//sixteenth
b16x = b16x + b16xspeed;
b16y = b16y - b16yspeed;
fill("blue");
ellipse(b16x-10, b16y, 30, 20);
ellipse(b16x+10, b16y, 30, 20);
rect(b16x-10,b16y,20,70);
ellipse(b16x-10, b16y+70, 30, 20);
ellipse(b16x+10, b16y+70, 30, 20);

if(locked16 == true){
  disapear16();
}
if(mouseX < b16x + 30 && mouseX > b16x -30 && mouseY < b16y + 30 && mouseY > b16y -30){
  locked16 = true;
  ellipse(b16x, b16y, 100, 100);
  bcounter5 = 1;
}


last();



if(babycounter >= 900){
    //get jiugongge poped
    background(mouseX/2,mouseX+mouseY/2,mouseY/2);
    text("Your current colour is: ", windowWidth/2-350, windowHeight/2-200, 1000,1000);
    text("R: " + lastred,windowWidth/2-350, windowHeight/2-130, 1000,1000);
    text("G: " + lastgreen,windowWidth/2-350, windowHeight/2-60, 1000,1000);
    text("B: " + lastblue,windowWidth/2-350, windowHeight/2+10, 1000,1000);

    fill(lastred,lastgreen,lastblue);
    rect(200,300,100,100);
  }

}

//first
function disapear(){
  strokeWeight(0);
  noStroke();
  fill("black");
  ellipse(b1x-10, b1y, 30, 20);
  ellipse(b1x+10, b1y, 30, 20);
  rect(b1x-10,b1y,20,70);
  ellipse(b1x-10, b1y+70, 30, 20);
  ellipse(b1x+10, b1y+70, 30, 20);
  rect()
}
//second
function disapear2(){
  strokeWeight(0);
  noStroke();
  fill("black");
  ellipse(b2x-10, b2y, 30, 20);
  ellipse(b2x+10, b2y, 30, 20);
  rect(b2x-10,b2y,20,70);
  ellipse(b2x-10, b2y+70, 30, 20);
  ellipse(b2x+10, b2y+70, 30, 20);
}

//third
function disapear3(){
  strokeWeight(0);
  noStroke();
  fill("black");
  ellipse(b3x-10, b3y, 30, 20);
  ellipse(b3x+10, b3y, 30, 20);
  rect(b3x-10,b3y,20,70);
  ellipse(b3x-10, b3y+70, 30, 20);
  ellipse(b3x+10, b3y+70, 30, 20);
}

//fourth
function disapear4(){
  strokeWeight(0);
  noStroke();
  fill("black");
  ellipse(b4x-10, b4y, 30, 20);
  ellipse(b4x+10, b4y, 30, 20);
  rect(b4x-10,b4y,20,70);
  ellipse(b4x-10, b4y+70, 30, 20);
  ellipse(b4x+10, b4y+70, 30, 20);
}
//fifth
function disapear5(){
  strokeWeight(0);
  noStroke();
  fill("black");
  ellipse(b5x-10, b5y, 30, 20);
  ellipse(b5x+10, b5y, 30, 20);
  rect(b5x-10,b5y,20,70);
  ellipse(b5x-10, b5y+70, 30, 20);
  ellipse(b5x+10, b5y+70, 30, 20);
}
//sixth
function disapear6(){
  strokeWeight(0);
  noStroke();
  fill("black");
  ellipse(b6x-10, b6y, 30, 20);
  ellipse(b6x+10, b6y, 30, 20);
  rect(b6x-10,b6y,20,70);
  ellipse(b6x-10, b6y+70, 30, 20);
  ellipse(b6x+10, b6y+70, 30, 20);
}
//seventh
function disapear7(){
  strokeWeight(0);
  noStroke();
  fill("black");
  rect(b7x+40,b7y-10,50,20);
  ellipse(b7x, b7y, 100, 100);
  ellipse(b7x-30, b7y, 40, 40);
}
//eight
function disapear8(){
  strokeWeight(0);
  noStroke();
  fill("black");
  rect(b8x+40,b8y-10,50,20);
  ellipse(b8x, b8y, 100, 100);
  ellipse(b8x-30, b8y, 40, 40);
}
//nineth
function disapear9(){
  strokeWeight(0);
  noStroke();
  fill("black");
  rect(b9x+40,b9y-10,50,20);
  ellipse(b9x, b9y, 100, 100);
  ellipse(b9x-30, b9y, 40, 40);
}

//tenth
function finish10(){
  strokeWeight(0);
  noStroke();
  fill("black");
  rect(b9x+40,b9y-10,50,20);
  ellipse(b9x, b9y, 100, 100);
  ellipse(b9x-30, b9y, 40, 40);
}

//eleventh
function disapear11(){
  strokeWeight(0);
  fill("black");
  ellipse(b11x-10, b11y, 30, 20);
  ellipse(b11x+10, b11y, 30, 20);
  rect(b11x-10,b11y,20,70);
  ellipse(b11x-10, b11y+70, 30, 20);
  ellipse(b11x+10, b11y+70, 30, 20);
  rect()
}

//twelveth
function disapear12(){
  strokeWeight(0);
  fill("black");
  ellipse(b12x-10, b12y, 30, 20);
  ellipse(b12x+10, b12y, 30, 20);
  rect(b12x-10,b12y,20,70);
  ellipse(b12x-10, b12y+70, 30, 20);
  ellipse(b12x+10, b12y+70, 30, 20);
}

//thirteenth
function disapear13(){
  strokeWeight(0);
  fill("black");
  ellipse(b13x-10, b13y, 30, 20);
  ellipse(b13x+10, b13y, 30, 20);
  rect(b13x-10,b13y,20,70);
  ellipse(b13x-10, b13y+70, 30, 20);
  ellipse(b13x+10, b13y+70, 30, 20);
}

//fourteenth
function disapear14(){
  strokeWeight(0);
  fill("black");
  ellipse(b14x-10, b14y, 30, 20);
  ellipse(b14x+10, b14y, 30, 20);
  rect(b14x-10,b14y,20,70);
  ellipse(b14x-10, b14y+70, 30, 20);
  ellipse(b14x+10, b14y+70, 30, 20);
}
//fifteenth
function disapear15(){
  strokeWeight(0);
  fill("black");
  ellipse(b15x-10, b15y, 30, 20);
  ellipse(b15x+10, b15y, 30, 20);
  rect(b15x-10,b15y,20,70);
  ellipse(b15x-10, b15y+70, 30, 20);
  ellipse(b15x+10, b15y+70, 30, 20);
}
//sixteenth
function disapear16(){
  strokeWeight(0);
  fill("black");
  ellipse(b16x-10, b16y, 30, 20);
  ellipse(b16x+10, b16y, 30, 20);
  rect(b16x-10,b16y,20,70);
  ellipse(b16x-10, b16y+70, 30, 20);
  ellipse(b16x+10, b16y+70, 30, 20);
}

function last(){
  lastred = lastr*rcounter1 + lastr*rcounter2 + lastr*rcounter3+ lastr*rcounter4+lastr*rcounter5;
  lastgreen = lastg*gcounter1 + lastg*gcounter2 + lastg*gcounter3+ lastg*gcounter4+lastg*gcounter5;
  lastblue = lastb*bcounter1+lastb*bcounter2 + lastb*bcounter3+ lastb*bcounter4 +lastb*bcounter6;
  fill(lastred,lastgreen, lastblue);
  rect(200,900,300,100);


  textSize(30);
  fill("red");
  text("R :" + lastred, 140, 700, 500, 500);
  text("G :" + lastgreen, 290, 700, 500, 500);
  text("B :" + lastblue, 440, 700, 500, 500);
  
  textSize(30);
  fill(lastred,lastgreen,lastblue);
  text("Please click the bottom button once every time to choose your color: " , 140, 800, 500, 500);



   //get the color in the bottom
   if(mouseX>200&&mouseX<500&&mouseY>900&&mouseY<1000){
    if(mouseIsPressed){
      jiugongge_r_array.push(lastred);
      jiugongge_g_array.push(lastgreen);
      jiugongge_b_array.push(lastb*bcounter1+lastr*bcounter2);
    }
   
  }

  // first plate in the 9 plates
  if(mouseX>100&&mouseX<200&&mouseY>200&&mouseY<300){
    if(mouseIsPressed){
      jiugongge_r_1 = jiugongge_r_array.shift();
      jiugongge_g_1 = jiugongge_g_array.shift();
      jiugongge_b_1 = jiugongge_b_array.shift();
    }
  }

  // second plate in the 9 plates
  if(mouseX>200&&mouseX<300&&mouseY>200&&mouseY<300){
    if(mouseIsPressed){
      jiugongge_r_2 = jiugongge_r_array.shift();
      jiugongge_g_2 = jiugongge_g_array.shift();
      jiugongge_b_2 = jiugongge_b_array.shift();
    }

  }

  // third plate in the 9 plates
  if(mouseX>300&&mouseX<400&&mouseY>200&&mouseY<300){
    if(mouseIsPressed){
      jiugongge_r_3 = jiugongge_r_array.shift();
      jiugongge_g_3 = jiugongge_g_array.shift();
      jiugongge_b_3 = jiugongge_b_array.shift();
    }

  }

  // fourth plate in the 9 plates
  if(mouseX>100&&mouseX<200&&mouseY>300&&mouseY<400){
    if(mouseIsPressed){
      jiugongge_r_4 = jiugongge_r_array.shift();
      jiugongge_g_4 = jiugongge_g_array.shift();
      jiugongge_b_4 = jiugongge_b_array.shift();
    }

  }

  // fifth plate in the 9 plates
  if(mouseX>200&&mouseX<300&&mouseY>300&&mouseY<400){
    if(mouseIsPressed){
      jiugongge_r_5 = jiugongge_r_array.shift();
      jiugongge_g_5 = jiugongge_g_array.shift();
      jiugongge_b_5 = jiugongge_b_array.shift();
    }

  }

  // sixth plate in the 9 plates
  if(mouseX>300&&mouseX<400&&mouseY>300&&mouseY<400){
    if(mouseIsPressed){
      jiugongge_r_6 = jiugongge_r_array.shift();
      jiugongge_g_6 = jiugongge_g_array.shift();
      jiugongge_b_6 = jiugongge_b_array.shift();
    }

  }

  // seventh plate in the 9 plates
  if(mouseX>100&&mouseX<200&&mouseY>400&&mouseY<500){
    if(mouseIsPressed){
      jiugongge_r_7 = jiugongge_r_array.shift();
      jiugongge_g_7 = jiugongge_g_array.shift();
      jiugongge_b_7 = jiugongge_b_array.shift();
    }

  }

  // eighth plate in the 9 plates
  if(mouseX>200&&mouseX<300&&mouseY>400&&mouseY<500){
    if(mouseIsPressed){
      jiugongge_r_8 = jiugongge_r_array.shift();
      jiugongge_g_8 = jiugongge_g_array.shift();
      jiugongge_b_8 = jiugongge_b_array.shift();
    }

  }

  // nineth plate in the 9 plates
  if(mouseX>300&&mouseX<400&&mouseY>400&&mouseY<500){
    if(mouseIsPressed){
      jiugongge_r_9 = jiugongge_r_array.shift();
      jiugongge_g_9 = jiugongge_g_array.shift();
      jiugongge_b_9 = jiugongge_b_array.shift();
    }
 
    
  }

  // draw first rect
  fill(jiugongge_r_1,jiugongge_g_1,jiugongge_b_1);
  rect(100, 200, 100, 100);
  // draw second rect
  fill(jiugongge_r_2,jiugongge_g_2,jiugongge_b_2);
  rect(200,200,100,100);
  // draw third rect
  fill(jiugongge_r_3,jiugongge_g_3,jiugongge_b_3);
  rect(300,200,100,100);
  // draw fourth rect
  fill(jiugongge_r_4,jiugongge_g_4,jiugongge_b_4);
  rect(100,300,100,100);
  // draw fifth rect
  fill(jiugongge_r_5,jiugongge_g_5,jiugongge_b_5);
  x = 200;
  y = 300;
  a = 100;
  b = 100;
  if(jiugongge_r_5 != 182 && jiugongge_g_5 != 182 && jiugongge_b_5 != 182){
    x = x + 100;
    y = y + 100;
    a = 0;
    b = 0;
  }
  rect(x,y,a,b);
  //draw sixth rect
  fill(jiugongge_r_6,jiugongge_g_6,jiugongge_b_6);
  rect(300,300,100,100);
  //draw seventh rect
  fill(jiugongge_r_7,jiugongge_g_7,jiugongge_b_7);
  rect(100,400,100,100);
  //draw eighth rect
  fill(jiugongge_r_8,jiugongge_g_8,jiugongge_b_8);
  rect(200,400,100,100);
  //draw nineth rect
  fill(jiugongge_r_9,jiugongge_g_9,jiugongge_b_9);
  rect(300,400,100,100);
}

function mouse(){
  stroke("black");
//tails
  noStroke();
  fill("grey");
  ellipse(mouseX+50,mouseY+18,50,50);
  fill("black");
  ellipse(mouseX+55,mouseY+23,55,50);
  fill("grey");
  rect(mouseX-50,mouseY-80,80,110);
  //mouth
  noStroke();
  fill("black");
  ellipse(mouseX-10,mouseY-12,60,20);
  fill("grey");
  ellipse(mouseX-12,mouseY-13,70,18);
  strokeWeight(1);
  stroke("black");
  //eyes
  fill("white");
  ellipse(mouseX-35,mouseY-42,38,38);
  ellipse(mouseX+15,mouseY-42,38,38);
  fill("blue");
  ellipse(mouseX-33,mouseY-42,15,15);
  ellipse(mouseX+13,mouseY-42,15,15);
  //nose
  fill("black");
  ellipse(mouseX-8, mouseY-19,18,10);
  triangle(mouseX-18, mouseY-20, mouseX+2, mouseY-20, mouseX-8, mouseY-10);
  rect(mouseX-9, mouseY-12,1,7);
  //hands
  rect(mouseX-42,mouseY-1,1,12);
  rect(mouseX-50,mouseY+11,8,1);
  rect(mouseX-42,mouseY-1,1,12);
  rect(mouseX-50,mouseY+11,8,1);
  rect(mouseX+22,mouseY-1,1,12);
  rect(mouseX+22,mouseY+11,8,1);
  //foots
  ellipse(mouseX-30,mouseY+35,30,24);
  ellipse(mouseX+8,mouseY+35,30,24);
  //ears
  fill("grey");
  noStroke();
  triangle(mouseX-62,mouseY-83,mouseX-65,mouseY-60,mouseX-35,mouseY-79);
  ellipse(mouseX-63,mouseY-72,4,21);
  triangle(mouseX+42,mouseY-83,mouseX+45,mouseY-60,mouseX,mouseY-79);
  ellipse(mouseX+43,mouseY-72,4,21);
  
}

// plate

function jiugongge(){
  noStroke();
  
  fill(182, 182, 182);
  rect(100, 200, 100, 100);
  fill(53, 53, 53);
  rect(200,200,100,100);
  fill(182, 182, 182);
  rect(300,200,100,100);

  fill(53, 53, 53);
  rect(100,300,100,100);
  fill(182, 182, 182);
  rect(200,300,100,100);
  fill(53, 53, 53);
  rect(300,300,100,100);

  fill(182, 182, 182);
  rect(100,400,100,100);
  fill(53, 53, 53);
  rect(200,400,100,100);
  fill(182, 182, 182);
  rect(300,400,100,100);

}
