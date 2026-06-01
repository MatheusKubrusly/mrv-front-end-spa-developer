var numero =  +"3";
console.log(numero); // O operador unário "+" é utilizado para converter a string "3" em um número, resultando em 3. Portanto, o console irá imprimir o número 3.

var boolean = -false;
console.log(boolean); // O operador unário "-" é utilizado para converter o valor booleano "false" em um número, resultando em 0. Portanto, o console irá imprimir o número 0.

var string = +"Hello";
console.log(string); // O operador unário "+" é utilizado para tentar converter a string "Hello" em um número, mas como "Hello" não é um valor numérico válido, o resultado é NaN (Not a Number). Portanto, o console irá imprimir NaN.

var nullValue = +null;
console.log(nullValue); // O operador unário "+" é utilizado para converter o valor "null" em um número, resultando em 0. Portanto, o console irá imprimir o número 0.

var undefinedValue = +undefined;
console.log(undefinedValue); // O operador unário "+" é utilizado para tentar converter o valor "undefined" em um número, mas como "undefined" não é um valor numérico válido, o resultado é NaN (Not a Number). Portanto, o console irá imprimir NaN.

var array = +[1, 2, 3];
console.log(array); // O operador unário "+" é utilizado para tentar converter o array [1, 2, 3] em um número, mas como um array não é um valor numérico válido, o resultado é NaN (Not a Number). Portanto, o console irá imprimir NaN.

var x = 5;
x *= 2;
// output: x = 10

var y = 10;
y /= 2;
// output: y = 5

var z = 15;
z -= 5;
// output: z = 10

var a = 3;
a **= 2;
// output: a = 9

var b = 10;
b %= 3;
// output: b = 1

var c = 5; // em binário, 5 é equivalente a 101
c <<= 1;  // operação de deslocamento a esquerda, equivalente a c = c << 1
// output: c = 10

var d = 10 // em binário, 10 é equivalente a 1010
d >>= 1; // operação de deslocamento a direita, equivalente a d = d >> 1
// output: d = 5 (101, em binário)