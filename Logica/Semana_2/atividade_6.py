# Atividade 6: Somatório com While

""" Crie um programa que pergunte ao usuário por números até que ele digite zero e
então mostre a soma dos números digitados. """

def somatorio():
  soma = 0

  valor = int(input('Digite o valor a ser somado: '))

  while valor != 0:
    soma += valor
    valor = int(input('Digite o valor a ser somado. Digite 0 para encerrar: '))

  return print(f'O somátorio é igual a {soma}.')

somatorio()