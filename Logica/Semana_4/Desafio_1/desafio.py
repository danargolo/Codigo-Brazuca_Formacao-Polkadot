start = int(input('Defina o início do intervalo:\n'))
end = int(input('Defina o final do intervalo:\n'))

def total_sum(start, end):
  sum = 0
  for number in range(start, end + 1):
    if number % 3 == 0 and number % 5 == 0:
      continue

    if number % 3 == 0:
      sum += number
    
    if number % 5 == 0:
      sum -= number

  return print(f'O valor total calculado é {sum}')

total_sum(start, end)

