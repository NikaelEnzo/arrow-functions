/*
Questão 04: Escreva uma arrow function chamada ehPar que recebe um número 
como parâmetro e retorna true se o número for par e false se for ímpar.
*/

const ehPar = (x) => {
    return x % 2 == 0;
};
console.log(ehPar(3));