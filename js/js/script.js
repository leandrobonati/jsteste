var num1 = Number.parseFloat(window.prompt('digite o primeiro numero'))

var num2 = Number.parseFloat(window.prompt('digite o segundo numero'))

var resu = (num1 + num2)

alert(`a soma de ${num1} e ${num2} é igual a ${resu}`)

if (resu == 10 ) {
    alert('parabens')
}
else if (resu != 10) {
    alert('errou')
}

