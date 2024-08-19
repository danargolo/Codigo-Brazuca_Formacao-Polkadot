#Atividade 10: Números Primos

""" Crie um programa que encontre e imprima todos os números primos em um intervalo
definido pelo usuário.
"""

inicio = int(input("Digite um número para inicio do intervalo:\n"))
fim = int(input("Digite um número para término do intervalo:\n"))

def e_primo(num):
  if(num <= 1):
     return False
  for i in range(2, (int(num ** 0.5) + 1)):
      if(num % i == 0):
        return False
  return True

def listar_primos(inicial, final):
    lista_primos = []

    for numero in range(inicial,(final +1)):
      if(e_primo(numero)):
         lista_primos.append(numero)

    return print(f"Os números primos entre {inicio} e {fim} são: {lista_primos}")


listar_primos(inicio, fim)
