from markitdown import MarkItDown

# Inicializa a ferramenta
md = MarkItDown()

# Lê o PDF e converte
resultado1 = md.convert("Profile (2).pdf")
resultado2 = md.convert("Profile (2).pdf")
resultado3 = md.convert("Profile (2).pdf")

# Salva em um arquivo .md
with open(".ai/05-resume.md", "w", encoding="utf-8") as arquivo:
    arquivo.write(resultado.text_content)