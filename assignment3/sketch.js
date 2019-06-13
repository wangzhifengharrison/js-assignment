let base,
  robot,
  bullets,
  junks,
  hp_bar,
  robot_image,
  hand_image,
  bg_image,
  start_bg,
  particleImage,
  particleImage2,
  particleImage3,
  bullet_sound,
  star_sound,
  basehit_sound,
  start_sound,
  special_sound,
  bgm,
  gameoverbgm,
  startmenu_sound,
  blink_text,
  junk_1_telescope,
  junk_2_rocket,
  junk_3_wheel,
  junk_3_satellite,
  explosions,
  bg_image_2,
  bg_image_3,
  hearts;
let gameStarted = false;
let gameOver = false;
let paused = false;
let exploded = false;
let specialUsed = false;
let muted = false;
let blink = false;
let hiscore = 0;
let score = 0;
let level = 1;
let grav = 2;
let hp = 100;
let font;
// Variable to store text currently being typed
let typing = "";
// Variable to store saved text when return is hit
let saved = "";

function preload() {
  // preloading images to use for junks, sounds, robot, bullet, animations
  font = loadFont("assets/fonts/2p.ttf");
  robot_image = loadImage("assets/images/robot.png");
  heart_image = loadImage("assets/images/heart.png");
  hand_image = loadImage("assets/images/hand.png");
  particleImage = loadImage("assets/images/particle.png");
  particleImage2 = loadImage("assets/images/particle2.png");
  particleImage3 = loadImage("assets/images/particle3.png");
  bg_image = loadImage("assets/images/background_5.jpg");
  bg_image_2 = loadImage("assets/images/background_4.jpg");
  bg_image_3 = loadImage("assets/images/background_3.jpg");

  explosion = loadAnimation(
    "assets/explode/explosion_00.png",
    "assets/explode/explosion_35.png"
  );
  start_bg = loadImage("assets/images/startbackgroundImage.jpg");
  soundFormats("wav", "ogg");
  start_sound = loadSound("assets/sounds/start.wav");
  gameover_sound = loadSound("assets/sounds/gameover.wav");
  bullet_sound = loadSound("assets/sounds/laser.wav");
  starhit_sound = loadSound("assets/sounds/starhit.wav");
  basehit_sound = loadSound("assets/sounds/basehit.wav");
  life_sound = loadSound("assets/sounds/life.wav");
  special_sound = loadSound("assets/sounds/special.wav");
  pause_sound = loadSound("assets/sounds/pause.wav");
  gameoverbgm = loadSound("assets/sounds/gameoverbgm.ogg");
  startmenu_sound = loadSound("assets/sounds/StartMenu.mp3");
  bgm = loadSound("assets/sounds/backgroundsound.wav");
  junk_1_telescope = loadAnimation(
    "assets/junk/junk_1.png",
    "assets/junk/junk_1.png"
  );
  junk_2_rocket = loadAnimation(
    "assets/junk/junk_2.png",
    "assets/junk/junk_2.png"
  );
  junk_3_satellite = loadAnimation(
    "assets/junk/junk_3.png",
    "assets/junk/junk_3.png"
  );
  junk_3_wheel = loadAnimation(
    "assets/junk/junk_4.png",
    "assets/junk/junk_4.png"
  );
}

function setup() {
  textFont(font);
  junks = new Group();
  bullets = new Group();
  explosions = new Group();
  hearts = new Group();
  specials = new Group();
  // create canvas full screen
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //createSprite (x y width height) 
  robot = createSprite(width / 2, height * 0.7, 50, 50);
  robot.addImage(robot_image);
  base = createSprite(width / 2, height * 0.985, width, 20);
  hp_bar = createSprite(width / 2, height * 0.013, width, 20);
  base.shapeColor = color(0);
  hp_bar.shapeColor = color(0, 253, 47);
  robot.shapeColor = color(25, 255, 255);
  masterVolume(1);
  // starts startmenu bgm
  startmenu_sound.loop();
}

function draw() {
  // before game starts, requires a space click or mouse left click"
  if (!gameStarted) {
    clear();
    background(start_bg);
    textAlign(CENTER);
    fill(255, 255, 255);
    textSize(20);
    text(`Welcome to collect junk game.`, width / 2, height / 2.5);
    text(`Protect our areaspace environment from junks.`, width / 2, height / 2.1);
    if (!blink) {
      blink_text = text(`Press "Space" or Click to start.`, width / 2, height / 1.7);
    }
    // press space to start or click left mouse to start
    if (keyWentDown("space") || mouseWentDown(LEFT)) {
      // start sound plays when space or left click
      start_sound.play();
      // stops startmenu bgm
      startmenu_sound.stop();
      // starts regular game bgm
      bgm.loop();
      gameStarted = true;
    }

  }

  // the game start
  if (!gameOver && gameStarted) {
    // if gameover is false/gamestarted is true
    // game renders normally
    while (junks.length <= 25) {
      createJunk();
    }
    clear();
    hp_bar.width = hp * 8;
    background(bg_image);
    // change backgroun image based on level
    if(score>=20 &&score<60){
      background(bg_image_2);
    }else if(score>=60&&score<120){
      background(bg_image);
    } else if(score>=120&&score<300){
      background(bg_image_3);
    }else if(score>=300&&score<420){
      background(bg_image_2);
    }else if(score>=420 &&score<560){
      background(bg_image);
    }else if(score>=560&&score<800){
      background(bg_image_3);
    } else if(score>=800&&score<1000){
      background(bg_image_2);
    }else if(score>=1000&&score<1300){
      background(bg_image);
    }else if(score>=1300&&score<1600){
      background(bg_image_3);
    }else if(score>=1600&&score<1900){
      background(bg_image_2);
    }else if(score>=1900&&score<2200){
      background(bg_image);
    }
   
    textAlign(CENTER);
    fill(255, 255, 255);
    // Game display texts
    textSize(15);
    textStyle("BOLD");
    let title_text = text("Collect junks in the areaspace", width / 2, 45);
    textSize(10);
    let hp_text = text(`PLAYER HP: ${hp}`, width / 2 - 100, 65);
    let score_text = text(`Score: ${score}`, width/2+100, 55);
    let hiscore_text = text(`Hi-Score: ${hiscore}`, width/2+100, 70);
    let level_text = text(`Level: ${level}`, 70, 55);
    let control_text = text(`<- Move Left | Move Right ->|PgUP: Move Up |PgDn: Move Down | Z : Shoot | X : Special | P : Pause | M : Mute Sound`, width / 2, 80);
    let special_text = text(`Special: ${specialUsed ? "No" : "Yes"}`, 70, 70);
    //draw all the sprites added to the sketch so far
    //the positions will be updated automatically at every cycle
    // setspeed is to set the speed and direction of the sprite
    if (robot.position.x < 100 || robot.position.x > width - 100) {
      robot.setSpeed(0, 0);
    }
    if (robot.position.y < 100 || robot.position.y > height - 100) {
      robot.setSpeed(0, 90);
    }
    if (keyDown("up")) {
      if (robot.position.y > 70) {
        robot.setSpeed(25, 270);
      }
    }
    if (keyWentUp("up")) {
      if (robot.position.y > 70) {
        robot.setSpeed(1.5, 270);
      }
    }
    if (keyDown("down")) {
      if (robot.position.y < height - 100) {
        robot.setSpeed(25, 90);
      }
    }
    if (keyWentUp("down")) {
      if (robot.position.y < height - 100) {
        robot.setSpeed(1.5, 90);
      }
    }
    if (keyDown("left")) {
      if (robot.position.x > 50) {
        robot.setSpeed(25, 180);
      }
    }
    if (keyWentUp("left")) {
      if (robot.position.x > 50) {
        robot.setSpeed(1.5, 180);
      }
    }
    //keyDown is similar to keyIsDown() except it accepts both key codes and characters
    if (keyDown("right")) {
      if (robot.position.x < width - 50) {
        robot.setSpeed(25, 0);
      }
    }
    if (keyWentUp("right")) {
      if (robot.position.x < width - 50) {
        robot.setSpeed(1.5, 0);
      }
    }

    // press z will shoot
    if (keyWentDown("z")) {
      let bullet = createSprite(robot.position.x, robot.position.y * 0.985, 8, 18);
      bullet.addImage(hand_image);
      bullet.setSpeed(10, 270);
      bullet.life = 100;
      bullets.add(bullet);
      bullet_sound.setVolume(0.6);
      bullet_sound.play();
    }

    //press q will shoot continuely
    if (keyDown("q")) {
      let bullet = createSprite(robot.position.x, robot.position.y * 0.985, 8, 18);
      bullet.addImage(hand_image);
      bullet.setSpeed(10, 270);
      bullet.life = 100;
      bullets.add(bullet);
      bullet_sound.setVolume(0.6);
      bullet_sound.play();
    }

    // press x will start special skills.
    if (keyWentDown("x")) {
      if (!specialUsed) {
        let special = createSprite(width / 2, robot.position.y, width, 1.5);
        special.addSpeed(9, 270);
        special.life = 100;
        specials.add(special);
        special_sound.play();
        specialUsed = true;
      }
      setTimeout(() => { specialUsed = false; }, 30000);
    }

    // if any junks "ovelap" any bullets, invokes junkHit
    // function which removes junk
    bullets.overlap(junks, junkHit);
    // if any junks "overlap" or "hit" base, invokes baseHit function
    // which minuses 10hp
    junks.overlap(base, baseHit);
    hearts.overlap(robot, heartHit);
    specials.overlap(junks, specialHit);
  } else if (gameOver) {
    clear();
    // when gameover (hp reaches 0) is true below will render
    textSize(25);
    background(bg_image);
    textAlign(CENTER);
    fill(255, 255, 255);
    text(`Your Score:${score}`, width / 2, height / 2 - 70);
    text("GAME OVER", width / 2, height / 2 - 100);
    let indent = 25;
    // Set the font and fill for text
    textFont(font);
    // Display everything
    text(typing, width / 2, height / 2 - 30);
    text(saved, width / 2, height / 2 - 50);
    // press the r to play again
    if (!blink) {
      blink_text = text(`Press "R" to play again.`, width / 2, height / 2 - 180);
    }

    if (!exploded) {
      let g = createSprite(width / 2, height / 2, 50, 50);
      g.addAnimation("explosion", explosion);
      explosions.add(g);
      setTimeout(() => { g.remove(); }, 3000);
      exploded = true;
    }
    // remove all the junks
    junks.forEach(s => { s.remove(); });

  }
  // if gamesover and "r" is clicked, 
  // game is reset hp 100, score 0, 25 more stars
  if (keyWentDown("r") && gameOver) {
    gameoverbgm.stop();
    bgm.loop();
    explosions.forEach(s => { s.remove(); });
    clear();
    hp = 100;
    hp_bar.width = hp * 8;
    hp_bar.shapeColor = color(0, 253, 47);
    score = 0;
    level = 1;
    grav = 2;
    robot.position.x = width / 2;
    gameOver = false;
    exploded = false;
  }

  // draw all the sprites
  drawSprites();
  // Levels 1-15 determined by score
  switch (score) {
    case 20:
      level = 2;
      grav = 2.5;
      setTimeout(createHeart, 300);
      break;
    case 60:
      level = 3;
      grav = 4;
      setTimeout(createHeart, 300);
      break;
    case 120:
      level = 4;
      grav = 5.5;
      setTimeout(createHeart, 300);
      break;
    case 300:
      level = 5;
      grav = 6;
      setTimeout(createHeart, 300);
      break;
    case 420:
      level = 6;
      grav = 6.5;
      setTimeout(createHeart, 300);
      break;
    case 560:
      level = 7;
      grav = 7;
      setTimeout(createHeart, 300);
      break;
    case 800:
      level = 8;
      grav = 7.5;
      setTimeout(createHeart, 300);
      break;
    case 1000:
      level = 9;
      grav = 8;
      setTimeout(createHeart, 300);
      break;
    case 1300:
      level = 10;
      grav = 8.5;
      setTimeout(createHeart, 300);
      break;
    case 1600:
      level = 11;
      grav = 9;
      setTimeout(createHeart, 300);
      break;
    case 1900:
      level = 12;
      grav = 9.5;
      setTimeout(createHeart, 300);
      break;
    case 2200:
      level = 13;
      grav = 10;
      setTimeout(createHeart, 300);
      break;
    case 2800:
      level = 14;
      grav = 10.5;
      setTimeout(createHeart, 300);
      break;
    case 3300:
      level = 15;
      grav = 11;
      setTimeout(createHeart, 300);
      break;
  }
  // if score which starts at 0 is higher than current hiscore, redeclares hiscore
  if (score > hiscore) {
    hiscore = score;
  }

}
// creates junk in y position -5 (-5 is above the canvas, so it prerenders
// and falls into the canvas) between x positions 50 to width-50
// junks fall with speed according to gravity

function createJunk() {
  // create rectangle
  let junk = createSprite(random(50, width - 50), random(-5, -3000), 50, 50);
  let randomAnimation = Math.floor(Math.random() * 4) + 1;
  junk.addSpeed(grav, 90);
  junk.rotationSpeed = 2.5;
  if (randomAnimation == 1) {
    junk.addAnimation("junk_1_telescope", junk_1_telescope);
  } else if (randomAnimation == 2) {
    junk.addAnimation("junk_3_satellite", junk_3_satellite);
  } else if (randomAnimation == 3) {
    junk.addAnimation("junk_2_rocket", junk_2_rocket)
  } else if (randomAnimation == 4) {
    junk.addAnimation("junk_3_wheel", junk_3_wheel);
  }
  junks.add(junk);
}

// creates heart in y position -200,
// junks fall with consistent gravity ( pretty quick )
// will be used in the future as a power up (replenish life)
function createHeart() {
  if (hearts.length < 1) {
    let heart = createSprite(random(50, width - 50), -200, 20, 20);
    heart.addImage(heart_image);
    heart.setSpeed(4, 90);
    heart.life = 300;
    hearts.add(heart);
    score += 1;
  }
}

// function to be invoked when robot and upgrade collides
function heartHit(heart) {
  hp = 100;
  hp_bar.width = hp * 8;
  hp_bar.shapeColor = color(0, 253, 47);
  life_sound.play();
  heart.remove();
}

// if the base platform is hit hp is minused 10
// hp_bar sprite (rectangle with width of 800) loses 80 width (10% of 800)
function baseHit(junk) {
  if (hp > 10) {
    hp -= 10;
    if (hp <= 50 && hp >= 30) {
      hp_bar.shapeColor = color(255, 156, 0);
    } else if (hp <= 30 && hp >= 10) {
      hp_bar.shapeColor = color(247, 10, 10);
    }
  } else {
    hp = 0;
    hp_bar.width = 0;
  }
  basehit_sound.play();
  if (hp < 10) {
    // explosion sound effect
    gameover_sound.play();
    gameOver = true;
    // stops regular bgm
    bgm.stop();
    // start gameover bgm for gameover screen
    gameoverbgm.loop();
  }

  // creates 35 particles on basehit (particleimage1,2,3 red,yellow,white circles)
  for (let i = 0; i < 35; i++) {
    let e = createSprite(junk.position.x, junk.position.y + 20);
    if (i % 3 === 0) {
      e.addImage(particleImage);
    } else if (i % 2 === 0) {
      e.addImage(particleImage2);
    } else {
      e.addImage(particleImage3);
    }
    e.setSpeed(random(2, 5), random(90, 360));
    e.friction = 0.05;
    e.life = 30;
  }
  junk.remove();
}

// function used for "special move" 800px width line goes up screen,
// every junk hit will create particle effects, however the special line does not disappear
// until life runs out
function specialHit(special, junk) {
  junk.remove();
  score += 1;
  starhit_sound.play();
  for (let i = 0; i < 15; i++) {
    let p = createSprite(junk.position.x, junk.position.y);
    if (i % 2 === 0) {
      p.addImage(particleImage);
    } else {
      p.addImage(particleImage2);
    }
    p.setSpeed(random(3, 5), random(0, 360));
    p.life = 18;
    p.friction = 0.1;
  }
}

// function run to remove junk and create particle explosion effect
function junkHit(junk, bullet) {
  junk.remove();
  starhit_sound.play();

  for (let i = 0; i < 15; i++) {
    let p = createSprite(junk.position.x, junk.position.y);
    if (i % 2 === 0) {
      p.addImage(particleImage);
    } else {
      p.addImage(particleImage2);
    }
    p.setSpeed(random(3, 5), random(0, 360));
    p.life = 18;
    p.friction = 0.1;
  }

  score += 1;
  bullet.remove();
}
// used to implement blinking text. every 500ms blink goes from true to false,
// text will render depending on this
setInterval(() => { blink = !blink; }, 500);

function keyPressed(event) {
  // press m will make the sound silient
  if (keyCode === 77) {
    // mutes game
    if (!muted) {
      masterVolume(0);
    } else {
      masterVolume(1);
    }

    muted = !muted;

  } else if (!gameOver && gameStarted) {
    // press p will stop the game or start the game
    if (keyCode === 80) {
      // pause game function
      paused = !paused;
      if (paused && gameStarted) {
        noLoop();
      } else {
        loop();
      }
      // plays a little beep everytime game is paused
      pause_sound.play();
    }
  }
}
