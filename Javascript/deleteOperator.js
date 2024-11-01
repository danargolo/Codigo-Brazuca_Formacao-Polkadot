const string = "danilo"
age = 41

console.log(globalThis)
console.log(delete string)
console.log(delete age)
console.log(globalThis)

/* O operator delete remove uma propriedade do objeto. 
Neste caso, irá retornar um boolean:
FALSE na string, visto que não possui propriedade. 
E no caso abaixo TRUE, pois age é adicionada ao global Object e posteriormente é removida pelo delete. */