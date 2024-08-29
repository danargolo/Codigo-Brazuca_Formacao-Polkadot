programa {
  funcao inicio() {
    inteiro num

    escreva("Digite um numero para iniciar contagem regressiva: ")
    leia(num)

    para(inteiro i = num; i >= 0; i--) {
      escreva(i, "\n")
    }
    escreva("Contagem regressiva completa")
  }
}
