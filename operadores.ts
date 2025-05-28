let a: number = 10;
let b: number = 14;

//Aritméticos
console.log('soma', a + b);
console.log('subtração', a - b);
console.log('multiplicação', a* b);
console.log('Divisão', a/b);
console.log('Resto', a % b) /*percente*/

//Relacionais
console.log('igual', a == b);
console.log('Diferente', a != b);
console.log('Maior que: ', a > b);
console.log('Menor que: ', a < b);
console.log('Maior ou igual: ', a >= b);
console.log('Menor ou igual: ', a <= b );


//Identidade Restrita
console.log('Identico', a === b);
console.log('Não identico', a !== b );

//Logicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//operador condicional (ternário)
let idade: number = 17;
let acesso = idade >= 18 ? 'Permitido beijar na boca' : 'Não Permitido' /* condicao ? valor se true : valor se false*/