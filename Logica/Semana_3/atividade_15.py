num = int(input("Digite um número: "))

def somatorio_num_naturais():
  resultado = 0
  for i in range(num + 1):
      resultado += i

  print(f"O somatório dos primeiros {num} números naturais é {resultado}.")

somatorio_num_naturais()