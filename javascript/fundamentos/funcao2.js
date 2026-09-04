//Armazenando uma funcao em uma variavel
const imprimirSomar = function (a,b){
    console.log(a+b)
}

imprimirSomar(10,5)

//Armazenando uma funcao arrow em uma variável
const soma = (a,b) => {
    return a + b
}

console.log(soma(10,1))

//Retorno implícito
const subtracao = (a,b) => a - b 
console.log(subtracao(10,5))