/**
 * Tipos básicos de variáveis em Typescript
 */

// let foo: string; // string
// let bar: boolean; // booleana (true ou false)
// let baz: number; // número
// let qux: string[]; // Array de strings
// let quuz: [number, string]; // Tuple = Tupla
// let corge: { [key: number]: string }; // Dictionary = Dicionário
// let grault: Set<number>; // Set de números

/*
foo = "ABC";
bar = true;
baz = 123;
qux = ["a", "b", "c"];
quuz = [1, "abc"];
corge = { 123: "abc", 456: "def" };
grault = new Set([1, 2, 3]);
*/

/**
 * Exemplos de uso de string
 */
let foo: string; // string
foo = "ABC";
foo = "123";
foo = "ABC = 123";
foo = "quick brown fox, etc";
foo = "It wasn't me";
foo = "It wasn't me";
foo = 'It wasn"t me';

foo = `abc ${foo} def`;

foo = "abc" + "123";
console.log(`foo: ${foo}`);

/**
 * Exemplo de uso de boolean
 */
let bar: boolean;
bar = true;
bar = false;

foo = "def";
bar = foo === "def";

bar = "abc".endsWith("c");

console.log(`bar: ${bar}`);

/**
 * Exemplo de uso de number
 */
let baz: number;
baz = 123; // decimal/int (inteiro)
baz = 123.456; // float (flutuante)
baz = 0xffff; // hex (hexadecimal)
baz = 0b10101; // binary (binário)
baz = 0o671; // octal (octal / base 8)

console.log(`baz: ${baz}`);
console.log(`baz(octal): 0o${baz.toString(8)}`);
console.log(`baz(hex): 0x${baz.toString(16)}`);
console.log(`baz(binary): 0b${baz.toString(2)}`);

/**
 * Exemplo de uso de array
 */
let a: string[];
a = ["a", "b", "c", "d"];
let b: number[];
b = [1, 2, 3, 4, 0];
let c: boolean[];
c = [true, false, true];
let d: unknown[];
d = [1, "a", true, ["even", "another", "internal", "array"]];
let e: any[] = []; // não é recomendado usar any, ao invés disto use unknown

// Itens de um array podem ser recuperados usando indexadores com base zero
console.log(`a[1]: ${a[1]}`);
console.log(`b[0]: ${b[0]}`);
console.log(`c[1]: ${c[1]}`);
console.log(`d[2]: ${d[2]}`);
console.log(`e todo: ${e}`);
console.log(`b todo: ${b}`);
console.log(`comprimento de b: ${b.length}`);
// pop() -> remove último elemento do array
console.log(`último elemento de b: ${b.pop()} -> removido!`);
console.log(`b resultante: ${b}`);
// shift() -> remove primeiro elemento do array
console.log(`primeiro elemento de b: ${b.shift()} -> removido!`);
console.log(`b resultante: ${b}`);
// push(<valor>) -> insere elemento no final do array
console.log(`inserindo elemento no final de b: ${b.push(6)} -> inserido!`);
console.log(`b resultante: ${b}`);
// unshift(<valor>) -> insere elemento no início do array
console.log(`inserindo elemento no início de b: ${b.unshift(69)} -> inserido!`);
console.log(`b resultante: ${b}`);
// splice(<pos_inicial>, <qtd_val>) -> pega elementos específicos de um vetor
console.log(`pegando elementos específicos de b: ${b.splice(1, 2)}`);
console.log(`b resultante: ${b}`);
// lastIndexOf(<valor>) -> retorna a posição do array onde valor se encontra
console.log(`onde está 69 em b: ${b.lastIndexOf(69)}`);
// importante lembrar que todas as funções acima valem para qualquer tipo de array

/**
 * Exemplo de uso de Dictionary
 */
let f: { [id: number]: string };
f = { 123: "abc", 456: "def" };
let g: { [key: string]: boolean };
g = { abc: true, def: false, ghi: true };
let h: { [key: string]: string };
h = { a: "car", b: "train", c: "plane", d: "boat" };

console.log(`f: ${f[123]}`);
console.log(`g: ${g["def"]}`);

// Se a chave for string, você pode retornar como objeto em TS
console.log(`g: ${g.abc}`);
// Mas não funciona quando a chave / o id é um número
console.log(`f: ${f[123]}`);

// dá pra adicionar ítens em um dictionary
h["e"] = "go-cart";
console.log(h);

// temos como deletar também
delete f[456];
console.log(f);

// Dicionários podem ter valores de qualquer tipo, até mesmo arrays
let i: { [id: number]: number[] };
i = { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12] };
console.log(i);

// Para criar um objeto vazio, basta apenas inserir tipos vazios
let eObj = {};

/**
 * Exemplo de uso de Tuplas
 */
let j: [number, string];
j = [1, "abc"];
let k: [string, boolean, number];
k = ["abc", false, 123];

console.log(j[1]);
console.log(k[2]);

/**
 * Exemplo de uso de Sets
 */
let l: Set<number>;
l = new Set([1, 2, 3, 4]);
// Valores repetidos não são adicionados ao set
let m: Set<string>;
m = new Set(["a", "b", "c", "d", "a"]);
let n: Set<unknown>;
n = new Set([1, "b", true]);

console.log(l);
console.log(m);
console.log(n);

const o: Set<string> = new Set();
o.add("cat");
o.add("dog");
o.add("bird");

console.log(o);

// podemos deletar um ítem do set.
o.delete("dog");
console.log(o);

// podemos retornar um ítem específico de um Set usando a função Array.from()
console.log(Array.from(o)[1]);
// tembém podemos imprimir o comprimento do set
console.log(o.size);
// E verificar se o set tem um elemento específico ou não
console.log(o.has("bird"));

// --------==== Fim dos tipos básicos de Typescript ====--------

/**
 * Exemplos de usos de Classes em Typescript
 */

class Cat {
  name: string;
  stepsWalked: number;
  /**
   *  podemos iniciar de duas formas:
   *  - Dentro do construtor, como fiz abaixo
   *  - Direto quando declaramos a variável no escopo global.
   */

  constructor(name: string) {
    this.name = name;
    this.stepsWalked = 0;
  }

  walk(): void {
    console.log("O gato tá andando");
  }

  walk2(steps: number): void {
    console.log(this.name + ", o gato, deu " + steps + " passos.");
    this.stepsWalked += steps;
  }

  totalStepCount(): number {
    return this.stepsWalked;
  }
}

const GATO = new Cat("Jão");
GATO.walk();
GATO.walk2(20);
GATO.walk2(20);
console.log(
  GATO.name +
    ", o gato, andou um total de " +
    GATO.totalStepCount() +
    " passos."
);

/**
 * Exemplos de usos de Interfaces em Typescript
 */

interface IAnimal {
  name: string;
  age: number;

  feed(food: string, amount: number): void;
}

/**
 * Se a classe que implementa a interface não tiver todos os atributos e funções,
 * A classe não vai funcionar, por não implementar corretamente tudo o que foi
 * definido dentro da interface.
 * Então, por padrão, a classe é obrigada a implementar todos os métodos da
 * interface que ela herdar, mas se quiser, pode adicionar outros métodos
 * e atributos adicionais.
 */
class Dog implements IAnimal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " + this.name + " the Dog " + amount + " kg of " + food
    );
  }
}

const CAO = new Dog("MoonMoon", 4);
CAO.feed("Beef", 0.5);

/**
 * Exemplo de uso de classes abstratas em Typescript
 */

class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " +
        this.name +
        " the " +
        this.constructor.name +
        " " +
        amount +
        " kg of " +
        food
    );
  }
}

class ACat extends Animal {
  isHungry: boolean;
  constructor(name: string, age: number, isHungry: boolean) {
    /**
     * super() chama o construtor da classe mãe.
     */
    super(name, age);
    this.isHungry = isHungry;
  }

  /**
   * super também serve para chamar métodos da classe mãe.
   */

  feed(food: string, amount: number): void {
    if (this.isHungry) {
      super.feed(food, amount);
    } else {
      console.log(
        this.name + " the " + this.constructor.name + " is not hungry."
      );
    }
  }
}
class ADog extends Animal {}

const AGato = new ACat("Cosmo", 8, false);
const ACao = new ADog("Rusty", 12);
AGato.feed("Fish", 0.1);
ACao.feed("Beef", 0.4);
