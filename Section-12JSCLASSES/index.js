class Player {
  //this approach is called field declaration and is good when we have default values or hardcoded values
  score = 0;
  #life = 10;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // this.score = 0;
    // this.life = 10;
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
}

const p1 = new Player("Alice", 25);
console.log(p1);
p1.taunt();
console.log(p1.name);
console.log(p1.age);
p1.incrementScore();
p1.incrementScore();
console.log(p1);
p1.decrementLife();
console.log(p1);
p1.decrementLife();
console.log(p1);

//why to use provate properties
// p1.life = 100;
// console.log(p1);
//we were able to change life property from outside the class which is not good
//to avoid this we use private properties
//we avoid by using #propname in class
//p1.#life = 199; //Uncaught SyntaxError: Private field '#life' must be declared in an enclosing class
