a = float(input("Digite primeira nota com peso 2:\n "))
b = float(input("Digite segunda nota com peso 3:\n "))
c = float(input("Digite terceira nota com peso 5:\n "))

def calcula_med_ponderada(nota1, nota2, nota3):
  PESO_2 = 2
  PESO_3 = 3
  PESO_5 = 5

  soma_produtos = (nota1 * PESO_2) + (nota2 * PESO_3) + (nota3 * PESO_5)

  media_ponderada = soma_produtos / sum((PESO_2, PESO_3, PESO_5))

  return print(f"A média ponderada das notas é: {media_ponderada:.1f}.")

calcula_med_ponderada(a, b, c)
