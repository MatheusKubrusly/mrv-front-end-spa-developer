var teste = "variável_1";

(function escopoVariavel() {
    var teste = "variável_2";
    console.log("acessando a variável local:", teste); //aqui utiliza-se da variável "teste" declarada dentro do escopo da função
    console.log("acessando a variável global:", window.teste); //neste caso, estamos forçando a utilização da variável "teste" declarada dentro do escopo global
})();

var teste2 = "x";

(function printVariavel() {
    //var teste2 = "y";
    console.log(teste2);
})();