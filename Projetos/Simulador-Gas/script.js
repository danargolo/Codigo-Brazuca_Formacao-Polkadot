document.getElementById('valor-transacao').addEventListener('input', function () {
  let value = this.value;
  let excecao = document.getElementById('excecao');

  if (value < 0) {
    excecao.textContent = 'O valor não pode ser negativo.';
    excecao.style.visibility = 'visible';
  } else {
    excecao.style.visibility = 'hidden';
  }
})

document.getElementById('calcular').addEventListener('click', function () {
  // Captura os valores inseridos pelo usuário
  let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
  let complexidade = document.getElementById('complexidade').value;
  let precoGas;
  // Definição de preço do gas por complexidade
  switch (complexidade) {
    case 'baixa':
      precoGas = 0.01;
      break;
    case 'media':
      precoGas = 0.05;
      break;
    case 'alta':
      precoGas = 0.1;
      break;
  }
  // Calcula o custo total do gas
  let custoGas = valorTransacao * precoGas;
  // Exibe o resultado
  if (valorTransacao > 0) {
    document.getElementById('resultado').innerHTML = `
  <p>Valor da Transação: ${valorTransacao} DOT</p>
  <p>Complexidade: ${complexidade.charAt(0).toUpperCase() +
      complexidade.slice(1)}</p>
  <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
  `;
  } else {
    document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira  um valor de transação válido.</p > ';
  }
});