def soma_numeros_pares():
  soma = 0

  for number in range(1, 101):
    if( number % 2 == 0): 
      soma += number

  print(f'O somátorio dos números pares de 01 a 100 é {soma}.')
  
soma_numeros_pares()