class Player {
  //this approach is called field declaration and is good when we have default values or hardcoded values
  score = 0;
  #life = 10;
  #secret;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // this.score = 0;
    // this.life = 10;
    this.#privatemethod();
    console.log("Player constructor created!");
  }
  taunt() {
    console.log("You can't defeat me!");
  }
  incrementScore() {
    this.score += 1;
  }
  decrementLife() {
    //changed this.life to this.#life to point to private property
    this.#life -= 1;
  }
  setSecret(secret) {
    this.#secret = secret;
  }
  getSecret() {
    return this.#secret;
  }
  #privatemethod() {
    console.log("This is a private method");
  }
  get info() {
    return `Name: ${this.name}, Age: ${this.age}, Score: ${this.score}, Life: ${
      this.#life
    }`;
  }
  set lifeinfo(life) {
    if (life < 0) {
      throw new Error("Life cannot be negative");
    }
    this.#life = life;
  }

  static description = "Player class represents a player in the game";
  static info() {
    return "This is a static method providing class-level information.";
  }
}

// const p1 = new Player("Alice", 25);
// console.log(p1);
// p1.taunt();
// console.log(p1.name);
// console.log(p1.age);
// p1.incrementScore();
// p1.incrementScore();
// console.log(p1);
// p1.decrementLife();
// console.log(p1);
// p1.decrementLife();
// console.log(p1);

// //why to use provate properties
// // p1.life = 100;
// // console.log(p1);
// //we were able to change life property from outside the class which is not good
// //to avoid this we use private properties
// //we avoid by using #propname in class
// //p1.#life = 199; //Uncaught SyntaxError: Private field '#life' must be declared in an enclosing class

// //setting and getting private property using methods
// p1.setSecret("AWS SECRET");
// console.log(p1.getSecret());

// //accessing getter
// console.log(p1.info);
// p1.lifeinfo = 100;
// console.log(p1);
// console.log(Player.description); //accessing static property using class name dot property name
// console.log(Player.info()); //accessing static method using class name dot method name

class AdminPlayer extends Player {
  #isAdmin = true;
  meowmaster = true;
  constructor(power, name, age) {
    super(name, age);
    this.power = power;
  }
}
let admin = new AdminPlayer(["Bob", 30], "meowni", 33);
console.log(admin);
