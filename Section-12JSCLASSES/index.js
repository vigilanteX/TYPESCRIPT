class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.score = 0;
    this.life = 10;
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
console.log(p1.score);
