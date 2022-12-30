//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

// Erro oponente
let chancedeerro = 0;

//Velocidade da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//Variaveis Raquete 1 
let xRaqueteum = 5;
let yRaqueteum = 150;
let largRaqueteum = 10;
let alturaRaqueteum = 100;

//variaveis Oponente
let xOponente = 585;
let yOponente = 150;
let velooponente;

let vecolisao = false;

//placar do jogo
let meuspontos = 0
let pontosopoentes = 0

//Sons jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraraquete (xRaqueteum,yRaqueteum);
  mostraraquete (xOponente,yOponente)
  movimentoraqueteum();
  //colisao();
  colisaoraquetebiblio(xRaqueteum,yRaqueteum);
  colisaoraquetebiblio(xOponente,yOponente);
  movimentooponente();
  incluiPlacar();
  marcaponto();
  bugsolucao();
}

function mostraBolinha () {
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
  
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
  
}

function mostraraquete (x,y)  {
  rect(x,y,largRaqueteum,alturaRaqueteum);
}

function movimentoraqueteum() {
  if (keyIsDown(UP_ARROW)){
    yRaqueteum -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteum += 10;
  }
}

function movimentooponente(){
  velooponente =  yBolinha - yOponente - largRaqueteum/2 - 30;
  yOponente += velooponente + chancedeerro
  calcularchancedeerrar()
}

function colisao() {
  if ( xBolinha - raio < xRaqueteum + largRaqueteum && yBolinha - raio < yRaqueteum + alturaRaqueteum && yBolinha + raio > yRaqueteum) {
    velocidadexBolinha *= -1;}
    
}

function colisaoraquetebiblio(x,y){
  colidiu =
  collideRectCircle(x,y,largRaqueteum,alturaRaqueteum,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadexBolinha *= -1
    raquetada.play();
  } 
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(255,140,0)
  rect(130,10,40,20);
  fill(255);
  text(meuspontos, 150, 26);
  fill(255,140,0)
  rect(450,10,40,20);
  fill(255);
  text(pontosopoentes, 470, 26);
}

function marcaponto() {
  if (xBolinha >590){
    meuspontos += 1 ;
    ponto.play()

  }
  if (xBolinha < 10){
    pontosopoentes += 1;
    ponto.play()
  }
}

function   calcularchancedeerrar() {
  if (pontosopoentes >= meuspontos){
    chancedeerro += 1 
    if (chancedeerro >=39){
      chancedeerro = 40
    }
    else {
      chancedeerro -= 1
      if ( chancedeerro <= 35) {
        chancedeerro = 35
      }
    }
  }
}

function bugsolucao() {
  if (xBolinha - raio < 0){
    xbolinha = 23
  }
}