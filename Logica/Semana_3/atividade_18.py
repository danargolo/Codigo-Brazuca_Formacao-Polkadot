frase = input("Digite uma frase e receba a contagem de palavras:\n")

def contagem_palavras(texto):
  lista = texto.split(" ")
  contagem = len(lista)

  return print(f"A frase recebida possui {contagem} palavras.")

contagem_palavras(frase)
