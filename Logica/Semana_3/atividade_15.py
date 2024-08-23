#Atividade 15: Soma dos N primeiros Números

""" Escreva um programa que peça ao usuário um número n e calcule a soma dos
primeiros n números naturais."""

num = int(input("Digite um número: "))

def somatorio_num_naturais():
  resultado = 0
  for i in range(num + 1):
      resultado += i

  print(f"O somatório dos primeiros {num} números naturais é {resultado}.")

somatorio_num_naturais()