import { fiatCurrencies } from "./fiatCurrencies.json";
let contador = 0;
let historicoTimeout;
let temporizadorId;

let divMoeda = document.getElementById("modal-moeda");
let fiat = document.getElementById("seletor-btn");
let contadorDisplay = document.getElementById("id_transacao");
let historicoLista = document.getElementById("historico-lista");
let temporizador = document.getElementById("temporizador");
const excecao = document.getElementById("excecao");
const btnCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const inputTransacao = document.getElementById("valor-transacao");
const moedasContainer = document.getElementById("moedas-container");
// const cachedData = localStorage.getItem(fiat.textContent.trim())
const tabs = document.getElementsByClassName("tab-btn");
const tabContents = document.getElementsByClassName("tab-conteudo");

let result = document.getElementById("result-transacao");
let resultComplexidade = document.getElementById("result-complexidade");
let resultDot = document.getElementById("result-dot-estimado");
let resultCur = document.getElementById("result_currency");
let resultMoeda = document.getElementById("result-preco-estimado");

async function fetchCryptocurrencies(fiat) {
  const url = "http://localhost:5000/dot-exchange";

  const cachedData = localStorage.getItem(fiat);

  if (cachedData) {
    console.log("Dados carregados do cache");
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fiat }),
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    localStorage.setItem(fiat, JSON.stringify(data.data));

    return data.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

function incrementarContador() {
  contador += 1;

  contadorDisplay.textContent = `# ${contador}`;
}

function adicionaHistorico(valor, complexidade, valorTransacao, valorCurrency) {
  let li = document.createElement("li");
  li.textContent = `Valor: ${valor} Complexidade: ${complexidade}, valor gas dot: ${valorTransacao}, valor gas: ${valorCurrency}`;

  historicoLista.appendChild(li);
}

function limparHistorico() {
  historicoLista.innerHTML = "";
  contador = 0;
  contadorDisplay.textContent = `# ${contador}`;
  console.log("O histórico foi limpo automaticamente.");
}

const segments = ["seg-0","seg-1", "seg-2", "seg-3", "seg-4", "seg-5"];
// let countdownInterval;

function resetSegments() {
  segments.forEach((seg) => {
    document.getElementById(seg).style.opacity = "1";
  });
  // index = 0;
}

function startCountdown() {
  let index = 0;

  let countdownInterval = setInterval(() => {
    if (index < segments.length) {
      console.log(index);
      document.getElementById(segments[index]).style.opacity = "0";
      index++;
      
    } else {
      clearInterval(countdownInterval);
      // setTimeout(() => {
        
      // }, 100);
    }
  }, (60 / segments.length + 0.1) * 1000);
}

function validarValor(value) {
  if (+value < 0) {
    excecao.textContent = "O valor não pode ser negativo.";
    excecao.style.visibility = "visible";
    btnCalcular.disabled = true;
  } else if (+value === 0 || isNaN(+value)) {
    excecao.textContent = "O valor não pode ser zero ou inválido.";
    excecao.style.visibility = "visible";
    btnCalcular.disabled = true;
  } else {
    excecao.style.visibility = "hidden";
    btnCalcular.disabled = false;
  }
}

function renderFiatCurrencies() {
  moedasContainer.innerHTML = "";

  fiatCurrencies.forEach((currency) => {
    const currencyElement = document.createElement("button");
    currencyElement.classList.add("moeda-btn");
    currencyElement.textContent = currency.code;
    moedasContainer.appendChild(currencyElement);
  });
}

function iniciarTemporizador(duracao) {
  let tempoRestante = duracao;

  if (temporizadorId) {
    return;
  }

  temporizadorId = setInterval(function () {
    temporizador.textContent = String(tempoRestante).padStart(2, '0');

    if (tempoRestante <= 0) {
      clearInterval(temporizadorId);
      temporizadorId = null;
      temporizador.textContent = "60";
      resetSegments();
      limparHistorico();
    }

    tempoRestante--;
  }, 1000);
}

document
  .getElementById("valor-transacao")
  .addEventListener("input", function () {
    validarValor(this.value);
  });

document.getElementById("seletor-btn").addEventListener("click", function () {
  if (divMoeda.style.display === "block") {
    divMoeda.style.display = "none";
  } else {
    divMoeda.style.display = "block";
  }
});

divMoeda.addEventListener("click", function (e) {
  if (e.target === divMoeda) {
    divMoeda.style.display = "none";
  }
});

document
  .getElementById("calcular")
  .addEventListener("click", async function () {
    let valorMoeda = await fetchCryptocurrencies(fiat.textContent.trim());

    const fiatValue = fiat.textContent.trim();
    const price = valorMoeda.quote[fiatValue].price;

    let valorTransacao = document.getElementById("valor-transacao").value;

    let complexidade = document.getElementById("complexidade").value;

    let precoGas;
    switch (complexidade) {
      case "baixa":
        precoGas = 0.01;
        break;
      case "media":
        precoGas = 0.05;
        break;
      case "alta":
        precoGas = 0.1;
        break;
    }
    // Calcula o custo total do gas
    let custoGasDot = (valorTransacao * precoGas).toFixed(2);
    let custoGasCur = (custoGasDot * price).toFixed(2);

    resultMoeda.textContent = `${fiat.textContent.trim()}: ${custoGasCur}`;

    result.textContent = valorTransacao;
    resultComplexidade.textContent = complexidade;
    resultDot.textContent = custoGasDot;

    adicionaHistorico(valorTransacao, complexidade, custoGasDot, custoGasCur);
    document.getElementById("valor-transacao").value = "";
    document.getElementById("complexidade").value = "baixa";
    incrementarContador();

    iniciarTemporizador(60);
    startCountdown();

    this.disabled = true;
  });

function openTab(evt) {
  const tabName = evt.currentTarget.getAttribute("data-tab");

  for (let content of tabContents) {
    content.style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";

  for (let tab of tabs) {
    tab.className = tab.className.replace(" active", "");
  }

  evt.currentTarget.className += " active";
}

for (let tab of tabs) {
  tab.addEventListener("click", openTab);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-btn").click();
  renderFiatCurrencies();

  const moedaButtons = document.querySelectorAll(".moeda-btn");

  for (let button of moedaButtons) {
    button.addEventListener("click", function () {
      document.getElementById("seletor-btn").textContent = button.textContent;
      divMoeda.style.display = "none";
    });
  }

  fetch("./assets/polkadot-logo.svg")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("svg-countdown").innerHTML = data;
    })
    .catch((error) => console.error(error));
});
