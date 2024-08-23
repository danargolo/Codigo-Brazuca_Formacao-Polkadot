texto = input("Digite um texto ou palavra que deseja inverter:\n")

def inverter_string(string):

  string_invertida = ""

  for caractere in string:
    string_invertida = caractere + string_invertida

  print(string_invertida)

inverter_string(texto)