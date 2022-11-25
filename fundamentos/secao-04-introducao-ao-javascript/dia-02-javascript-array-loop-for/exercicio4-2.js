let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// # Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for(let number of numbers){
//     console.log(number);
// }

// # Some todos os valores contidos no array e imprima o resultado;

// let resultado = 0
// for (let number of numbers){
//     resultado += number;
// }
// console.log(resultado);

// # Calcule e imprima a média aritmética dos valores contidos no array;

// let resultado = 0;
// for (let number of numbers){
//     resultado += number;
// }
// console.log(resultado / numbers.length)

// # Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, 
// # imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let resultado = 0;
// for (let number of numbers){
//     resultado += number;
// }
// let resultadoFinal = resultado / numbers.length;

// if (resultadoFinal > 20){ 
//     console.log('Valor maior que 20');
// }else{
//     console.log('Valor menos que 20');
// }

// # Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let greatestNumber = 0;

// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] > greatestNumber)
//         greatestNumber = numbers[i];
// }

// console.log(greatestNumber);

// # Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// let oddNumbers = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 > 0)
//         oddNumbers++;
// }
// if (oddNumbers > 0) {
//     console.log(`Foram encontrados ${oddNumbers} números ímpares`);
// } else {
//     console.log('Nenhum valor ímpar encontrado')
// }

// # Utilizando for, descubra qual o menor valor contido no array e imprima-o

let smallNumber = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smallNumber)
    smallNumber = numbers[i]
}
console.log(smallNumber)