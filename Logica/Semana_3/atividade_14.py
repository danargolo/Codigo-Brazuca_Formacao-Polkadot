#Atividade 14: Calculadora Simples

""" Crie um programa que funcione como uma calculadora simples, pedindo ao
usuário dois números e a operação que deseja realizar."""

def soma(a, b):
  return a + b

def subtracao(a, b):
  return a - b

def multiplicacao(a, b):
  return a * b

def divisao(a, b): 
  return a / b

def calculadora():   
  num1 = float(input("Digite o primeiro número:\n"))
  num2 = float(input("Digite o segundo número:\n"))

  operacoes = {
      '+': soma,
      '-': subtracao,
      '*': multiplicacao,
      '/': divisao
  }

  operacao = input("Digite a operação desejada +, -, *, /:\n")

  while operacao not in operacoes:
    print("Operação inválida.")
    operacao = input("Por favor, escolha operação entre +, -, *, ou /:\n")
  
  if(num2 == 0 and operacao == '/'):
    return print("Divisão por zero não é permitida.")

  resultado = operacoes[operacao](num1, num2)
  print(f"Resultado: {num1} {operacao} {num2} = {resultado}")

calculadora()
