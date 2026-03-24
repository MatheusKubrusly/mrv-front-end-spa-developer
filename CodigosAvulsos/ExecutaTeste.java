public class ExecutaTeste extends Teste {
    public static void main(String args[]) {
        ExecutaTeste teste = new ExecutaTeste();
        System.out.println(teste.name); 

        ExecutaTeste teste2 = new ExecutaTeste();
        teste2 = new ExecutaTeste(); //Quando fazemos esta manipulação com a variável "teste2", estamos criando duas instâncias completamente diferentes do que seria a classe ExecutaTeste.
    }
}