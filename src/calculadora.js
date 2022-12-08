// usa barra para comentários, se for um bloco faz //* e fecha com //*
// Importação / Referencia e Bibliotecas
// Classe (opcional) é um grupo de funçoes
// Funçoes (funcionalidades - da um retorno) ou Metodos (nao da retorno)
// É possivel ter varias funçoes dentro de uma classe
// Para declarar utilizamos:
// var: variavel
// let: variavel aperfeiçoada
// const: constante

// Notaçoes:
// camelCase
// snake_case
                                                // 5    7
let somarDoisnumeros = function somarDoisnumeros (num1,num2) {
                    // 5   +  7
    const resultado = num1 + num2;
            // 12
    return resultado;
}

let subtrairDoisnumeros = function substrairDoisnumeros (num1, num2) {
    const resultado = num1 - num2 
    return resultado;
}

const multiplicarDoisnumeros = (num1, num2) => {
    return num1 * num2;   
}

const dividirDoisNumeros = (num1, num2) => num1 / num2;
