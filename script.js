let inimigoAltura = 50;
let personagemX = 200;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  inimigoAltura = inimigoAltura +1;
  
  background(127, 255, 212);
  fill(354, 448, 0);
  circle(personagemX, 350, 50);

fill(0, 128, 345);
  circle(200, inimigoAltura, 50);
}

function keyPressed(){
  console.log ("tecla pressionada");
  if (keyCode===LEFT_ARROW){// tecla esquerda
  personagemX = personagemX - 100;
}

if (keyCode===RIGHT_ARROW){
  personagemX = personagemX + 100;
  
}
}
