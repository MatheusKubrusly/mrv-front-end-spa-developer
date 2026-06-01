//function Animal() {
//    this.qtdPatas = 4;
//    return 0; // O que ocorre com este valor de retorno? 
//}
//
//const cachorro = new Animal();
//console.log(cachorro.qtdPatas); // Output: 4
//console.log(cachorro); // Output: Animal { qtdPatas: 4 }
//
//console.log(Animal()); // Output: 0
//console.log( typeof cachorro);
//console.log(typeof Animal);
//console.log(cachorro instanceof Animal); // Output: true
//console.log(Animal instanceof Function); // Output: true  
//
//// Por conta do hoisting, já teremos a variável "nome" sendo criada...
//// var nome; //esta variável estará presente dentro do escopo global de variáveis
//
//this.nome = "Matheus"; //No node.js, esta variável, na realidade, fará parte de module.exports, ou seja, do escopo global de variáveis. Já no navegador, esta variável fará parte do objeto global "window".
//function Pessoa() {
//    //nome = "Maria"; //esta variável aqui, na realidade, estaria acessando a variável "nome" já declarada fora do escopo da função
//    console.log(this.nome); //"undefined" porque o objeto Pessoa não tem a propriedade nome
//}
//
//Pessoa();
//
////...
//
//nome = "João"; //hoisting: a variável "nome" é "içada" para o topo do escopo global, mas seu valor só é atribuído após a linha de código ser executada. Portanto, antes da atribuição, "nome" é undefined.
//Pessoa(); 
//console.log(global.nome);  // Perceba que a variável "nome" é definida automaticamente como parte do escopo global
//
////quanto mais eu escrevo, mais eu não entendo nada...

console.log(this); //Output: {} (no node.js) ou Window { ... } (no navegador)

const user1 = {
    name: "Matheus",
    age: 20, 
    getName: function() {
        return name; //deprecated: "name" is not defined. No JavaScript, para acessar a propriedade "name" do objeto "user", é necessário utilizar "this.name" dentro do método "getName()". O uso de "name" sem o prefixo "this." faz com que o JavaScript procure por uma variável local chamada "name", que não existe, resultando em um erro de referência.
        //teremos um erro pois estaríamos buscando por uma variável local ao método a qual não existe
    }
}

//corrigindo o problema apresentado acima
const user2 = {
    name: "Julia",
    age: 30, 
    getName: function() {
        return this.name; //como estamos usando de this, iremos conseguir referenciar o atributo do objeto de forma correta
    }
}

//user1.getName(); //esta linha lança um ReferenceError
console.log(user2.getName());