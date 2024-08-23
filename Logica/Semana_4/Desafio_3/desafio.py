import random

def generate_bingo_card():
  card = list()
  NUMBER_LIMIT = 5

  while len(card) < NUMBER_LIMIT:
    card.append(random.randint(1,75))
  
  return card

def play_bingo(card):
  numbers = list(range(1, 76))
  round_counter = 0
  print(f'Sua cartela: {card}!')

  while card:
    drawn_number = random.choice(numbers)
    numbers.remove(drawn_number)
    print(f'Número sorteado: {drawn_number}!')
    round_counter += 1

    if drawn_number in card:
      card.remove(drawn_number)

      if not card: 
        return print(f'BINGO!!! Você marcou o número {drawn_number} e completou a cartela em {round_counter} sorteios!')     
       
      print(f'Parabéns! Você marcou o número {drawn_number}! Números restantes: {card}')

bingo_card = generate_bingo_card()

play_bingo(bingo_card)
