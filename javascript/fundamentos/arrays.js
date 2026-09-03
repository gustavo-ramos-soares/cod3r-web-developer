
let marcasRoupas = ['Nike','Puma','Oakley','Vans','Volcom','New Balance']
console.log(marcasRoupas)


//Acessando um indicê específico
console.log(marcasRoupas[1])

//Acessando mais de um indicê
console.log(marcasRoupas[1], marcasRoupas[5] )

//Adicionando valor ao array 
marcasRoupas.push('adidas')
console.log(marcasRoupas)

//Adicionando valor ao array em indice específico
marcasRoupas[7] = 'Reserva'
console.log(marcasRoupas)

//Validar a quantidade de elementos dentro do array
console.log(marcasRoupas.length)

//Remover o último elemento do array
console.log(marcasRoupas.pop())
console.log(marcasRoupas)

delete marcasRoupas[1] //Remover elemento de um indice especifico
console.log(marcasRoupas)


// Observação:
console.log(typeof marcasRoupas) //Array é do tipo object
