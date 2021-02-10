let nome = "João"
let idade = 26

// mensagem usando a concatenação
console.log('Meu nome é' + nome + 'e minha idade é' + idade + '.')

// mensagem usando Template Literals
console.log(`Meu nome é ${nome} e minha idade é ${idade}.`)
console.log(`Meu nome é ${nome.toUpperCase()} e minha idade é ${idade}.`)
console.log(`7 vezes 6 é igual a ${7 * 6}.`)

// Tentando usar tamplate literals com outro tipo de aspas
console.log('Meu nome é ${nome} e minha idade é ${idade}.')