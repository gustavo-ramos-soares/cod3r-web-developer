
//Variável global - 

{
    {
        {
            {
                {
                    var sera = 'Será??'
                    console.log(sera)
                }
            }
        }
    }
}
console.log(sera)

//---------------------------------------------//

//Variável no Escopo de função - 

function teste() {
    let local = 123
    console.log(local)
}

teste()
// console.log(local) // ERRO 
                   // Variável só acessa dentro do escopo da função



