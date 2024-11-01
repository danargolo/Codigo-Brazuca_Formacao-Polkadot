class Animal {
  nome: string;
  som: string;

  constructor(nome: string, som: string){
    this.nome = nome;
    this.som = som;
  }

  emitirSom(): string {
    return `${this.nome} faz ${this.som}`;
  }
}

class Cachorro extends Animal {
  raca: string;

  constructor(nome: string, som: string, raca: string) {
    super(nome, som);
    this.raca = raca;
  }

  latirForte(): void {
    const sonsPorRaca: { [key: string]: string } = {
      "Vira-lata": "Au Au",
      "Pug": "Arf Arf",
    };
    this.som = sonsPorRaca[this.raca] || "au au";
  }

}

class Gato extends Animal {
  raca: string;

  constructor(nome: string, som: string, raca: string) {
    super(nome, som);
    this.raca = raca;
  }

  override emitirSom(): string {
      return `${this.nome} apenas te ignorou...`
  }
}

const cao = new Cachorro('Caramelo','Woof', 'Vira-lata');
console.log(cao.emitirSom());

const rex = new Cachorro('Rex','au', 'Pug');
rex.latirForte();
console.log(rex.emitirSom());

const cat = new Gato('Simba', 'miau', 'Siames');
console.log(cat.emitirSom());