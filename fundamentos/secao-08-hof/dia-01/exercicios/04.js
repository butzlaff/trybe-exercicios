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

// const handleSearch = (year, array) => array.find((element) => element.author.birthYear === year)

// console.log(handleSearch(1947, books))
// Adicione o código do exercício aqui:

// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook = books[0].name;
  books.forEach(book => {
    if(book.name.length < nameBook.length) {
      nameBook = book.name
    }
  });
  return nameBook;
}

// console.log(smallerName(books))

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = () => books.find((book) => book.name.length === 26)


// console.log(getNamedBook());

// const expectedResult = false;

function everyoneWasBornOnSecXX() {  
 return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2001) 
}
// console.log(everyoneWasBornOnSecXX())


// const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
// console.log(someBookWasReleaseOnThe80s())

// const expectedResult = false;

const authorUnique = () => 
  books.every((book) => 
    books.some((book2) => 
    (book.author.birthYear === book2.author.birthYear) && (book.author.name !== book2.author.name)));

console.log(authorUnique())
