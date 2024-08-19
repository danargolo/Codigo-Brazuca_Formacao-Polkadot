# Atividade 3: Operações Matemáticas Simples

""" Escreva um programa que peça dois números ao usuário e exiba a soma, subtração,
multiplicação e divisão deles. """


valor_1 = int(input('Digite um número: '))
valor_2 = int(input('Digite um número: '))

def calculadora(a, b):
  soma = a + b
  subtracao = a - b
  multiplicacao = a * b
  divisao = a / b

  print(f'{a} + {b} = {soma}')
  print(f'{a} - {b} = {subtracao}')
  print(f'{a} * {b} = {multiplicacao}')
  print(f'{a} / {b} = {divisao}')

calculadora(valor_1, valor_2)