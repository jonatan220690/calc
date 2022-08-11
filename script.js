let numero1 = prompt('Digite o primeiro número')
let operacao = prompt('Digite uma operação (+, -, *, /)')
let numero2 = prompt('Digite o segundo número')
let resultado = 0
console.log(operacao)
console.log(numero1)
console.log(numero2)

if(operacao == "+" || operacao == "soma"){
    resultado = Number(numero1) + Number(numero2)
    alert(`A operação deu ${resultado}`)
}

if(operacao == "-" || operacao == "subtração"){
    resultado = Number(numero1) - Number(numero2)
    alert(`A operação deu ${resultado}`)
}
g
if(operacao == "*" || operacao == "multiplicação"){
    resultado = Number(numero1) * Number(numero2)
    alert(`A operação deu ${resultado}`)
}

if(operacao == "/" || operacao == "divisão"){
    resultado = Number(numero1) / Number(numero2)
    alert(`A operação deu ${resultado}`)
}
