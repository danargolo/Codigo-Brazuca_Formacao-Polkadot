# Atividade 8: Criando Funções

""" Escreva uma função que receba um número e retorne se ele é par ou ímpar. """


valor = int(input('Digite um número e descubra se é par ou ímpar: \n'))

def e_par_or_impar(element):
  if(element % 2 == 0): return print(f'{element} é par.')

  return print(f'{element} é ímpar.')

e_par_or_impar(valor)
