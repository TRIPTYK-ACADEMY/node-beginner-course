

class Animal {
  nombreDePattes = 0;
  nom = "animal";

  toString() {
    return `Je suis un ${this.nom}, j'ai ${this.nombreDePattes} pattes`;
  }
}

class Sebastien extends Animal {
  nom = "sebastien"
  nombreDePattes = 2;
}

const animalQuelconque = new Animal();
const sebastien = new Sebastien();

console.log(animalQuelconque.toString());
console.log(sebastien.toString());
