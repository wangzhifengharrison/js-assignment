

function setup() {
  // create the canvas (800px wide, 600px high)
  createCanvas(800, 600);

  // make the text nice and big - adjust the size parameter
  // to make *your* name fit nicely on the nametag

  textSize(150);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  strokeWeight(5);
  rect(0, 0, width, height);
  angleMode(DEGREES);

}

var x_robot =0;
var y_robot =0;
var x_robot_xspeed = 0.5;
var y_robot_yspeed = 0.6;

function draw() {
  background(0);
  // your cool nametag code goes in this draw function
  
  x_robot = x_robot+x_robot_xspeed;
  y_robot = y_robot+y_robot_yspeed;
  //hat
  noStroke();
  fill(0, 240, 240);
  ellipse(412+x_robot,200+y_robot,20,20);

  noStroke();
  fill(250, 0, 0);
  ellipse(355-2*x_robot,310+y_robot,20,20);

  noStroke();
  fill(250, 0, 0);
  ellipse(355+x_robot,310+y_robot,20,20);

  if(x_robot>400||x_robot<20){
    x_robot_xspeed=-x_robot_xspeed;
  }

  if(y_robot>200||y_robot<0){
    y_robot_yspeed=-y_robot_yspeed;
  }

  translate(100,-80);

  noStroke();
  fill(0, 240, 240);
  ellipse(412,200,20,20);

  //Head
  noStroke();
  fill(255, 240, 240);
  rect(350,200,125,80);
  
  //left eye
  noStroke();
  fill(0, 240, 240);
  ellipse(380,240,8,8);

  //right eye
  noStroke();
  fill(0, 240, 240);
  ellipse(445,240,8,8);

  //mouth
  noStroke();
  fill(0, 240, 240);
  ellipse(415,260,20,4);
  
  //left Ear
  noStroke();
  fill(0, 240, 240);
  rect(340,220,10,40);

  //right Ear
  noStroke();
  fill(0, 240, 240);
  rect(475,220,10,40);

  //neg
  noStroke();
  fill(0, 240, 240);
  rect(380,280,65,15);

  //whole body
  noStroke();
  fill(100, 200, 220);
  rect(358,295,110,70);

  //left body 1
  noStroke();
  fill(20, 200, 20);
  rect(358,295,55,30);

  // rght body 1
  noStroke();
  fill(200, 200, 20);
  rect(413,295,55,30);

  //right body 2
  noStroke();
  fill(10, 200, 20);
  rect(413,325,55,20);

  //left body 2
  noStroke();
  fill(250, 0, 0);
  rect(358,325,55,20);

  //left hand
  noStroke();
  fill(250, 0, 0);
  ellipse(355,310,20,20);

  //right hand
  noStroke();
  fill(250, 0, 0);
  ellipse(472,310,20,20);

  //phone
  noStroke();
  fill(250, 0, 0);
  rect(480,310,65,105);

  //phnoeset
  noStroke();
  fill(0, 0, 200);
  rect(500,317,23,4);

  //phnoe screen
  noStroke();
  fill(0, 0, 200);
  rect(487,325,51,73);

  //phone keybord
  noStroke();
  fill(0, 0, 200);
  rect(500,403,23,7);

  //left leg
  noStroke();
  fill(250, 0, 0);
  rect(380,365,25,30);

  //rght leg
  noStroke();
  fill(250, 0, 0);
  rect(425,365,25,30);

  //feet
  noStroke();
  fill(20, 125, 125);
  rect(370,395,35,20);

  //right feet
  noStroke();
  fill(250, 250, 125);
  rect(425,395,35,20);

  translate(-100,80);

  //clock design
  translate(100, 100);
  rotate(-90);

  //get the time of the computer
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(5);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 150, 150, 0, secondAngle);

  stroke(150, 100, 255);
  let muniteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 125, 125, 0, muniteAngle);
  
  stroke(150, 255, 100);
  let hourAngle = map(hr%12, 0, 12, 0, 360);
  arc(0, 0, 100, 100, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 40, 0);
  pop();

  push();
  rotate(muniteAngle);
  stroke(150, 100, 255);
  line(0, 0, 30, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 20, 0);
  pop();

  stroke(255);
  point(0, 0);

  // replace my name with your name!
  rotate(90);
  translate(-100, -100);
  textSize(150);
  text("Zhifeng", 100, height-70);

}

// this function is here so that when you hit the spacebar, the current version
// of the nametag sketch will be saved to your downloads folder
function keyTyped() {
  if (key === " ") {
	saveCanvas("nametag.png");
  }
}




