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

const filterGenre = () => books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')


  // console.log(filterGenre())

  const filterOlder = () => {
    // const dataAtual = ;
    const anoAtual = new Date().getFullYear();
    // console.log(anoAtual)
    const booksOlder = books.filter((book) => 
    ((anoAtual - book.releaseYear) > 60))
    return booksOlder.sort((a, b) => a.releaseYear - b.releaseYear)  
  } 

  // console.log(filterOlder())

  const returnBooksByYear = (year) => books.filter((book) =>
  book.author.birthYear === year).map((filtered) => filtered.name) 
  
  // console.log(returnBooksByYear(1920))

  // const expectedResult = [
  //   'Frank Herbert',
  //   'George R. R. Martin',
  //   'Isaac Asimov',
  //   'J. R. R. Tolkien',
  // ];
  
  const fantasyOrScienceFictionAuthors = () => {
    return books.filter((book) => 
    book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((filtered) => 
    filtered.author.name).sort();
  }

  // console.log(fantasyOrScienceFictionAuthors())

  // const expectedResult = [
  //   'O Senhor dos Anéis',
  //   'Fundação',
  //   'O Chamado de Cthulhu',
  // ];
  
  const oldBooks = () => {
    return filterOlder().map((element) => element.name);
  }

  // console.log(oldBooks());

  // const expectedResult = 'O Senhor dos Anéis';

  const expectedResult = 'O Senhor dos Anéis';

  const authorWith3DotsOnName = () => {
    return books.find((book) => (
      book.author.name.split(' ')
        .filter((word) => word.endsWith('.')).length === 3
    )).name;
  }
  
  console.log(authorWith3DotsOnName());