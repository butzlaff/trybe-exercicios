const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const dadosString = dados.filter((item) => typeof item === 'string');

const dadosNumber = dados.filter((item) => typeof item === 'number');

console.log(dadosString, dadosNumber)