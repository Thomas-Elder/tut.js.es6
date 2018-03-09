
/**
 * Exercise 1, 2, 3. Create a PlayerCharacter and a NonPlayerCharacter with a 
 * common ancestor Character. The characters are located in a 10x10 game 
 * field. All characters appear at a random location. 
 * 
 * Create the three classes, and make sure you can query where each character is. 
 * 
 * Make sure the Character class cannot be instantiated. 
 * 
 * Each character has a direction (up, down, left, right). 
 * 
 * Player characters initially go right, and their direction can be changed using the 
 * faceUp, faceDown, faceLeft, faceRight methods. 
 * 
 * Non-player characters move randomly. A move is automatically taken every 5 seconds 
 * in real time. 
 * 
 * Right after the synchronized moves,each character console logs its position. The player
 * character can only influence the direction they are facing. 
 * 
 * When a player meets a non-player character, the non-player character is eliminated from 
 * the game, and the player’s score is increased by 1.
 */

/**
 * Abstract Character class
 */
class Character {

  /**
   * Constructor
   * 
   * @param {int} id 
   * @param {string} name 
   * @param {int} x 
   * @param {int} y 
   */
  constructor(id, name, x, y) {

    if (new.target === Character)
      throw new Error('Abstract class Character cannot be instantiated');

    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;

    this.dx = 1;
    this.dy = 0;
  }

  get position() {
    return {x: this.x, y: this.y};
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    // test for edge of the board
    if (this.x < 0) this.x = 0;
    if (this.x > 9) this.x = 9;
    if (this.y < 0) this.y = 0;
    if (this.y > 9) this.y = 9;
  }

  logPosition() {
    console.log(this.name, this.position);
  }

  collidesWith (character) {
    return character.position.x === this.x &&
    character.position.y === this.y;
  }
}

/** */
class PlayerCharacter extends Character { 
  
  /**
   * Constructor
   * 
   * @param {int} id 
   * @param {string} name 
   * @param {int} x 
   * @param {int} y 
   */
  constructor(id, name, x, y) {
    super(id, name, x, y);
    this.score = 0;
  }

  faceUp() {
    this.dx = 0;
    this.dy = -1; // this is up remember
  }

  faceDown() {
    this.dx = 0;
    this.dy = 1;
  }

  faceLeft() {
    this.x = -1;
    this.y = 0;
  }

  faceRight() {
    this.x = 1;
    this.y = 0;
  }

  increaseScore(points) {
    this.score += points;
  }
}

/** */
class NonPlayerCharacter extends Character { 

  faceRandom() {
    let dir = Math.floor(Math.random() * 4);

    this.dx = [0, 0, -1, 1][dir];
    this.dy = [-1, 1, 0, 0][dir];
  }
}

/**
 * Create Player
 * @param {int} id 
 * @param {string} name 
 */
function createPlayer(id, name) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);

  return new PlayerCharacter(id, name, x, y);
}

function createNonPlayer(id, name) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);

  return new NonPlayerCharacter(id, name, x, y);
}

let npcArray = '23456'.split('').map(i => {
  return createNonPlayer(i, 'Wumpus_' + i);
});

let player = createPlayer(1, 'Player');

function gameLoop() {
  function changeNpcDirections() {
    npcArray.forEach( npc => {
      npc.faceRandom(); 
    });
  }

  function moveCharaters() {
    player.move();
    npcArray.forEach( npc => { 
      npc.move(); 
    });
  }

  function logPositions() {
    player.logPosition();
    npcArray.forEach( npc => { 
      npc.logPosition(); 
    });
  }

  function processCollisions() {
    let len = npcArray.length;

    npcArray = npcArray.filter( npc => { 
      !npc.collidesWith(player); 
    });

    // I guess this checks how many collisions and adds that to the player score
    player.increaseScore(len - npcArray.length);
  }

  console.log('move starts');
  changeNpcDirections();
  moveCharaters();
  logPositions();
  processCollisions();
}

setInterval( gameLoop, 5000);