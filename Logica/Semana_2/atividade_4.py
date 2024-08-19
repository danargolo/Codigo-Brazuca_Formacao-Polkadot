# Atividade 4: Estruturas Condicionais

""" Escreva um programa que peça a temperatura atual e diga se está quente (acima de
30°C), frio (abaixo de 15°C) ou agradável (entre 15°C e 30°C). """

def avaliador_temperatura():
  MINIMA = 15
  MAXIMA = 30
  temperatura_atual = float(input('Qual é a temperatura local no momento? '))

  if(temperatura_atual < MINIMA): return print('Clima Frio')
  if(temperatura_atual > MAXIMA): return print('Clima Quente')

  return print('Clima agradável')

avaliador_temperatura()