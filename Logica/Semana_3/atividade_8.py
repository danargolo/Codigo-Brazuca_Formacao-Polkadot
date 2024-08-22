#Atividade 8: Sequência de Fibonacci

""" Escreva um programa que mostre os primeiros n números da sequência de
Fibonacci, onde n é informado pelo usuário."""

input = int(input("Digite um limite de termos para sequência de Fibonacci:\n "))

def sequencia_fibonacci(n):
  seq = []
  a = 0
  b = 1
  for _ in range(n):
      seq.append(a)
      a, b = b, a + b
  return print(seq)

sequencia_fibonacci(input)
