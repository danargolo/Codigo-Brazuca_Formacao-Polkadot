def calcular_fatorial(valor):

  if(valor <= 1): return 1

  return valor * calcular_fatorial(valor - 1)

resultado = calcular_fatorial(5)

print(f"O fatorial de 5 é {resultado}")