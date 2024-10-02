let a = 10
let b = 0
let response = ""
for( var i =0; i<10;i++){
  response += (a-i) + ","
}
response +=b

let teste = [...Array(11).keys()].reverse().join(",")

console.log(response === [...Array(11).keys()].reverse().join(","))
console.log(response === [...Array(10).keys()].reverse().join(","))

console.log(typeof response)
console.log(typeof teste)
