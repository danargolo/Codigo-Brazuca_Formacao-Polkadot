# Atividade 9: Manipulação de Strings

""" Escreva um programa que peça uma frase ao usuário e conte quantas vezes uma letra
específica aparece. """

input_frase = input("Digite uma frase:\n")
input_letra = input("Digite uma letra:\n")

def contador_letras(frase, letra): 

  contagem = frase.count(letra)
  if(contagem == 0): return print(f'A letra {letra} não consta na frase "{frase}".')

  return print(f'A letra {letra}, aparece {contagem}x na frase "{frase}".')

contador_letras(input_frase, input_letra)