const counter = {
  count: 0,
  start: function() {
    // REGULAR FUNCTION inside a timer
    setTimeout(function() { //Esta função não é a mesma que a declarada como método, logo, ambas são entendidas como  funções completamente distintas em memória.
      console.log(typeof this.count);
      this.count++; // Esta linha de código não gera um erro explícito no código!
      console.log("Regular:", this.count); //como tentantos tratar "this.count" como um número, o valor atribuído a ela será então "NaN" (Not a Number)
    }, 100);

    // ARROW FUNCTION inside a timer
    setTimeout(() => { // Esta função setTimeOut() tem um escopo global!!!
      console.log(typeof this.count);
      console.log("Before incrementing:", this.count); // Antes de incrementar, o valor de "this.count" é 0
      this.count++; 
      console.log("Arrow:", this.count); 
    }, 100);
  }
};

counter.start();
// Regular: NaN (Because 'this' inside the timer became the Global Object)
// Arrow: 1 (Because it inherited 'this' from the 'start' method)


//Tentando entender melhor o comportamento das funções 

function teste() { // Perceba que, para criarmos uma função explicitamente, precisamos utilizar desse operador "function" e dar um nome para a função, ou seja, "teste"
    console.log("Teste1");
}

function teste() { // Será que esta função irá sobrescrever a outra de mesmo nome declarada acima???
    console.log("Teste2");
}

teste(); // Esta função sobrescreve a primeira função declarada e imprime apenas "Teste2" no console. 
// Basicamente, é como se eu estivesse pegando o ponteiro que apontasse para as instruções da primeira função e trocasse para o ponteiro que apontasse para esta outra função que imprime "Teste2". Este conceito também está presente em linguagens como C e Java, portanto, não se engane!



