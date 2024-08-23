input = input("Digite uma palavra ou frase:\n")

def eh_palindromo(texto):
  t = "".join(texto.split()).lower()

  for index in range(len(t) ):
    if t[index] != t[(len(t) - index - 1)]:
      return print("Não é um palíndromo")
  
  return print(f"{texto} é um palíndromo")

eh_palindromo(input)