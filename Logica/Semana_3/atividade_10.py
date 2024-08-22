#Atividade 10: Números Pares e Ímpares

""" Escreva um programa que peça ao usuário um número inteiro e informe se ele é
par ou ímpar."""

numero = int(input("Digite um número:\n"))

def eh_par_ou_impar(num):
  if(num % 2 != 0):
    return print(f"Número {num} é ímpar.")
  
  return print(f"Número {num} é par.")

eh_par_ou_impar(numero)