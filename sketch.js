
var containmentzone, containmentImg,containmentzoneGroup;
var Patient,patientImg,patientGroup;
var background,backgroundImg;
var firstaid,firstaidImg,firstaidGroup;
var kadha,kadhaImg,kadhaGroup;
var runner,runnerImg;
var PLAY=1;
var END=0;
var health = 100;
var firstaidkitImg;
var kadhaCounterImg;
var firstaidkitcounter = 0;
var kadhaCounter = 0;


var survivalTime;
var vaccine;
var vaccineImg;
function preload(


  )
{
	runnerImg = loadAnimation("runner-1.png","runner-2.png");


	kadhaImg = loadImage("download 2.png");

	firstaidImg = loadImage("download.png");

backgroundImg = loadImage("road2.png");
patientImg = loadImage("infected person.png");
	containmentImg = loadImage("containment zone.png");
	vaccineImg = loadImage("vaccine.png");
}

function setup() {
	
	createCanvas(600, 600);
	containmentzoneGroup = new Group();
	firstaidGroup = new Group();
	kadhaGroup = new Group();
	patientGroup = new Group();
background = createSprite(300,300);

kadhaCounterImg = createSprite(70,70,30,30);
kadhaCounterImg.addImage(kadhaImg);

firstaidkitImg = createSprite(570,70,30,30);
firstaidkitImg.addImage(firstaidImg);

runner = createSprite(200,200,60,60);
runner.addAnimation("runner",runnerImg);
runner.scale = 0.07;


background.addImage(backgroundImg);
background.scale = 0.7;



  
}


function draw() {
if(gameState === PLAY){
containmentZone();
patient();
firstaidkit(); 
Kadha();
//move();

	background.velocityY = 3;
if (background.y > 400){


	background.y = 300;
  }
  
if(keyDown(RIGHT_ARROW)){
	runner.x = runner.x + 10;
  }
  
  if(keyDown(LEFT_ARROW)){
	runner.x = runner.x - 10;
  }
  if(keyDown(UP_ARROW)){
	runner.y = runner.y - 10;
  }
  
  if(keyDown(DOWN_ARROW)){
	runner.y = runner.y + 10;
  }
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivaltime: "+ survivalTime,100,50);
  

if(runner.isTouching(firstaidGroup)){
	
	firstaidkitcounter = firstaidkitcounter + 1;
	text(firstaidkitcounter,100,50);
}
if(runner.isTouching(kadhaGroup)){
   kadhaCounter = kadhaCounter + 1;
   text(kadhaCounter,100,50);


}

if(runner.isTouching(containmentzoneGroup)){
health = health - 50;
}
if(runner.isTouching(patientGroup)){
health = health - 50;
} 
if(keyDown("f")){
firstaidkitcounter = firstaidkitcounter - 1;
health = health + 50;
}

if(keyDown("k")){
	kadhaCounter = kadhaCounter - 1;
	health = health + 25;
}
if(health === 0){
	gameState = END;
}
if(survivalTime = 500){
	kadha.velocityY =0;
	containmentzone.velocityY =0;
	firstaid.velocityY = 0;
	Patient.velocityY = 0;
	runner.velocityY = 0;
	runner.velocityX = 0;
	text("congratulations you have succesfully reached the vaccine",300,300);
	text("press r to restart");
	if(keyDown("r")){
		reset();
	}
	vaccine.createSprite(300,300,100,100);
	vaccine.addImage(vaccineImg);
}

} 

drawSprites();

}
if(gameState === END){

	firstaid.velocityY = 0;
	kadha.velocityY = 0;
	containmentzone.velocityY = 0;
	Patient.velocityY = 0;
	
	text("better luck next time",300,300);
	text("press r to restart");
	background.velocityY = 0;
	if(keyDown("r")){
		reset();
	}
}
function containmentZone (){
	if (frameCount % 500 === 0) {
		containmentzone = createSprite(random(1, 200), 0, 100, 100);
		containmentzone.addImage("conatinment",containmentImg);
		containmentzone.velocityY = 6;


		containmentzone.scale = random(0.1,0.3);
	  lifetime = 700;
	  
	 
	}
}
function patient(){
	if (frameCount % 100 === 0) {
		
		
		Patient = createSprite(random(100, 500), 0, 100, 100);
	
		Patient.addImage("patient",patientImg);
		Patient.velocityY = 6;
		Patient.scale = 0.3;
lifetime = 700;
patientGroup.add(Patient);
	  
	  
	 
	}
}

function firstaidkit(){
	if (frameCount % 700 === 0) {
		firstaid = createSprite(random(100, 500), 0, 100, 100);
		firstaid.addImage("firstaid",firstaidImg);
		firstaid.velocityY = 6;
		firstaid.scale = 0.3;
	  lifetime = 700;
	  firstaidGroup.add(firstaid);
	 
	}
}

function Kadha(){
	if (frameCount % 500 === 0) {
	

		kadha = createSprite(random(100, 500), 0, 100, 100);
		kadha.addImage("kadha",kadhaImg);
		kadha.velocityY = 6;
		lifetime = 700
	  
	  
	 
	}
}

function move() {
	if (
		health == 0) {
	  health = 1;
	  var elem = document.getElementById("myBar");
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 100) {
		  clearInterval(id);
		  i = 0;
		} else {
		  width++;
		  elem.style.width = width + "%";
		}
	  }
	
	}
  }
  function reset(){
	  health = 100;
	  survivalTime = 0;
	  vaccine.destroy();
	  vaccineImg.destroy();
  }
  /*mam i am not able to attach the code with the movements of the health bar that when the health 
  is reduced it should move and when it should increase it  should also move but it is not so what 
  code should we write to move it*/