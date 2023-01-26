const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const arrayStrings = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)

// console.log(arrayStrings)

// const expectedResult = [
//   'George R. R. Martin - 1948',
//   'J. R. R. Tolkien - 1892',
//   'Isaac Asimov - 1920',
//   'Frank Herbert - 1920',
//   'Stephen King - 1947',
//   'H. P. Lovecraft - 1890',
// ];

const formatedAuthorNamesBirth = () => books.map((book) => `${book.author.name} - ${book.author.birthYear}`)
// console.log(formatedAuthorNamesBirth());


const handleAuthorAge = () => books.map((book) => {
return { 
  author: `${book.author.name}`, age: Number(`${book.releaseYear - book.author.birthYear}`)}})
  .sort((author, author2) => author.age - author2.age)

console.log(handleAuthorAge())
