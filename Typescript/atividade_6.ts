function buscarDados(urgencia: "alta" | "media" | "baixa"): Promise<string> {
  const tempoResposta = {
    "alta": 500,
    "media": 2000,
    "baixa": 5000
  }[urgencia];

  return new Promise(resolve => {
    setTimeout(() => resolve(`Dados carregados com urgência ${urgencia} (demora: ${tempoResposta}ms)`), tempoResposta);
  });
}

async function exibirDados() {
  const dadosAlto = await buscarDados("alta");
  console.log(dadosAlto);

  const dadosMedio = await buscarDados("media");
  console.log(dadosMedio);

  const dadosBaixo = await buscarDados("baixa");
  console.log(dadosBaixo);
}

exibirDados();
