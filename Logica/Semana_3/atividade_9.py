def ordenacao_cresc():
  lista = []

  for _ in range(3):
    numero = int(input("Adicione um número à lista:\n"))
    lista.append(numero)

  for i in range(len(lista)):
    for j in range(len(lista) - i - 1):
      if lista[j] > lista[j + 1]:
        lista[j], lista[j + 1] = lista[j + 1], lista[j]
  
  print(lista)

ordenacao_cresc()