
// Função sem parâmetro

function dizerOi (){
    console.log('Olá, mundo!')
}

//-------------------------------------//


// Função com parâmetro

function saudacao (nome){
    console.log(`Olá, ${nome}`)
    console.log(nome)
}

saudacao("Daniel");

//-------------------------------------//


// Função sem Return

function soma(a,b){
    console.log(a + b)
}

soma(10,5)

//-------------------------------------//


// Função com Return

function soma(a,b){
    return a + b
}

const resultado = soma(10,10)

console.log(resultado)


// Função com arrow

let texto = (name) => {
    console.log(`Olá, ${name}`)
    console.log(name)
}

texto("Gu");