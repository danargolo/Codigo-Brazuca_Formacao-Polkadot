programa {
  funcao inicio() {
    inteiro num, counter = 0

		para(inteiro i = 1; i <= 5; i++) {
			escreva("Digite o ", i, " número: ")
			leia(num)

			se (num > 0) {
				counter++
			}

			escreva("Você digitou ", counter, " números positivos.\n")
		}
  }
}
