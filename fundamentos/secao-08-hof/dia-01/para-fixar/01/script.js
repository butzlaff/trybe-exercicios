// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// emailListInData.forEach(element => {
//   console.log(`Email: ${element}`)
// });

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const handleNumbers = (array) => array.find((numero) => numero % 3 === 0 && numero % 5 === 0)

// console.log(handleNumbers(numbers))

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const handleNames = (array) => array.find((name) => name.length > 4)

// console.log(handleNames(names))

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// // Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

//  const handleMusic = (obj) => obj.find((item) => item.id === '31031685')

//  console.log(handleMusic(musicas))

//  const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false

// console.log(verifyGrades);

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((person) => person === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

//   const verifyAges = (obj, ages1) => {
//     return obj.every((ages) => (ages.age) >= ages1) 
//   }

// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));