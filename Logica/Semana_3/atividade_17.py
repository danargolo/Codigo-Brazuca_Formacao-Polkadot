numero = int(input("Digite um número para verificar se é perfeito:\n"))

def eh_numero_perfeito(num):
  soma = 0
    
  for i in range(1, num):
    if num % i == 0:
      soma += i
    
  if soma != num:
    return False
  
  print(f"{num} é um número perfeito!")
  return True

# eh_numero_perfeito(numero)

def lista_numeros_perfeitos(numero):
  numeros_perfeitos = []
    
  for num in range(1, numero):
      if eh_numero_perfeito(num):
          numeros_perfeitos.append(num)
  return print(f"Números perfeitos até {numero}: {numeros_perfeitos}")

lista_numeros_perfeitos(numero)


