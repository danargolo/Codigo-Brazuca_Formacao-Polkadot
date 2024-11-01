enum DiasSemana {
  Segunda = "Segunda-feira",
  Terca = "Terça-feira",
  Quarta = "Quarta-feira",
  Quinta = "Quinta-feira",
  Sexta = "Sexta-feira",
  Sabado = "Sábado",
  Domingo = "Domingo",
}

enum Feriados {
  Natal = "Natal",
  AnoNovo = "Ano Novo",
  Independencia = "Independencia",
}

function ehFimDeSemana(dia: DiasSemana | Feriados): boolean {
  const finaisDeSemana = [DiasSemana.Sabado, DiasSemana.Domingo];

  if (finaisDeSemana.includes(dia as DiasSemana)) {
    return true;
  }
  return Object.values(Feriados).includes(dia as Feriados);
}

console.log(ehFimDeSemana(DiasSemana.Domingo));
console.log(ehFimDeSemana(DiasSemana.Quinta));
console.log(ehFimDeSemana(Feriados.AnoNovo));  
console.log(ehFimDeSemana(DiasSemana.Sabado)); 
console.log(ehFimDeSemana(Feriados.Independencia));
