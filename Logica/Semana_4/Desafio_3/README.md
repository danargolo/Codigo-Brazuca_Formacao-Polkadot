# Desafio 3 - Bingo da Adivinhação na Rede Polkadot

## Objetivo
  Desenvolver um programa em Python que simule um jogo de bingo. Neste caso, a
cartela representa uma carteira de DOT, e você precisará adivinhar os números para completar
a transferência segura.

## Regras do Desafio:
1. O programa deverá gerar uma cartela de bingo para você, composta por 5 números aleatórios diferentes entre 1 e 75.
2. O computador sorteará números aleatórios, um de cada vez.
3. Você deverá adivinhar quais números foram sorteados.
4. Se você acertar um número, ele será marcado na cartela (removido da lista).
5. O jogo continua até que você complete todos os números da cartela.
6. O programa deverá contar e exibir o número total de sorteios necessários para completar a cartela.

## Explicação do Código
<details>
  <summary>Imagem</summary>
  <img src="images/code1.png" alt="Print do primeiro bloco de código.">
</details>

- `generate_bingo_card()`:
  - `card = list()`: Cria uma lista vazia para armazenar os números da cartela.
  - `NUMBER_LIMIT = 5`: Constante que define a quantidade máxima de números que a cartela terá.
  - ` while len(card) < NUMBER_LIMIT`: O loop continua enquanto a quantidade de elementos na lista card for menor que o limite definido.
  - `random_number = random.randint(1,75)`: Um número aleatório entre 1 e 75 é gerado utilizando a função random.randint().
  - `if random_number not in card`: Antes de adicionar o número à cartela, verifica-se se ele já existe na lista.
  - `card.append(random_number)`: Se o número não estiver na lista, ele é adicionado ao final da lista card utilizando o método append().







