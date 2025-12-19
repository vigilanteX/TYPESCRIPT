class Player {
  //this approach is called field declaration and is good when we have default values or hardcoded values
  score = 0;
  life = 10;
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
    this.life -= 1;
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
