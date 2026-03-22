# Ferramenta utilizada para converter arquivos de diferentes formatos em markdown
from markitdown import MarkItDown

# Inicializa a ferramenta
md = MarkItDown()

# Lê o PDF e converte
# Estes arquivos PDFs servirão como parte do contexto que estarei gerando para alimentar os agentes de IA
resultado1 = md.convert("Profile (2).pdf")
resultado2 = md.convert("currículoMatheusKubrusly (2) (2).pdf")
resultado3 = md.convert("historicoEscolarCRAprovados (10) (2).pdf")


# Salva em um arquivo .md
# Perceba que estou criando uma variável "arquivo" em momentos diferentes do código, logo, por conta do escopo do with e por ele garantir um arquivo.close() ao final de seu escopo, estarei me referindo a arquivos diferentes
with open("my-profile-informations/my-linkedin.md", "w", encoding="utf-8") as arquivo:
    arquivo.write(resultado1.text_content)

with open("my-profile-informations/my-curriculum.md", "w", encoding="utf-8") as arquivo:
    arquivo.write(resultado2.text_content)

with open("my-profile-informations/my-academic-report.md", "w", encoding="utf-8") as arquivo:
    arquivo.write(resultado3.text_content)