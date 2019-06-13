var fireworks = [];
var gravity;
var sceneCounter = 1;
var backhomesPeopleA = [];
var backhomesPeopleB = [];
var button = {
  x: 200,
  y: 200,
  col:255,
  display:function(){
    if(sceneCounter == 0){
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 50*sin(frameCount/0.01), 50*sin(frameCount/0.01));
    }else if(sceneCounter == 1){
      noStroke();
      fill("blue");
      ellipse(this.x, this.y, 50, 50);
      }
    else{
      noStroke();
      fill("red");
      ellipse(this.x, this.y, 50, 50);
    }
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function preload() {
    // load any assets (images, sounds etc.) here
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // colorMode(HSB);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    for( var i = 0; i < 2; i++){
      var x = 1000;
      var y = 500;
      backhomesPeopleA.push(new backhomeBoy(x,y));
    }
    for( var i = 0; i < 2; i++){
      var x = 0;
      var y = 500;
      backhomesPeopleB.push(new backhomeGirl(x,y));
    }

}

function draw() {
    colorMode(RGB);
    if(sceneCounter == 0){
      button.display();
      background(0, 0, 0, 25);
      if (random(1) < 0.03) {
        fireworks.push(new Firework());
      }
      for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
          fireworks.splice(i, 1);
      }
    }
  }else if(sceneCounter == 1){

    background(170);
    button.display();
    for(var i = 0; i < backhomesPeopleA.length; i++){
      backhomesPeopleA[i].display();
      backhomesPeopleA[i].move();
    }
    for(var i = 0; i < backhomesPeopleB.length; i++){
      backhomesPeopleB[i].display();
      backhomesPeopleB[i].move();
    }

  }
  
  else{
    background(255);
    button.display();
  }
}

function mousePressed(){
  button.display();
  if(button.x - 30< mouseX && mouseX < button.x + 30 && button.y - 30 < mouseY && mouseY < button.y + 30){
    sceneCounter = sceneCounter + 1;
  }
}
