def sem_parametros():
    print("A funcao foi chamada sem parametros declarados.")


def com_args(*args):
    print("Argumentos posicionais recebidos:", args)


def exemplo_javascript():
    print("Em JavaScript, argumentos extras podem ser acessados por arguments ou ...rest.")
    print("Em Python, isso precisa ser declarado com *args.")


print("1) Tentando passar argumentos para uma funcao sem parametros:")
try:
    sem_parametros(1, 2, 3)
except TypeError as erro:
    print("Erro:", erro)

print("\n2) Fazendo o equivalente em Python com *args:")
com_args(1, 2, 3)

print("\n3) Comparacao com JavaScript:")
exemplo_javascript()
