#Atividade 18: Contagem de Palavras

""" Desenvolva um programa que conte quantas palavras há em uma frase fornecida
pelo usuário."""

frase = input("Digite uma frase e receba a contagem de palavras:\n")

def contagem_palavras(texto):
  lista = texto.split(" ")
  contagem = len(lista)

  return print(f"A frase recebida possui {contagem} palavras.")

contagem_palavras(frase)
