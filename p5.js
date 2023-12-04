function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
    rect(50, 50, 200);
}
// Variáveis para as raquetes, bola e barras horizontais
let raqueteJogador, raqueteComputador, bola, barraSuperior, barraInferior;

function setup() {
  createCanvas(800, 400);
  raqueteJogador = new Raquete(30, height / 2, 10, 60);
  raqueteComputador = new Raquete(width - 40, height / 2, 10, 60);
  bola = new Bola(width / 2, height / 2, 10);
  barraSuperior = new Barra(0, 5, width, 5);
  barraInferior = new Barra(0, height - 5, width, 5);
}
class Raquete {
   // ...
}

class Bola {
   // ...
}
if (
      this.y - this.r / 2 <= barraSuperior.y + barraSuperior.h ||
      this.y + this.r / 2 >= barraInferior.y - barraInferior.h
    ) {
      this.velocidadeY *= -1;
    }
       if (this.y - this.r / 2 <= 0 || this.r /2 
>= height) {
      this.velocidadeY *= -1;
      }

function draw() {
  background(0);
   // Atualiza as posições das raquetes e da bola
    playerPaddle.update();
    computerPadlle.update();
    ball.update();

    // Vericia colisões entre a bola e raquetes
    ball.checkPaddleCollision(playerPaddle);
    ball.checkPaddleCollision(computerPadle);

    // Desenha as raquetes e a bola
    playerPaddle.display();
    computerPaddle.display();
    ball.display();
}
class Raquete {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

atualizar() {
    if (this === raqueteJogador) {
      this.y = mouseY;
    } else {
      if (bola.y > this.y + this.h / 2) {
        this.y += 3;
      } else if (bola.y < this.y - this.h / 2) {
        this.y -= 3;
      }
    }
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

    display() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);

if (this.x + this.r / 2 >= width) {
      this.reiniciar();
    } else if (this.x - this.r / 2 <= 0) {
      raqueteComputador.y = random(height - raqueteComputador.h);
      this.reiniciar();
    }
  
checkPadleCollision(paddle) {
    if (
      this.x - this.r / 2 <= paddle.x + paddle.w / 2 &&
      this.x + this.r / 2 >= paddle.x - paddle.w / 2 &&
      this.y + this.r / 2 >= paddle.y - paddle.h / 2 &&
      this.y - this.r / 2 <= paddle.y + paddle.h / 2
    ) {
      this.velocidadeX *= -1;
    }

  }

  display() {
    fill(255);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
    
  }

