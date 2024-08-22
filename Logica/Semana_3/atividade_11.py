#Atividade 11: Cálculo de Área de Círculo

""" Desenvolva um programa que calcule a área de um círculo a partir do raio
fornecido pelo usuário."""

raio = int(input("Digite o valor do raio, em cm:\n"))

def area_circulo(raio):
  pi = 3.141592
  area = (raio ** 2) * pi
    
  print(f"A area do circulo é de {area}cm²")

area_circulo(raio)
  