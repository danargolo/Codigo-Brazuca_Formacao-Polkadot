frase = input("Digite uma frase ou palavra:")

def contador_vogais(texto):
  vogais = {
    "a": 0,
    "e": 0,
    "i": 0,
    "o": 0, 
    "u": 0,
  }

  for letra in texto:
    if letra in vogais:
      vogais[letra] += 1

  return print(f"{texto} contem {vogais}")

contador_vogais(frase)