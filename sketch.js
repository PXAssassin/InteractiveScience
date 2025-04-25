let myModel;
let myTexture;


function preload() {

  myModel = loadModel('obj3D/EspectroFotometroNew.obj', true);

  myTexture = loadImage('obj3D/Texture.jpeg');
}

function setup(){
  // Obtén el contenedor para que el canvas sea responsive
  let container = document.getElementById('sketch-container');
  let containerWidth = container.offsetWidth;
  
  // Crea un canvas WEBGL con una altura proporcional y lo asigna al contenedor
  let canvas = createCanvas(containerWidth, containerWidth * 0.66, WEBGL);
  canvas.parent('sketch-container');
  canvas.elt.style.background = "transparent";

}

function draw(){
  clear();
  background(255);
  // Agregar iluminación para realzar el modelo
  ambientLight(150);
  directionalLight(255, 255, 255, 0, 1, 0);
  

  orbitControl();
  scale(2.2);
  noStroke();
  rotateY(PI);
  rotateX(PI);
  
  if (myTexture) {
    texture(myTexture);
  }
  
  // Dibuja el modelo 3D
  model(myModel);
}



