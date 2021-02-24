const pets = [
    {
        nome: 'Mel',
        especie: 'cão',
        idade: 2,
        sexo: 'F',
        peso: 5.2
    },
    {
        nome: 'Paçoca',
        especie: 'gato',
        idade: 8,
        sexo: 'F',
        peso: 3.2
    },
    {
        nome: 'Cerberus',
        especie: 'cão',
        idade: 6,
        sexo: 'M',
        peso: 22
    },
    {
        nome: 'Matusalém',
        especie: 'tartaruga',
        idade: 102,
        sexo: 'M',
        peso: 30
    },
    {
        nome: 'Mingau',
        especie: 'gato',
        idade: 4,
        sexo: 'M',
        peso: 2.5
    },
    {
        nome: 'Paco',
        especie: 'papagaio',
        idade: 56,
        sexo: 'M',
        peso: 1
    }
]

// find(): encontra a primeira ocorrência que corresponde ao critério informado
//Retorna undefined quando não encontra nenhum elemento conincide
console.log(pets.find(elemento => elemento.peso > 10))
console.log(pets.find(pet => pet.idade < 4))
console.log(pets.find(pet => pet.especie === 'gato' && pet.sexo == 'M'))
console.log(pets.find(pet => pet.especie == 'calopsita'))

console.log('----------------------------------------------------------------------------------------')
// Soma(): retora true caso haja ALGUM elemento que corresponda ao critério ou false caso contrário
console.log(pets.some(pet => pet.nome === 'Cerberus'))
console.log(pets.some(pet => pet.especie === 'tartaruga' && pet.sexo === 'F'))

console.log('----------------------------------------------------------------------------------------')
//every(): retorna true caso todos os elementos correspondam ao critério ou false caso contrário
console.log(pets.every(pet => pet.especie === 'cão'))
console.log(pets.every(pet => pet.peso >= 1))

console.log('----------------------------------------------------------------------------------------')
// filter(): retorna um novo vetor contendo apenas os elementos que correspondem ao critério passado
console.log(pets.filter(x => x.especie ==='gato'))
console.log(pets.filter(x => x.idade > 20))
console.log(pets.filter(x => x.sexo ==='F' && x.especie === 'papagaio'))

console.log('----------------------------------------------------------------------------------------')
// map(): cria um novo vetor com o mesmo número de elementos do vetor original, correspondendo a algum tipo de transformação nos elementos originais
// Novo vetor contendo somente o nome dos animais, em maiúculas
console.log(pets.map(e => e.nome.toUpperCase()))

const numeros = [ 2, 6, -3, 9, 5, -7, 1, 4]
// Criando um novo vetor em que cada elemento corresponde ao elemento do vetor original ao quadrado
console.log(numeros.map(x => x ** 2))

// reduce(): reduz um vetor de valores a um único valor.
//Parametros:
// acumulador: resultado parcial até o momento
// valor atual: o resultado correspondente ao elemento atual, que integrará o acumulador

// soma
console.log(numeros.reduce((acum, val) => acum + val))

//Multiplicação
console.log(numeros.reduce((acum, val) => acum * val))

let p1 = 'Bom'
let p3 = 'galera!'
console.log([p1, ' dia, ', p3].reduce((a, v) => a + v))

console.log('----------------------------------------------------------------------------------------')

// Somar o peso de todos os pets - Exercício prático
// Abordagem 1: criando um vetor auxiliar contendo apenas os pesos dos pets
let pesos = pets.map(pet => pet.peso)
console.log(pesos)
console.log(pesos.reduce((acum, val) => acum + val))

// Abordagem 2: fazendo map() + reduce() em uma linha só
console.log(pets.map(pet => pet.peso).reduce((acum, val) => acum + val))

// Abordagem 3: reduce() com parâmetros extras
// 2º parâmetro do reduce(): valor inicial do acumulador
console.log(pets.reduce(( acum, val) => acum + val.peso, 0))

console.log('----------------------------------------------------------------------------------------')

// includes(): retorna true caso o vetor inclua o valor informado
console.log(numeros.includes(6))
console.log(numeros.includes(11))

// Deferença de some() e includes()
// some()-> recebe uma função para testar a exist^ncia de uma condição
// includes() -> recebe um valor simples (primitivo) para testar a existência



