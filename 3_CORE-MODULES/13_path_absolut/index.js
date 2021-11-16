const path = require("path")

// path absoluto
console.log(path.resolve('teste.txt'))

//formarpath

const midFolder = "relatorios"
const fileName = "matheus.txt"

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)