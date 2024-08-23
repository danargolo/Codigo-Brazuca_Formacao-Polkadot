start = int(input('Defina o início do intervalo:\n'))
end = int(input('Defina o final do intervalo:\n'))

def is_prime(num):
  if num <= 1:
    return False
  for i in range(2, (int(num ** 0.5) + 1)):
      if num % i == 0:
        return False
  return True

def is_digit_sum_odd(num):
  digit_sum = 0
  for digit in str(num):
    digit_sum += int(digit)
  return digit_sum % 2 != 0

def find_magic_number(start, end):
  for number in range(start, end + 1):
    if number % 4 != 0:
      continue

    if not is_prime(number):
      continue

    if not is_digit_sum_odd(number):
      continue

    return print(f'O número mágico é {number}.')
  
  return print('Nenhum número mágico foi encontrado no intervalo.')

find_magic_number(start, end)  