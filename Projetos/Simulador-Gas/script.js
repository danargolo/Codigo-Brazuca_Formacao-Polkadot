let contador = 0;
let historicoTimeout;

let divMoeda = document.getElementById('selecao-moeda');
let moedaButtons = document.getElementsByClassName('moeda-btn');
let contadorDisplay = document.getElementById('id_transacao');
let historicoLista = document.getElementById('historico-lista');
let temporizador = document.getElementById('temporizador');
const excecao = document.getElementById('excecao');
const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');  


function incrementarContador () {
  contador += 1;

  contadorDisplay.textContent = `# ${contador}`;
};

function adicionaHistorico (valorTransacao, complexidade) {

  let li = document.createElement('li');
  li.textContent = `Valor: ${valorTransacao} DOT, Complexidade: ${complexidade}, valor gas?`;

  historicoLista.appendChild(li);

}

function limparHistorico() {
  historicoLista.innerHTML = '';
  contador = 0;
  contadorDisplay.textContent = `# ${contador}`;
  console.log('O histórico foi limpo automaticamente.');
}


function validarValor(value) {
  if (+value < 0) {
      excecao.textContent = 'O valor não pode ser negativo.';
      excecao.style.visibility = 'visible';
      btnCalcular.disabled = true;
  } else if (+value === 0 || isNaN(+value)) {  
      excecao.textContent = 'O valor não pode ser zero ou inválido.';
      excecao.style.visibility = 'visible';
      btnCalcular.disabled = true;
    } else {
      excecao.style.visibility = 'hidden';
      btnCalcular.disabled = false;
    }
  }
  
  document.getElementById('valor-transacao').addEventListener('input', function () {
    validarValor(this.value);
  });

  document.getElementById('seletor-btn').addEventListener('click', function () {
    
  if (divMoeda.style.display === 'block') {
    divMoeda.style.display = 'none';
  } else {
    divMoeda.style.display = 'block';
  }
})

for (let i = 0; i < moedaButtons.length; i++) {
  moedaButtons[i].addEventListener('click', function () {
    document.getElementById('seletor-btn').textContent = moedaButtons[i].textContent;
    divMoeda.style.display = 'none';
  });
}

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
  // if (valorTransacao > 0) {
  //   document.getElementById('resultado').innerHTML = `
  // <p>Valor da Transação: ${valorTransacao} DOT</p>
  // <p>Complexidade: ${complexidade.charAt(0).toUpperCase() +
  //     complexidade.slice(1)}</p>
  // <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
  // `;
  // } else {
  //   document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira  um valor de transação válido.</p > ';
  // }
  document.getElementById('valor-transacao').value = undefined
  adicionaHistorico(valorTransacao, complexidade)
  incrementarContador();

  this.disabled = true;
});


function openTab(evt, tabName) {  

  let tabContents = document.getElementsByClassName('tab-conteudo');
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  document.getElementById(tabName).style.display = 'block';

  let tabButtons = document.getElementsByClassName('tab-btn');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace('active', '');
  }

  evt.currentTarget.className += 'active';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.tab-btn').click();
  
});
