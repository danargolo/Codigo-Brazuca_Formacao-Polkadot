input = int(input("Digite um número e descubra sua tabuada:\n"))

def tabuada(numero):

  for multiplicador in range(1,11):
    print(f"{numero} x {multiplicador} = {numero * multiplicador}")


tabuada(input)

