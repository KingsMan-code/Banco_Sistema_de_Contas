//nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

const time = args[2].split('=')[1]

console.log(time)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos torço para o ${time}!`)


