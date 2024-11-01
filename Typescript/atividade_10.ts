function filtrarPrecosAltos(precos: number[], corte: number = 100): number[] {
  return precos
    .filter(preco => preco > corte)
    .map(preco => preco * 0.85); // APlica desconto de 15%
}

console.log(filtrarPrecosAltos([50, 150, 200, 30]));
console.log(filtrarPrecosAltos([50, 150, 200, 30], 40));
