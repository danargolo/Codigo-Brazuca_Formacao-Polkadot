# Atividade 5: Laços de Repetição

""" Escreva um programa que conte de 1 a 10 e imprima apenas os números pares. """

def contador_pares() :
  for i in range(10):
    if((i+1) % 2 == 0):
      print(i+1)

contador_pares()