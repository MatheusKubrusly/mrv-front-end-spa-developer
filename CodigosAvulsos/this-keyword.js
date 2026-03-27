
/*
// Vamos tentar colocar o 'use strict' bem no início do programa 
'use strict';
// Quando colocamos o programa no modo estrito, o this interno de uma função não estará mais apontando para o objeto global

function teste() {
    console.log(this);
    // Nos casos que estivermos programando em um strict mode e quisermos referenciar
    // o objeto global dentro de uma função
    // fazemos da seguinte forma:
    console.log(global);
}

teste(); 

//'use strict'; // Eu achava que isto poderia vir a funcionar, mas não funciona. O this continua apontando para o objeto global. 
//Quando utilizamos esta função como construtora, teremos algumas linhas de código sendo executadas por baixo dos panos.
function teste2() {
    //const this = {}; // O JavaScript cria um objeto vazio e o associa à variável this, que é a referência para o objeto que está sendo criado.
    console.log("Construtor do objeto sendo executado");
    console.log(this);
    this.name = "atributo de teste"; // O JavaScript adiciona as propriedades e métodos que definimos dentro da função construtora ao objeto que está sendo criado.
    //return this; // O JavaScript retorna o objeto criado automaticamente quando utilizamos de "new", mesmo que não tenhamos escrito um return explícito.
}

//teste2();

// Este log exibirá o objeto em sua versão mais atual, após todas modificações implementadas dentro do construtor terem sido concretizadas
console.log(new teste2()); // o código executa primeiro a função teste2, preparando o objeto, para apenas depois retorná-lo.
//o retorno do "new teste2()" basicamente estará retornando a referência ao objeto que acabou de ser criado.

*/
function Person(name) {
    this.name = name;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name}`);
    }

    // setTimeout é uma função de callback
    // O que acontecerá com o "this" dentro desta função de callback?
    setTimeout(function() {
        console.log(this); // O this dentro desta função de callback não se refere mais ao objeto Person, mas sim ao objeto global.
    }.bind(this), 100);
}

//const me = new Person("Alice");
//console.log(me);
//me.sayHello();

//const method = me.sayHello;
//method(); // O this dentro do método sayHello não se refere mais ao objeto me, mas sim ao objeto global, o que pode levar a resultados inesperados.


// callback functions são executadas em um contexto diferente do que elas de fato são criadas
const you = new Person("Jhon");
// o this dentro da função de callback do setTimeout é executada em um contexto diferente o qual estará associado a um outro objeto chamado "Timeout".