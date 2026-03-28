function Pessoa(name) {
    this.name = name;
}

const me = new Pessoa('João');
console.log(me.__proto__ === Pessoa.prototype); // true
// Perceba que o objeto "me" estaria herdando então as propriedades do que seria a classe Pessoa
console.log(me.constructor); // constructor Pessoa()
console.log(Pessoa.__proto__ === Function.prototype); // true

console.log(me instanceof Pessoa); //true
console.log(me instanceof Object); // por Pessoa herdar Object, me também acabará sendo por consequência uma instância de Object
console.log(Pessoa instanceof Function); // true, pois Pessoa é uma função
console.log(Pessoa instanceof Object); // true, pois Pessoa é um objeto do tipo função, e funções são objetos em 


class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    get name() { //palavras chaves para um determinado atributo, mesmo que ele seja privado!
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }
}

const person1 = new Person('Maria');
console.log(person1.name);
person1.name = 'Ana';
console.log(person1.name);
console.log(person1.#name); //atributo privado de uma classe, portanto, não pode ser acessado