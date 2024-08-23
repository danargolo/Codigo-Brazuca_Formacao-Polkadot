import re

def lista_numeros():
  lista = []

  numero = input('Digite um numero ou "fim" para encerrar:\n ')

  while numero.lower() != 'fim':
    if re.match(r'^-?\d+(\.\d+)?$', numero):
      lista.append(int(numero))
    else:
      print("Entrada inválida. Por favor, digite um número válido ou 'fim' para encerrar.")

    numero = input('Digite um numero ou "fim" para encerrar:\n ')

  return lista

def calcula_max_min_med(lista):
  if not lista:
    print("Nenhum número foi inserido.")
    return

  maior = max(lista)
  menor = min(lista)
  media = sum(lista) / len(lista)

  print(f"O maior número é: {maior}")
  print(f"O menor número é: {menor}")
  print(f"A média dos números é: {media:.2f}")

lista = lista_numeros()

calcula_max_min_med(lista)
