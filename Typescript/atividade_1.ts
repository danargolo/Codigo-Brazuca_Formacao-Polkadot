let nome: string = "Alberto";
let idade: number = 34;
let hobbies: string[] = ["Culinária", "Ballet"];
let endereco: { cidade: string; estado: string } = { cidade: "Rio de Janeiro",
  estado: "RJ" };
let assinante: boolean = false;

console.log(`Nome: ${nome}, Idade: ${idade}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Endereço: ${endereco.cidade} - ${endereco.estado}`);
console.log(`Assinanre: ${assinante}`);
