# Atividade 7: Trabalhando com Listas

""" Crie uma lista de compras que permita ao usuário adicionar itens e, em seguida,
imprimir a lista completa. """


def lista_compras():
  lista = []

  item = input('Digite o item a ser adicionado à lista.\n')

  while item != 'fim':
    lista.append(item)
    item = input('Adicionar novo item \nou digite fim para encerrar:\n')

  for element in lista:
    print(f'Produto: {element}')

  return print(lista)

lista_compras()