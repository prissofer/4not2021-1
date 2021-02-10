// Criando um objeto cujo valor das proriedades vem de variáveis

let usuario = 'joao'
let senha = 'Deus123'
let name = 'João das Couves'
let lastLogin = '2021-02-08 22:49:28'

let userInfo  = {
    login: usuario,
    password: senha,
    name,  // Propriedade abreviada (name: name)
    lastLogin  // (lastLogin : lastLogin)
}

console.log(userInfo)

// Usamos para depurar a proriedade abreviada quando precisamos de qual variável está vindo a informação

let info = 'Isto é um teste'

console.log(info)
console.log({info})