function saudacao(nome: string = "Anon", idade?: number, cidade?: string, profissao?: string): string {
  if (idade && cidade && profissao) {
      return `Olá, ${nome}! Você tem ${idade} anos, mora em ${cidade} e trabalha como ${profissao}.`;
  } else if (idade && cidade) {
      return `Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`;
  } else if (idade && profissao) {
      return `Olá, ${nome}! Você tem ${idade} anos e trabalha como ${profissao}.`;
  } else if (cidade && profissao) {
    return `Olá, ${nome}! Você mora em ${cidade} e trabalha como ${profissao}.`;
  } else if (idade) {
      return `Olá, ${nome}! Você tem ${idade} anos.`;
  } else if (cidade) {
      return `Olá, ${nome}! Você mora em ${cidade}.`;
  } else if (profissao) {
      return `Olá, ${nome}! Você trabalha como ${profissao}.`;
  } else {
      return `Olá, ${nome}!`;
  }
}

console.log(saudacao());
console.log(saudacao("Alice"));
console.log(saudacao("Bob", 30));
console.log(saudacao("Carol", 25, "São Paulo"));
console.log(saudacao("Dan", 40, "Rio de Janeiro", "Engenheiro"));
console.log(saudacao("Eve", undefined, "Curitiba", "Professora"));
