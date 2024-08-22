#12: Jogo de Adivinhação

""" Crie um jogo onde o programa escolhe um número aleatório entre 1 e 100, e o
usuário deve adivinhar qual é o número."""

import random


def advinhacao():
  aleatorio = random.randint(1, 100)
  palpite = int(input("Advinhe o número entre 1 e 100:\n"))

  while palpite != aleatorio:

    if(palpite < aleatorio):
      print(f"O número é maior que {palpite}.")

    if(palpite > aleatorio):
      print(f"O número é menor que {palpite}.")

    palpite=int(input("Tente novamente:\n"))
  
  print(f'Parabéns!!! Você acertou, {aleatorio} era o número.')

advinhacao()