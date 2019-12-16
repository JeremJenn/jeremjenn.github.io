var gameState = {}

function preload() {
  this.load.image('monkey', 'https://vignette.wikia.nocookie.net/jungle-thick/images/0/0c/Monky.png/revision/latest?cb=20190826180942');
  this.load.image('full', 'C:/Users/Public/Trash Monkey/Trash Monkey Website/Assets/Images')
  ;
}

function create() {
  var style = {
    fill: '#FFF',
    font: 'Bold 32px Arial'
  }



  gameState.cursors = this.input.keyboard.createCursorKeys();
  gameState.menuBox = this.add.rectangle(200, 250, 150, 80, 0xB5CF16);
  gameState.menu = this.add.text(147.5, 231, 'START', style);

  gameState.menuBox.setInteractive();

  gameState.menuBox.on('pointerup', function() {
    gameState.menuBox.x = 600
    gameState.menu.x = 600
    if(gameState.randomizer == 0) {
      gameState.monkey.x = 200;
      gameState.monkey.y = 0;
    }
    });
      gameState.randomizer = Math.floor(Math.random());
      if(gameState.randomizer == 0) {
        gameState.monkey = this.add.sprite(2000, 0, 'monkey');
        }
    gameState.fullHealth = this.add.sprite(300, 37.5, 'full');
}

function update() {
  if(gameState.randomizer == 0) {
    gameState.monkey.y += 3;
    if (gameState.cursors.right.isDown) {
      gameState.monkey.x = 300;
    }
    if (gameState.cursors.left.isDown) {
      gameState.monkey.x = 100;
    }
    if (gameState.cursors.up.isDown) {
      gameState.monkey.x = 200;
  }
    if (gameState.cursors.down.isDown) {
      gameState.monkey.y += 15;
  }
    if (gameState.monkey.y >= 500) {
      gameState.monkey.y = 0;
  }
  }
}

var config = {
	type: Phaser.AUTO,
	width: 400,
  height: 500,
  backgroundColor: "#2191E8",
  parent: 'my-game',
  scene: {
    preload,
    create,
    update
	}
}

var game = new Phaser.Game(config);
