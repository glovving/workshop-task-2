let movespeed = 1;
let y = 165;
let endpos = 390;
let tearmovement;
let angelpressed = false; 
let crying = false;
let heartbroken = false;

function setup() {
  createCanvas(400, 400);
  tearmovement = setInterval(movetear, 100);
}

function draw() {
  background(220);
  words();
  if(angelpressed === true){ 
    angel();
    tears();
    if(heartbroken){
      hearts();
      
    }
}}

//coords
function mousePressed() {
  angelpressed = true; 
  setTimeout(() => {
    heartbroken = true; // Trigger the heartbroken symbol after 5 seconds
  }, 5000);
}

function angel() {
  noStroke();
  
  //body
  fill("lightblue");
  triangle(150, 150, 250, 190, 190, 250);
  triangle(250, 190, 255, 300, 100, 300);

  //legs
  line(100, 300, 250, 350);
  line(120, 290, 260, 330);

  //head
  fill("white");
  circle(150, 150, 50);

  //eye
  stroke("lightblue");
  fill("yellow");
  circle(139, 161, 10);
  noStroke();
  fill("lightblue");
  circle(139, 161, 5);
}

function tears() {
  let x = 139;
  
  stroke("red");
  fill("pink");
  circle(x, y, 3);

  if(y > endpos){
    y = 165;
  }
} 

function words(){
  textSize(18);
  fill("black")
  stroke("black")
  text("click to see me cry.", 100, 90)
}

function hearts(){
  textSize(15);
  fill("black");
  text("</3", 200, 200);
  }
  

function movetear(){
  y += movespeed;
}
