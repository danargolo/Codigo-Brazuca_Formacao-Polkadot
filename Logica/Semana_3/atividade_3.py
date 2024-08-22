#Atividade 3: Cálculo de IMC

""" Escreva um programa que peça o peso e a altura de uma pessoa e calcule seu
Índice de Massa Corporal (IMC)."""

peso = float(input("Digite o seu peso em kg:\n"))
altura = float(input("Digite a sua altura em m:\n"))

def calculadora_imc(peso, altura):
  imc = peso / altura ** 2

  return print(f"Seu IMC é {imc:.2f}")

calculadora_imc(peso, altura)