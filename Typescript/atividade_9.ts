function reverterArray<T>(items: T[]): T[] {
  const grupo: {[key:string]: T[]} = {};

  items.forEach(item => {
    const tipo = typeof item;
    if (!grupo[tipo]) {
      grupo[tipo] = [];
    }
    grupo[tipo].push(item)
  })
  const agrupados: T[] = Object.values(grupo).reduce((acc, grupo) => acc.concat(grupo), []);

  return agrupados.reverse();
  }
  console.log(reverterArray([1, 2, 3])); // [3, 2, 1]
  console.log(reverterArray(["a", "b", "c"])); // ["c", "b", "a"]
  console.log(reverterArray([1, 2, "a", "b", true, 3, 6, "g", false])); 
