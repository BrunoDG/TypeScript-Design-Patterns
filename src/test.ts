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
let f: { [key: number]: string };
f = { 123: "abc", 456: "def" };
let g: { [key: string]: boolean };
g = { abc: true, def: false, ghi: true };

console.log(`f: ${f[123]}`);
console.log(`g: ${g["def"]}`);
