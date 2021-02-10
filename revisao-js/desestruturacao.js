let vetor = [10, 20, 30]

let obj = {
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

// Desestruturaçã de vetor: as variáveis do let podem ter qualquer número, por que a posição do vetor é por número.
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

// Desestruração de objetos: as variáveis do let DVEM ter os menos nomes das propriedades e não importa a ordem
let {naturalidade, nome, idade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}

//Desestruturação parcial de um objeto
let {modelo, ano} = obj2
console.log(modelo)
console.log(ano)

let vet2 = ['laranja', 'maça', 'pera']
// Não dá certo: desestruturação parcial de vetor
// let[undenfined, fruta2, undefined] = vet2
// console.log(fruta2)

// Ignorando os últimos elementos
let[fruta1 , fruta2] = vet2
console.log(fruta1)
console.log(fruta2)

// Ignorando o primeiro elemento (deixe uma virgula na posição a ignorar)
let[, f2, f3] = vet2
console.log(f2)
console.log(f3)


//let {naturalidade: cidade, nome: pessoa, idade: anos} = obj
//console.log(pessoa)
//console.log(cidade)
//console.log(anos)