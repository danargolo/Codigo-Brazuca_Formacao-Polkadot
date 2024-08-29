programa {
  funcao inicio() {
    inteiro year

		escreva("Digite o ano:")
		leia(year)

		se ((year % 4 == 0) e (year % 100 != 0) ou (year % 400 == 0)) {
			escreva(year, " é um ano bissexto.")
		} 
    senao {
			escreva(year, " não é um ano bissexto.")
		}
  }
}
