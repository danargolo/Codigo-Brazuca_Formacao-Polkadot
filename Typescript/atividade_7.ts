function formatarEntrada(valor: string | number | boolean): string | number {
  const tipo = typeof valor;

  const formatador: { [key: string]: (v: any) => string | number } = {
    string: (v) => v.toUpperCase(),
    number: (v) => v * 10,
    boolean: (v) => v.toString()
  };

  return formatador[tipo](valor);
}

console.log(formatarEntrada("typescript"));
console.log(formatarEntrada(5));
console.log(formatarEntrada(true));
console.log(formatarEntrada(false)); 


