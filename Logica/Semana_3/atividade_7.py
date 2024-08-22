#Atividade 7: Média de Notas

""" Desenvolva um programa que calcule a média de várias notas inseridas pelo
usuário. O programa deve parar de pedir notas quando o usuário digitar -1. """


def calculadora_medias():
  notas = []

  nota = float(input("Digite uma nota ou -1 para encerrar:\n "))

  while nota != -1:
    if nota < 0 or nota > 10:
      print("Nota inválida! Digite uma nota entre 0 e 10.")
      break
    notas.append(nota)
    nota = float(input("Digite uma nota ou -1 para encerrar:\n "))

  if not notas:
    return print("Nenhuma nota válida foi inserida.")
  
  media_notas = sum(notas) / len(notas)

  print(f'Foram adicionadas {len(notas)} e a média das notas é: {media_notas:.1f}')

calculadora_medias()