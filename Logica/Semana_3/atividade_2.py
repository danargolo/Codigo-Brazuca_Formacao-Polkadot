input = float(input('Qual a temperatura em °C?\n'))

def conversor_temperatura(celsius):
  kelvin = celsius + 273.15

  fahrenheit = (celsius * 1.8) + 32


  print(f"A temperatura em Fahrenheit é {fahrenheit:.1f}°F")
  print(f"A temperatura em Kelvin é {kelvin:.1f}K")


conversor_temperatura(input)