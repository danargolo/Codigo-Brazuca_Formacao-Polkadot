input = int(input("Digite um limite de termos para sequência de Fibonacci:\n "))

def sequencia_fibonacci(n):
  seq = []
  a = 0
  b = 1
  for _ in range(n):
      seq.append(a)
      a, b = b, a + b
  return print(seq)

sequencia_fibonacci(input)
