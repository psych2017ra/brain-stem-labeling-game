var input, button, greeting, brainPart;
function setup() {
  
  createCanvas(764, 496);
  img = loadImage("brain-stem.JPG");
  
  responder = createElement('h2', "hello!");
  responder.position(590, 20);
  
  //midbrain
  input = createInput();
  input.position(40, 270);
  button = createButton('go');
  button.position(input.x + input.width, input.y);
  button.mousePressed(guessMidbrain);
  
  //pons
  input2 = createInput();
  input2.position(50, 350);
  button2 = createButton('go');
  button2.position(input2.x + input2.width, input2.y);
  button2.mousePressed(guessPons);
  
  //medulla oblongota
  input3 = createInput();
  input3.position(150, 410);
  button3 = createButton('go');
  button3.position(input3.x + input3.width, input3.y);
  button3.mousePressed(guessMedullaOblongota);
  
  //spinal cord
  input4 = createInput();
  input4.position(560, 440);
  button4 = createButton('go');
  button4.position(input4.x + input4.width, input4.y);
  button4.mousePressed(guessSpinalCord);
  
  //cerebellum
  input5 = createInput();
  input5.position(630, 210);
  button5 = createButton('go');
  button5.position(input5.x + input5.width, input5.y);
  button5.mousePressed(guessCerebellum);
  
  //thalamus
  input6 = createInput();
  input6.position(590, 90);
  button6 = createButton('go');
  button6.position(input6.x + input6.width, input6.y);
  button6.mousePressed(guessThalamus);
  
}

function draw() {
    background(img);
  
}

function guessMidbrain() {
  
  var brainGuess = input.value();
  
  if (brainGuess == "midbrain")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input.value('');
  }
}

function guessPons() {
  
  var brainGuess = input2.value();
  
  if (brainGuess == "pons")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input2.value('');
  }
}

function guessMedullaOblongota() {
  var brainGuess = input3.value();
  
  if (brainGuess == "medulla oblongota")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input3.value('');
  }
}

function guessSpinalCord() {
  var brainGuess = input4.value();
  
  if (brainGuess == "spinal cord")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input4.value('');
  }
}

function guessCerebellum() {
  var brainGuess = input5.value();
  
  if (brainGuess == "cerebellum")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input5.value('');
  }
}

function guessThalamus() {
  var brainGuess = input6.value();
  
  if (brainGuess == "thalamus")
  {
    responder.html("correct!");
  }
  else
  {
    responder.html("guess again!");
    input6.value('');
  }
}
