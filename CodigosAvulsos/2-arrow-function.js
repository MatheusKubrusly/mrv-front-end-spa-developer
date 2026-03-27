//function sayHello(name) {
//    console.log(arguments); //arguments lembra muito o que tinhamos quando passávamos argumentos para a função "main" na linguagem C
//    console.log(name); // O primeiro argumento passado será atribuído ao parâmetro 'name', mas os outros argumentos ainda estarão disponíveis no objeto 'arguments', assim como o próprio valor de "name" também estará!
//    for(let i = 0; i < arguments.length; i++) {
//        console.log("Hello, " + arguments[i]);
//    }
//}
//
//sayHello("Alice", "Bob", "Charlie"); // Perceba que podemos passar quantos argumentos quisermos, e a função irá lidar com eles usando o objeto 'arguments'.

const sayHelloArrow = (name) => {
    console.log(name);
    //console.log(arguments); // Aqui, 'arguments' não está definido, pois as arrow functions não possuem seu próprio objeto 'arguments'. Mas, ao invés disso, este "arguments" estará se referindo ao atributo "arguments" do objeto global!!!
}

sayHelloArrow("Alice", "Bob", "Charlie"); // Como estamos lidando com uma arrow-function, não poderemos utilizar de "arguments" por padrão! Portanto, não conseguiremos acessar estes outros argumentos passados.