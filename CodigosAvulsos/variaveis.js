var teste = "variável_1";

(function escopoVariavel() {
    var teste = "variável_2";
    console.log(teste);
})();

var teste2 = "x";

(function printVariavel() {
    //var teste2 = "y";
    console.log(teste2);
})();