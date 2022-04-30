/*1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
operação. Faça a implementação usando a palavra function para todas elas.

*/

function soma (b=5, c=5) {
    return b + c
}
function subtracao (b=10, c=5) {
    return b - c
}
function multiplicacao (b=5, c=3) {
    return b * c
}
function divisao (b=50, c=2) {
    return b / c
}
console.log("A soma de B e C =  " + soma())
console.log("A subtração de B e C = " + subtracao())
console.log("A multiplicacao de B e C = " + multiplicacao())
console.log("A divisao de B e C = " + divisao())