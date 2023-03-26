let valueOne = prompt("Digite um numero !!!")

let valueTwo = prompt("Agora mais um !!!")

valueOne = Number(valueOne)
valueTwo = Number(valueTwo)

let soma = valueOne + valueTwo
let sub = valueOne - valueTwo
let multi = valueOne * valueTwo
let div = valueOne / valueTwo
let restDiv = valueOne % valueTwo

alert(`Soma: ` + soma)

if ((valueOne % valueTwo) == 0) {
    alert("A soma é par");
  } else {
    alert("A soma é ímpar");
  }

alert(`Subitração: ` + sub)
alert(`Multiplicação: ` + multi)
alert(`Divisão: ` + div)
alert(`Resto da divisão: ` + restDiv)

if (valueOne == valueTwo) {
    alert ("os numeros inseridos são iguais");
    }else{
    alert ("Os numeros inseridos são diferentes")
}
