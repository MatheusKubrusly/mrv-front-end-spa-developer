const counter = {
  count: 0,
  start: function() {
    // REGULAR FUNCTION inside a timer
    setTimeout(function() { //Esta função não é a mesma que a declarada como método, logo, ambas são entendidas como  funções completamente distintas em memória.
      console.log(typeof this.count);
      console.log("Before incrementing:", this.count); // Antes de incrementar, o valor de "this.count" é undefined, porque "this" dentro desta função se refere ao objeto global (window no navegador ou global no Node.js) e não ao objeto "counter".
      this.count++; // Esta linha de código não gera um erro explícito no código!
      console.log("Regular:", this.count); //como tentantos tratar "this.count" como um número, o valor atribuído a ela será então "NaN" (Not a Number)
    }, 100);

    // ARROW FUNCTION inside a timer
    setTimeout(() => { // Esta função setTimeOut() tem um escopo global!!!
      console.log(typeof this.count);
      console.log("Before incrementing:", this.count); // Antes de incrementar, o valor de "this.count" é 0
      this.count++; // Este "this" se refere ao objeto "counter" e não ao objeto "Function" do setTimeout, porque as arrow functions não têm seu próprio "this", elas herdam o "this" do contexto onde foram definidas, que é o método "start" do objeto "counter".
      console.log("Arrow:", this.count); 
    }, 100);
  }
};

counter.start();
// Regular: NaN (Because 'this' inside the timer became the Global Object)
// Arrow: 1 (Because it inherited 'this' from the 'start' method)

// Como forma de detalhar melhor o código acima, irei quebrar o código em passos ainda menores de uma forma que fique mais visível entender o porquê do output gerado

const counter2 = {
  count: 0,
  start: function() {

    console.log("Inside start method, this.count:", this.count); // Aqui, "this" se refere ao objeto "counter2", pois a função atribuída a "start" é configurada como um método, logo, terá esse comportamento de se referir ao objeto onde foi criada

    const FnParam = function() { // Como esta função é uma função criada dentro do próprio método, ela já não é entendida como um método em si e daí comporta-se como uma função de fato, logo, esse this referencia o contexto da própria função a qual também é entendida como um objeto, logo, é por isso que temos este valor como "undefined"
      // Esta função é uma função regular, ou seja, ela tem seu próprio "this" que é o objeto global (window no navegador ou global no Node.js)
      console.log("Regular:", this.count);
    };
    
    const ArrowFnParam = () => { // Esta função é uma arrow function, ou seja, ela não tem seu próprio "this" e herda o "this" do contexto onde foi definida, que é o método "start" do objeto "counter2"
      console.log("Arrow:", this.count); // Este 'this' vai subindo na hierarquia de escopo até encontrar o objeto "counter2"
    };
    
    setTimeout(FnParam, 100);
    setTimeout(ArrowFnParam, 100);
  }
};

counter2.start();

