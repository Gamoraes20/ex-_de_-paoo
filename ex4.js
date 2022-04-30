/* 
4. Escreva um script que apresenta as seguintes operações para o usuário:
    1- Soma
    2- Subtração
    3-Multiplicação
    4- Divisão
    5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 3 para realizar as operações aritméticas.     

*/

let calculadora = {
    soma : (b, c) => b + c,
    subtracao : (b, c) => b - c,
    multiplicacao : (b, c) => b * c,
    divisao : (b, c) => b / c,
};

const prompt = require("prompt-sync")({ sigint: true });
let op;

do {
    console.log(
    "Menu:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair\n"
    );
    op = parseInt(prompt());

    switch (op) {
        case 1: {
            let a = parseFloat(prompt("Digite o primeiro numero: "));
            let b = parseFloat(prompt("Digite o segundo numero: "));
            console.log(calculadora.soma(b, c));
            break;
        }
        case 2: {
            let a = parseFloat(prompt("Digite o primeiro numero:"));
            let b = parseFloat(prompt("Digite o segundo numero:"));
            console.log(calculadora.subtracao(b, c));
            break;
        }
        case 3: {
            let a = parseFloat(prompt("Digite o primeiro numero: "));
            let b = parseFloat(prompt("Digite o segundo numero: "));
            console.log(calculadora.multiplicacao(b, c));
            break;
        }
        case 4: {
            let a = parseFloat(prompt("Digite o primeiro numero: "));
            let b = parseFloat(prompt("Digite o segundo numero: "));
            console.log(calculadora.divisao(b, c));
            break;
        }
        case 5: {
            console.log("Saindo");
            break;
        }
    }
} while (op != 5);