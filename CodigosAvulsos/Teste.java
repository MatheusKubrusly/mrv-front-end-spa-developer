public class Teste {
    private String name = "nome presente no objeto pai";

    public String getName() {
        return name; //perceba que eu não preciso utilizar de "this", mas no JavaScript parece ser necessário!
        //apenas precisaríamos utilizar do "this" caso houvesse uma variável local com o mesmo nome da variável de instância, ou seja, a variável "name" local ao método "getName()".
    }
}