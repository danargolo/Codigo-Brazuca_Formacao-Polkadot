def calculadora_medias():
  notas = []

  nota = float(input("Digite uma nota ou -1 para encerrar:\n "))

  while nota != -1:

    while nota < 0 or nota > 10:
      nota = float(input("Nota inválida! Digite uma nota de 0 a 10:\n "))

    notas.append(nota)
    nota = float(input("Digite uma nota ou -1 para encerrar:\n "))

  if not notas:
    return print("Nenhuma nota válida foi inserida.")
  
  media_notas = sum(notas) / len(notas)

  print(f"Foram adicionadas {len(notas)} e a média das notas é:{media_notas:.1f}.")

calculadora_medias()