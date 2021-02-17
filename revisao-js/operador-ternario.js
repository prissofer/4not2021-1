let nota = 7.2
let situacao

/*if(nota>= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/

/* if(nota>= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

// As três partes do operador ternário:
// 1ª parte: condição (que iria depois do if)
// Entre a 1º e 2ª parte -> ?
// 2º parte: o resultado, caso a consição seja VERDADEIRA
// entre a 2ª e 3º partes -> :
// 3ª parte: o resultado, caso a condição seja FALSA
nota = 5.3

situacao = (nota >= 6 ? 'APROVADO' : 'REPROVADO')

console.log(situacao)


let user = 'Priscila'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'
console.log(userType)



