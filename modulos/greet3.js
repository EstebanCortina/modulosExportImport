//Exporta un objeto construido

class Greetr {
  constructor() {
    this.greeting = "Mensaje desde greet3";
  }
  greet() {
    console.log(this.greeting);
  }
}

module.exports = new Greetr();