#include <stdio.h>

int sayHello(int argc, char *argv[]) {
    printf("Hello, World!\n");
    printf("%d\n",argc);
    printf("%s\n",argv[0]);
    return 0;
}

int main(int argc, char *argv[]) {
    sayHello(argc, argv);
}

// Nestas horas percebemos que a linguagem C funciona de uma forma totalmente diferente
// e não tem nada de "por baixo dos panos" como rola com JavaScript