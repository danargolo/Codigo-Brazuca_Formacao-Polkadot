#Atividade 5: Tabuada

""" Escreva um programa que exiba a tabuada de um número fornecido pelo usuário."""

input = int(input('Digite um número e descubra sua tabuada:\n'))

def tabuada(numero):

  for multiplicador in range(1,11):
    print(f"{numero} x {multiplicador} = {numero * multiplicador}")


tabuada(input)

